import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl,
    Image
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import SectionBar from "../../components/Breakers/SectionBar";
import DataDisplay from "../../components/Displayers/DataDisplay";


const Profile = () => {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);
}

