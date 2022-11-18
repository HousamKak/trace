// Here we should have unity page linked, but for the test version I will make a button in the middle of the screen

import * as React from "react";
import {
    StyleSheet,
    View,
} from "react-native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import { useNavigation } from "@react-navigation/native";


const MainPage = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.middleButtonView}>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("Profile")}></MenuBtn>
            </View>
        </View>)
}