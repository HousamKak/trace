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


export default BtnAndLogo;