import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const IconTypeDisplay = (props) => {
    return (
        <View style={styles.ContDisplay}>
            <Image style={styles.Icon} source={props.src} />
        </View>)
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
        // resizeMode: "center",
        width: 100,
        height: 100,
    }
})

export default IconTypeDisplay;
