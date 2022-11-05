import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignBtn = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={[styles.signBtnTouchableOpacity, props.cwidth]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate(props.navigation)}
        >
            <Text style={styles.signText}> {props.text}</Text>
        </TouchableOpacity>
    );
};
export default SignBtn;