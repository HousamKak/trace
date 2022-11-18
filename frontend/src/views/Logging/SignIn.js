import * as React from "react";
import SignBtn from "../../components/ButtonsLogging/SignBtn";
import InputField from "../../components/Input/InputField";
import { StyleSheet, ScrollView, View, Text, Image, ActivityIndicator, DevSettings } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";
const base_url = "http://192.168.1.102:8000"

const SignIn = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleClick = async () => {
        const configurationObject = {
            method: "POST",
            url: base_url + "/auth/login",
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            data: { email, password }
        }
        await axios(configurationObject).then((e) => {
            if (e.data.message == "Login Successful") {
                AsyncStorage.setItem("token", JSON.stringify("Bearer " + e.data.token))
                setError("")
            }
        })
    }


    return (
        <View style={styles.signInView}>
            <Image
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../../assets/LogInPage/logo.png")}
            />

            <View style={styles.rectangleView}>
                <InputField placeholder="Email"></InputField>
                <InputField placeholder="Password"></InputField>
                <SignBtn navigation="" text="LOG IN" cwidth={styles.sign} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    sign: { width: 331 },
    rectangleView: {
        marginTop: "12%",
        borderRadius: 20,
        backgroundColor: "#302b4f",
        width: 358,
        height: 320,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 28,
        alignSelf: "center",
    },

    logoIcon: {
        alignSelf: "center",
        marginTop: "16.3%",
    },
    signInView: {
        backgroundColor: "#1e193b",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
});

export default SignIn;
