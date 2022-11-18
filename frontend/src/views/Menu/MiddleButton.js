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


const MiddleButton = () => { }
export default MiddleButton;