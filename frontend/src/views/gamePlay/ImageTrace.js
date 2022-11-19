import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl
} from "react-native";
import { useNavigation, } from "@react-navigation/native";

const ImageTrace = () => {

    return (
        <ScrollView style={styles.ImageTracePage}>
            <View style={styles.header}>
            </View>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({});

export default ImageTrace;
