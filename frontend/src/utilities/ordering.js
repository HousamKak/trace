import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl,
    Image
} from "react-native";

const item = async (itemStorageKey, dividor, typePath) => {
    const items = await AsyncStorage.getItem(itemStorageKey)
    const itemsList = JSON.parse(items)
    if (itemsList) {
        const rapperArray = []
        if (Math.floor(itemsList.length / dividor) > 0) {
            for (var i = 0; i < Math.floor(itemsList.length / dividor); i++) {
                const savedItem = itemsList.slice(dividor * i, dividor * (i + 1)).map((it) => {
                    < Image key={it.item_id} source={require("../../assets/MenuPage" + typePath + it.title + ".png")} style={styles.item} />
                })
                const rapper = <View style={styles.row}>{savedItem}</View>
                rapperArray.push(rapper)
            }
            const remainingItems = itemsList.slice(dividor * (i + 1)).map((it) => <Image key={it.item_id} source={require("../../assets/MenuPage/MenuButtons/friendsIcon.png")} style={styles.item} />)
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

export default { item }