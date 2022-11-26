import * as React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const IconTypeDisplay = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.2} style={styles.ContDisplay} onPress={() => props.onPress()}>
            <Image style={styles.Icon} source={props.src} />
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    ContDisplay: {
        width: 120,
        height: 120,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#302b4f",
    },
    Icon: {
        width: 100,
        height: 100,
    }
})

export default IconTypeDisplay;
