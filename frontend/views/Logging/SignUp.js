import * as React from "react";
import SignBtn from "../../components/SignBtn";
import InputField from "../../components/InputField";
import { StyleSheet, View, Image } from "react-native";


const SignIn = () => {

    return (
        <View style={styles.signInView}>
            <Image />
            <View style={styles.rectangleView}>
                <InputField placeholder="Username"></InputField>
                <InputField placeholder="Email"></InputField>
                <InputField placeholder="Password"></InputField>
                <SignBtn ></SignBtn>
            </View>
        </View>
    )
};


export default SignIn;
