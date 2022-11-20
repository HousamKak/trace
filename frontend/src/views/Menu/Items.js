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
import { item } from "../../utilities/ordering";


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

    const item = async (itemStorageKey, dividor, typePath) => {
        const items = await AsyncStorage.getItem(itemStorageKey)
        const itemsList = JSON.parse(items)
        console.log(itemsList)
        if (itemsList) {
            const rapperArray = []
            console.log(itemsList)
            if (Math.floor(itemsList.length / 4) > 0) {
                for (var i = 0; i < Math.floor(itemsList.length / 4); i++) {
                    const savedItem = itemsList.slice(4 * i, 4 * (i + 1)).map((it) => {
                        <Image key={it.item_id} source={GetImage(it.title)} style={styles.item} />
                    })
                    const rapper = <View style={styles.row}>{savedItem}</View>
                    rapperArray.push(rapper)
                }
                const remainingItems = itemsList.slice(4 * (i + 1)).map((it) => <Image key={it.item_id} source={GetImage(it.title)} style={styles.item} />)
                const rapper = <View style={styles.lastRow}>{remainingItems}</View>
                rapperArray.push(rapper)
                const savedItems = rapperArray.map((rap) => rap)
                setMyItems(savedItems)
            }
            else {
                const savedItem = itemsList.map((it) => <Image key={it.item_id} source={GetImage(it.title)} style={styles.aloneitem} />)
                const rapper = <View style={styles.lastRow}>{savedItem}</View>
                rapperArray.push(rapper)
                const savedItems = rapperArray.map((rap) => rap)
                setMyItems(savedItems)
            }
            console.log(rapperArray)
        }
        else {
            const savedItems = <Text style={styles.noContent}>No Saved Items</Text>
            setSaves(savedItems)
        }
    }

    React.useEffect(() => {
        item("items", 4, "/MenuButtons/")
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

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
        backgroundColor: "#1e193b",
        paddingHorizontal: 20,
    },
    noContent: {
        fontSize: 20,
        alignSelf: "center",
        marginTop: 20,
        color: "#fff"
    },
    footer: {
        alignItems: "center",
        width: "100%",
        paddingVertical: "10%",
    },
    closeColor: {
        backgroundColor: "#fb7785",
    },
    scrollView: {
        backgroundColor: "#302b4f",
        borderRadius: 15,
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
    itemsCont: {
        width: "100%",
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 10,
    },
    lastRow: {
        flexDirection: "row",
        marginVertical: 10,
        paddingHorizontal: 10,
        marginRight: "20%",
    },

})

export default Items;