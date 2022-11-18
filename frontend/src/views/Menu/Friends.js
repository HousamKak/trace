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
        } else {
            const friendItems = <Text style={styles.noContent}>No Added Friends</Text>
            setmyfriends(friendItems)
        }
    }

    React.useEffect(() => {
        friend()
    }, [refreshing])

    return (
        <View style={styles.screenView}>
            <Text style={styles.text}>FRIENDS</Text>
            <ScrollView style={styles.scrollView} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <View style={styles.cards}>
                    {myfriends}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")} ></MenuBtn>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    noContent: {
        fontSize: 20,
        alignSelf: "center",
        marginTop: 20,
        color: "#fff"
    },
    text: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        marginTop: "20%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: "8%",
    },
})