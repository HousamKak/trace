import * as React from "react";
import SignBtn from "../../components/SignBtn";
// import InputField from "../../components/InputField";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";

const SignIn = () => {
    return (
        <View style={styles.signInView}>
            <image
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../../assets/LogInPage/logo.png")} />
            <View>
                <InputField></InputField>
                <InputField></InputField>
                <SignBtn></SignBtn>
            </View>
        </View>
    );
};

export default SignIn;