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

export default FullCard;