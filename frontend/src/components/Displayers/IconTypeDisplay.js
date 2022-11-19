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
        width: 84,
        height: 84,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    Icon: {
        width: 60,
        height: 60,
    }

})

export default DataDisplay;
