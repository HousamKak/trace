import * as React from "react";
import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const BtnAndLogo = (props) => {
    const logo = props.logo;
    return (
        <TouchableOpacity
            style={[styles.btnAndLogoTouchableOpacity, props.bstyle]}
            activeOpacity={0.2}
            onPress={() => { }}
        >
            <Image
                style={styles.LogoIcon}
                resizeMode="cover"
                source={props.logo}
            />
            <Text style={styles.LoginText}> {props.text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    LogoIcon: {
        width: 31,
        height: 31,
        flexShrink: 0,
        overflow: "hidden",
    },
});

export default BtnAndLogo;