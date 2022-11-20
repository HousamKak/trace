import * as React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const item = async (itemStorageKey, dividor, images) => {
    const items = await AsyncStorage.getItem(itemStorageKey)
    const itemsList = JSON.parse(items)
    if (itemsList) {
        const rapperArray = []
        if (Math.floor(itemsList.length / dividor) > 0) {
            for (var i = 0; i < Math.floor(itemsList.length / dividor); i++) {
                const savedItem = itemsList.slice(dividor * i, dividor * (i + 1)).map((it) => {
                    <Image key={it.item_id} source={GetImage(it.title, images)} style={styles.item} />
                })
                const rapper = <View style={styles.row}>{savedItem}</View>
                rapperArray.push(rapper)
            }
            const remainingItems = itemsList.slice(4 * (i + 1)).map((it) => <Image key={it.item_id} source={GetImage(it.title, images)} style={styles.item} />)
            const rapper = <View style={styles.lastRow}>{remainingItems}</View>
            rapperArray.push(rapper)
            const savedItems = rapperArray.map((rap) => rap)
            return savedItems
        }
        else {
            const savedItem = itemsList.map((it) => <Image key={it.item_id} source={GetImage(it.title, images)} style={styles.aloneitem} />)
            const rapper = <View style={styles.lastRow}>{savedItem}</View>
            rapperArray.push(rapper)
            const savedItems = rapperArray.map((rap) => rap)
            return savedItems
        }
    }
    else {
        const savedItems = <Text style={styles.noContent}>No Saved Items</Text>
        return savedItems
    }
}

const GetImage = (title, images) => {
    console.log(images)
    const found = images.default.find(e => e.title === title);
    return found ? found.url : null;
};

const styles = StyleSheet.create({
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

module.exports = item