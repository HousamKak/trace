import * as React from "react";
import SignBtn from "../../components/SignBtn";
import InputField from "../../components/InputField";
import { StyleSheet, View, Image } from "react-native";


const SignIn = () => {

    return (
        <View style={styles.signInView}>
            <Image />
            <View style={styles.rectangleView}>
                <InputField></InputField>
                <InputField></InputField>
                <InputField></InputField>
                <SignBtn></SignBtn>
            </View>
        </View>
    )
};


export default SignIn;
