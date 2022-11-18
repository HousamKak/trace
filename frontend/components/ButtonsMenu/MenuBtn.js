import * as React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

export default MenuBtn;