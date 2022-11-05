import * as React from "react";
import SignBtn from "../../components/SignBtn";
import InputField from "../../components/InputField";
import { StyleSheet, View, Image } from "react-native";


const SignIn = () => {

    return (
        <View style={styles.signInView}>
            <Image
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../../assets/LogInPage/logo.png")} />
            <View style={styles.rectangleView}>
                <InputField placeholder="Username"></InputField>
                <InputField placeholder="Email"></InputField>
                <InputField placeholder="Password"></InputField>
                <SignBtn navigation="" text="SIGN UP" cwidth={styles.sign}></SignBtn>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    sign: { width: 331 },
});


export default SignIn;
