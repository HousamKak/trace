import * as React from "react";
import SignBtn from "../../components/ButtonsLogging/SignBtn";
import InputField from "../../components/InputField";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, ScrollView, View, Image, Text } from "react-native";
import { validateEmail, validatePassword } from "../../utilities/validate";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const base_url = "http://192.168.1.102:8000"

const SignUp = () => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [dob, setDob] = React.useState("");
    const [errorEmail, setErrorEmail] = React.useState("");
    const [errorPassword, setErrorPassword] = React.useState("");
    AsyncStorage.getItem("dob").then((value) => { setDob(JSON.parse(value)) })

    const handleClick = async () => {
        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);

        if (!isValidEmail.status) {
            setErrorEmail(isValidEmail.message);
        } else { setErrorEmail("") }

        if (!isValidPassword.status) {
            setErrorPassword(isValidPassword.message);
        } else { setErrorPassword("") }

        const configurationObject = {
            method: "POST",
            url: base_url + "/auth/signup",
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            data: { username, email, password, dob }
        }
        if (isValidEmail.status && isValidPassword.status) {
            try {
                await axios(configurationObject).then((e) => {
                    if (e.data.message == "registration successful") {
                        navigation.navigate("SignIn")
                    }
                    else {
                        setErrorEmail(e.data.message)
                    }
                })
            }
            catch (error) {
                console.log(error)
            }
        }

        return (
            <ScrollView style={styles.signUpView}>
                <Image
                    style={styles.logoIcon}
                    resizeMode="cover"
                    source={require("../../assets/LogInPage/logo.png")}
                />
                <View style={styles.rectangleView}>
                    <InputField placeholder="Username" onChange={setUsername}></InputField>
                    <InputField placeholder="Email" onChange={setEmail}></InputField>
                    {(errorEmail !== "") ? <Text style={styles.error_message}>{errorEmail}</Text> : ""}
                    <InputField placeholder="Password" onChange={setPassword}></InputField>
                    {(errorPassword !== "") ? <Text style={styles.error_message}>{errorPassword}</Text> : ""}
                    <SignBtn navigation="" text="SIGN UP" cwidth={styles.sign} />
                </View>
            </ScrollView>
        );
    };

    const styles = StyleSheet.create({
        sign: { width: 331 },
        rectangleView: {
            marginTop: "12%",
            borderRadius: 20,
            backgroundColor: "#302b4f",
            width: 358,
            height: 428,
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 28,
            alignSelf: "center",
        },
        logoIcon: {
            alignSelf: "center",
            marginTop: "16.3%",
        },
        signUpView: {
            backgroundColor: "#1e193b",
            flex: 1,
            width: "100%",
            height: 800,
            overflow: "hidden",
        },
    });

    export default SignUp;
