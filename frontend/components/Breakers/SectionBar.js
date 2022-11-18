import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

const SectionBar = (props) => {
    return (
        <View style={styles.sectionBar}>
            <View style={styles.sectionLine} />
            <Text style={styles.sectionBarText}>{props.text}</Text>
            <View style={styles.sectionLine} />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionLine: {
        backgroundColor: "#181628",
        height: 1,
        flex: 1,
        alignSelf: "center",
    },
})

export default SectionBar;