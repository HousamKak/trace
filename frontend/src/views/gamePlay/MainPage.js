// Here we should have unity page linked, but for the test version I will make a button in the middle of the screen

import * as React from "react";
import {
    StyleSheet,
    View,
} from "react-native";
import MainBtn from "../../components/ButtonsMenu/MainBtn";
import { useNavigation } from "@react-navigation/native";


const MainPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.middleButtonView}>
            <View style={styles.footer}>
                <MainBtn src={require("../../assets/MainPage/profileMainIcon.png")} backgroundColor={styles.Color} onPress={() => navigation.navigate("Profile")}></MainBtn>
                <MainBtn src={require("../../assets/MainPage/handMainIcon.png")} backgroundColor={styles.Color} onPress={() => navigation.navigate("MiddleButton")}></MainBtn>
                <MainBtn src={require("../../assets/MainPage/uploadMainIcon.png")} backgroundColor={styles.Color} onPress={() => navigation.navigate("AddTrace")}></MainBtn>
            </View>
        </View>)
}


const styles = StyleSheet.create({
    Color: {
        backgroundColor: "#8a67f4",
    },
    footer: {
        flexDirection: "row",
        marginTop: "100%",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-around"
    },
    middleButtonView: {
        backgroundColor: "#302b4f",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
})

export default MainPage;