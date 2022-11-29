import * as React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const MainBtn = (props) => {
    return (
        <TouchableOpacity
            style={[styles.rectangleView, props.backgroundColor]}
            activeOpacity={0.2}
            onPress={props.onPress}>
            <Image style={props.size}
                resizeMode="cover"
                source={props.src}
            />
        </TouchableOpacity>);
}

const styles = StyleSheet.create({
    rectangleView: {
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default MainBtn;