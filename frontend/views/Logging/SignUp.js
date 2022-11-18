import * as React from "react";
import SignBtn from "../../components/SignBtn";
import InputField from "../../components/InputField";
import { StyleSheet, View, Image } from "react-native";

const SignUp = () => {
    return (
        <View style={styles.signUpView}>
            <Image
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../../assets/LogInPage/logo.png")}
            />
            <View style={styles.rectangleView}>
                <InputField placeholder="Username"></InputField>
                <InputField placeholder="Email"></InputField>
                <InputField placeholder="Password"></InputField>
                <SignBtn navigation="" text="SIGN UP" cwidth={styles.sign} />
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
