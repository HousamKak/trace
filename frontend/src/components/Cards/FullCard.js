import * as React from "react";
import { Text, StyleSheet, TouchableOpacity, Image, View } from "react-native";


const FullCard = (props) => {
    return (
        <TouchableOpacity
            style={styles.rectangleView}
            activeOpacity={0.2}
        >
            <View style={styles.leftCont}>
                {props.textOnly ? "" : <Image source={props.profile} style={styles.profileSize} />}
                <Text style={styles.text}> {props.text}</Text>
            </View>

            <View style={styles.rightCont}>
                {props.noType ? "" : <Image source={props.icon} style={styles.iconSize} />}
                {props.nodelete ? "" : <Image source={require("../../assets/MenuPage/MenuButtons/delete.png")} style={styles.delete} />}
            </View>

        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    rectangleView: {
        borderRadius: 15,
        backgroundColor: "#302b4f",
        width: '90%',
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 15,
        marginBottom: 8,
        justifyContent: 'space-between'
    },
    leftCont: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightCont: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSize: {
        marginRight: 15
    },
})

export default FullCard;