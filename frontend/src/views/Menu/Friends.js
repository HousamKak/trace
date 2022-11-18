import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FullCard from "../../components/Cards/FullCard";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Friends = () => {
    const navigation = useNavigation();
    const [myfriends, setmyfriends] = React.useState([]);

    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    const friend = async () => {
        const friends = await AsyncStorage.getItem("friends")
        const friendsList = JSON.parse(friends)
        if (friendsList) {
            const friendItems = friendsList.map((friend) => <FullCard key={friend.user_id} text={friend.username} profile={require("../../assets/MenuPage/MenuButtons/friendsIcon.png")} icon={"../../assets/MenuPage/MenuButtons/friendsIcon.png"} noType={1} />)
            setmyfriends(friendItems)
        }
    }
}