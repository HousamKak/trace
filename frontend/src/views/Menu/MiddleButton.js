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

}
export default MiddleButton;