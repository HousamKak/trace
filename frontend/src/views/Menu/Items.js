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
const item = require("../../utilities/ordering.js")
const itemImages = require("../../utilities/Images/itemImages.js");

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


    React.useEffect(() => {
        (async () => {
            const LoadedItems = await item("items", 4, itemImages);
            setMyItems(LoadedItems)
        })()
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

});

export default Items;