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
            <View style={styles.body}>
                <View style={styles.top}>
                    <MenuBtnText ></MenuBtnText>
                    <MenuBtnText ></MenuBtnText>
                </View>
                <View style={styles.middle}>
                    <MenuBtnText ></MenuBtnText>
                </View>
                <View style={styles.bottom}>
                    <MenuBtnText ></MenuBtnText>
                    <MenuBtnText ></MenuBtnText>
                </View>
            </View>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => { navigation.navigate("MainPage") }} ></MenuBtn>
            </View>
        </View>
    );
}
export default MiddleButton;