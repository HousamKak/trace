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

    const item = async () => {
        const items = await AsyncStorage.getItem("items")
        const itemsList = JSON.parse(items)
        if (itemsList) {
            const rapperArray = []
            if (Math.floor(itemsList.length / 4) > 0) {
                for (var i = 0; i < Math.floor(itemsList.length / 4); i++) {
                    const savedItem = itemsList.slice(4 * i, 4 * (i + 1)).map((it) => <Image key={it.item_id} source={require("../../assets/MenuPage/MenuButtons/friendsIcon.png")} style={styles.item} />)
                    const rapper = <View style={styles.row}>{savedItem}</View>
                    rapperArray.push(rapper)
                }
                const remainingItems = itemsList.slice(4 * (i + 1)).map((it) => <Image key={it.item_id} source={require("../../assets/MenuPage/MenuButtons/friendsIcon.png")} style={styles.item} />)
                const rapper = <View style={styles.lastRow}>{remainingItems}</View>
                rapperArray.push(rapper)
                const savedItems = rapperArray.map((rap) => rap)
                setMyItems(savedItems)
            }
            else {
                const savedItem = itemsList.map((it) => <Image key={it.item_id} source={require("../../assets/MenuPage/MenuButtons/friendsIcon.png")} style={styles.aloneitem} />)
                const rapper = <View style={styles.lastRow}>{savedItem}</View>
                rapperArray.push(rapper)
                const savedItems = rapperArray.map((rap) => rap)
                setMyItems(savedItems)
            }
        }
        else {
            const savedItems = <Text style={styles.noContent}>No Saved Items</Text>
            setSaves(savedItems)
        }
    }

    React.useEffect(() => {
        item()
    }, [refreshing])

    return (
        <View style={styles.screenView}>
            <Text style={styles.text}>ITEMS</Text>
            < ScrollView style={styles.scrollView} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <View style={styles.itemsCont}>
                    {myitems}
                </View>
            </ScrollView >
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})