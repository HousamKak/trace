import * as React from "react";
import {
    Text,
    View,
    Image,
    StyleSheet
} from "react-native";


const GetImage = (title, IMAGES) => {
    const found = IMAGES.find(e => e.title === title);
    return found ? found.url : null;
};

const item = async (itemStorageKey, dividor, IMAGES) => {
    const items = await AsyncStorage.getItem(itemStorageKey)
    const itemsList = JSON.parse(items)
    console.log(itemsList)
    if (itemsList) {
        const rapperArray = []
        console.log(itemsList)
        if (Math.floor(itemsList.length / dividor) > 0) {
            for (var i = 0; i < Math.floor(itemsList.length / dividor); i++) {
                const savedItem = itemsList.slice(dividor * i, dividor * (i + 1)).map((it) => {
                    <Image key={it.item_id} source={GetImage(it.title, IMAGES)} style={styles.item} />
                })
                const rapper = <View style={styles.row}>{savedItem}</View>
                rapperArray.push(rapper)
            }
            const remainingItems = itemsList.slice(4 * (i + 1)).map((it) => <Image key={it.item_id} source={GetImage(it.title, IMAGES)} style={styles.item} />)
            const rapper = <View style={styles.lastRow}>{remainingItems}</View>
            rapperArray.push(rapper)
            const savedItems = rapperArray.map((rap) => rap)
            setMyItems(savedItems)
        }
        else {
            const savedItem = itemsList.map((it) => <Image key={it.item_id} source={GetImage(it.title, IMAGES)} style={styles.aloneitem} />)
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

export default { item }