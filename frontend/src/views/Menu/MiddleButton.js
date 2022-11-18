import * as React from "react";
import {
    StyleSheet,
    View,
    DevSettings,
    ActivityIndicator
} from "react-native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import MenuBtnText from "../../components/ButtonsMenu/MenuBtnText";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
const base_url = "http://192.168.1.102:8000"


const MiddleButton = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = React.useState(false);

    const getData = async (route, key) => {
        const user_prime = await AsyncStorage.getItem("user")
        const user = JSON.parse(user_prime)
        const configurationObject = {
            method: "GET",
            url: base_url + route + user.user_id,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        }
        try {
            const response = await axios(configurationObject)
            if (response.status === 200) {
                AsyncStorage.setItem(key, JSON.stringify(response.data))
            }
        } catch (e) { console.log(e.message) }
    }
    return (
        <View style={styles.middleButtonView}>
            <View style={styles.header}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/shutdown.png")} cwdith={styles.width} cheight={styles.height} backgroundColor={styles.closeColor} onPress={() => {
                    AsyncStorage.clear()
                    setLoading(true)
                    DevSettings.reload()
                }} />
            </View>
            {loading ? <ActivityIndicator style={styles.ActivityIndicator} size="small" color="#8a67f4" /> : ""}
            <View style={styles.body}>
                <View style={styles.top}>
                    <MenuBtnText text={"Saved"} src={require("../../assets/MenuPage/MenuButtons/savedIcon.png")} backgroundColor={styles.MenuIconsColor}></MenuBtnText>
                    <MenuBtnText text={"Friends"} src={require("../../assets/MenuPage/MenuButtons/friendsIcon.png")} backgroundColor={styles.MenuIconsColor} ></MenuBtnText>
                </View>
                <View style={styles.middle}>
                    <MenuBtnText text={"Items"} src={require("../../assets/MenuPage/MenuButtons/swordIcon.png")} backgroundColor={styles.MenuIconsColor} ></MenuBtnText>
                </View>
                <View style={styles.bottom}>
                    <MenuBtnText text={"My Traces"} src={require("../../assets/MenuPage/MenuButtons/handIcon.png")} edits={styles.shiftText} backgroundColor={styles.MenuIconsColor} ></MenuBtnText>
                    <MenuBtnText text={"Scripts"} src={require("../../assets/MenuPage/MenuButtons/scriptsIcon.png")} backgroundColor={styles.MenuIconsColor}></MenuBtnText>
                </View>
            </View>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => { navigation.navigate("MainPage") }} ></MenuBtn>
            </View>
        </View>
    );
}
export default MiddleButton;