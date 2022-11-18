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

export default SectionBar;