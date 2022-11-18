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

        </TouchableOpacity >
    );
}

export default FullCard;