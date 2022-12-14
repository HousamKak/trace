import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const DataDisplay = (props) => {
    return (
        <View style={styles.DataDisplay}>
            <View style={styles.query}>
                <Image style={props.cheat} source={props.src} />
                <Text style={styles.data}>{props.data}</Text>
            </View>
            <Text style={styles.info}>{props.info}</Text>
        </View>)
}

const styles = StyleSheet.create({
    DataDisplay: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 8,
        justifyContent: "space-between",
        paddingHorizontal: "30%",
    },
    query: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },
    data: {
        color: "#fff",
        fontSize: 12,
        marginLeft: 10,
    },
    info: {
        color: "#fff",
        fontSize: 12,
    },

})

export default DataDisplay;
