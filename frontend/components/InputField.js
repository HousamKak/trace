import * as React from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";

const InputField = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.placeholder}</Text>
            <TextInput
                style={styles.field}
                placeholder={props.placeholder}
                mode="flat"
                placeholderTextColor="#818181"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
    },
    text: {
        fontSize: 16,
        color: "#fff",
        textAlign: "left",
        marginBottom: 6,
    },
});
export default InputField;