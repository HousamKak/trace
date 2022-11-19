import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl, Image
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import SectionBar from "../../components/Breakers/SectionBar";

const Chest = () => {
    return (
        <View style={styles.ChestPage}>
            <ScrollView style={styles.ScrollView}>
                <Image source={require("../../assets/MenuPage/MenuButtons/chest.png")} style={styles.chest}></Image>
                <SectionBar text="SCRIPTS" />
                <View>
                    {/* {scripts} */}
                </View>
                <SectionBar text="MEDALS" />
                <View>
                    {/* {medals} */}
                </View>

                <View style={styles.treasureCont}>
                    <View style={styles.treasure}>
                        <Image style={styles.image} source={require("../../assets/MenuPage/MenuButtons/Gem.png")}></Image>
                        <Text style={styles.text}>3</Text>
                    </View>
                    <View style={styles.treasure}>
                        <Image style={styles.image} source={require("../../assets/MenuPage/MenuButtons/Coin.png")}></Image>
                        <Text style={styles.text}>2000</Text>
                    </View>
                    <View style={styles.treasure}>
                        <Text style={styles.XP}>XP</Text>
                        <Text style={styles.text}>3000</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MainPage")}></MenuBtn>
            </View>
        </View>

    )
};
const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
    },
    treasureCont: {
        alignItems: "center",
    },
    XP: {
        fontSize: 20,
        color: "#fff",
    },
    treasure: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "30%",

    },
    text: {
        fontSize: 18,
        color: "#fff",
    },
    chest: {
        alignSelf: "center",
        marginTop: "10%",
        marginBottom: 20,
    },
    ChestPage: {
        backgroundColor: "#1e193b",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        paddingHorizontal: 20,
    },
    footer: {
        alignItems: "center",
        width: "100%",
        paddingVertical: "10%",
    },
    closeColor: {
        backgroundColor: "#fb7785",
    },
    ScrollView: {
        backgroundColor: "#302b4f",
        borderRadius: 15,
        overflow: "hidden",
        marginTop: "10%",
    },
});

export default Chest;