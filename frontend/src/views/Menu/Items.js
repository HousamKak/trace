import * as React from "react";
import {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Items = () => {
    const [myitems, setMyItems] = React.useState([])
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