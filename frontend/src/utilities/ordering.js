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
                let savedItem = itemsList.slice(dividor * i, dividor * (i + 1)).map((it) => <Image key={it.id.toString()} source={GetImage(it.title, images)} />)
                const rapper = <View style={styles.row}>{savedItem}</View>
                rapperArray.push(rapper)
            }
            const remainingItems = itemsList.slice(dividor * i).map((it) => <Image key={it.id.toString()} source={GetImage(it.title, images)} />)
            const rapper = <View style={styles.lastRow}>{remainingItems}</View>
            rapperArray.push(rapper)
            return rapperArray
        }
        else {
            const savedItem = itemsList.map((it) => <Image key={it.id.toString()} source={GetImage(it.title, images)} />)
            const rapper = <View key={-10} style={styles.lastRow}>{savedItem}</View>
            rapperArray.push(rapper)
            return rapperArray
        }
    }
    else {
        const savedItems = <Text style={styles.noContent}>No Saved Items</Text>
        return savedItems
    }
}

const GetImage = (title, images) => {
    const found = images.default.find(e => e.title === title);
    return found ? found.url : null;
};

const styles = StyleSheet.create({
    noContent: {
        fontSize: 20,
        alignSelf: "center",
        marginTop: 20,
        color: "#fff"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 20,
    },
    lastRow: {
        flexDirection: "row",
        marginVertical: 10,
        paddingHorizontal: 10,
        marginRight: "20%",
        marginLeft: "4%",
    },
})

module.exports = item