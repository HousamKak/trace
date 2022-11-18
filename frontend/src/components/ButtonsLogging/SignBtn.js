import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignBtn = (props) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={[styles.signBtnTouchableOpacity, props.cwidth]}
            activeOpacity={0.2}
            onPress={() => {
                props.onPress()
            }}
        >
            <Text style={styles.signText}> {props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    signText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#fff",
    },
    signBtnTouchableOpacity: {
        borderRadius: 12,
        backgroundColor: "#8a67f4",
        height: 55,
        paddingHorizontal: 49,
        paddingVertical: 4,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default SignBtn;
