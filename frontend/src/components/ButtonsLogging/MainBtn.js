import * as React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

const MenuBtn = (props) => {
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
        borderRadius: 20,
        width: 56,
        height: 53,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default MenuBtn;