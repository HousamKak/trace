import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import MenuBtn from "./MenuBtn";

const MenuBtnText = (props) => {
    return (
        <View style={styles.rectangleView}>
            <Text style={[styles.text, props.edits]}>{props.text}</Text>
            <MenuBtn src={props.src} backgroundColor={props.backgroundColor} onPress={props.onPress} />
        </View>);
}

export default MenuBtnText;