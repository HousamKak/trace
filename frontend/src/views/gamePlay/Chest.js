import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl, Image
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import DataDisplay from "../../components/Displayers/DataDisplay";
const Chest = () => {
    return (
        <View style={styles.ChestPage}>
            <ScrollView style={styles.ScrollView}>
                <Image source={""} style={styles.chest}></Image>
                <DataDisplay />
                <View>
                    {/* {scripts} */}
                </View>
                <DataDisplay />
                <View>
                    {/* {medals} */}
                </View>

                <View>
                    <View>
                        <Image source={require("../../assets/MenuPage/MenuButtons/Gem.png")}></Image>
                        <Text>3</Text>
                    </View>
                    <View>
                        <Image source={require("../../assets/MenuPage/MenuButtons/Coin.png")}></Image>
                        <Text>2000</Text>
                    </View>
                    <View>
                        <Text>XP</Text>
                        <Text>3000</Text>
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
    ChestPage: {
        backgroundColor: "#1e193b",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
    footer: {
        alignItems: "center",
        width: "100%",
        paddingVertical: "10%",
    },
    closeColor: {
        backgroundColor: "#fb7785",
    },
});

export default Chest;