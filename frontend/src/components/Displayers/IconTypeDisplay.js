import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const IconTypeDisplay = (props) => {
    return (
        <View style={styles.ContDisplay}>
            <Image style={styles.Icon} source={props.src} />
        </View>)
}

const styles = StyleSheet.create({

})

export default DataDisplay;
