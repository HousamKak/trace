import * as React from "react";
import {
    StyleSheet,
    View,
    DevSettings,
    ActivityIndicator,
    ScrollView
} from "react-native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import MenuBtnText from "../../components/ButtonsMenu/MenuBtnText";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native";
import { getData } from "../../utilities/axios/getData";
const base_url = "http://192.168.1.102:8000"


const MiddleButton = () => {
    const navigation = useNavigation();
    const [loading, setLoading] = React.useState(false);

    return (
        <ScrollView style={styles.middleButtonView}>
            <View style={styles.header}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/shutdown.png")} cwdith={styles.width} cheight={styles.height} backgroundColor={styles.closeColor} onPress={() => {
                    AsyncStorage.clear()
                    setLoading(true)
                    DevSettings.reload()
                }} />
            </View>
            {loading ? <ActivityIndicator style={styles.ActivityIndicator} size="small" color="#8a67f4" /> : ""}
            <View style={styles.body}>
                <View style={styles.top}>
                    <MenuBtnText text={"Saved"} src={require("../../assets/MenuPage/MenuButtons/savedIcon.png")} backgroundColor={styles.MenuIconsColor} onPress={() => {
                        navigation.navigate("Saved")
                        getData("/user/saves/", "saves")
                    }}></MenuBtnText>
                    <MenuBtnText text={"Friends"} src={require("../../assets/MenuPage/MenuButtons/friendsIcon.png")} backgroundColor={styles.MenuIconsColor} onPress={() => {
                        navigation.navigate("Friends")
                        getData("/user/friends/", "friends")
                    }} ></MenuBtnText>
                </View>
                <View style={styles.middle}>
                    <MenuBtnText text={"Items"} src={require("../../assets/MenuPage/MenuButtons/swordIcon.png")} backgroundColor={styles.MenuIconsColor} onPress={() => {
                        navigation.navigate("Items")
                        getData("/user/items/", "items")
                    }}></MenuBtnText>
                </View>
                <View style={styles.bottom}>
                    <MenuBtnText text={"My Traces"} src={require("../../assets/MenuPage/MenuButtons/handIcon.png")} edits={styles.shiftText} backgroundColor={styles.MenuIconsColor} onPress={() => {
                        navigation.navigate("MyTraces")
                        getData("/traces/user/", "mytraces")
                    }}></MenuBtnText>
                    <MenuBtnText text={"Scripts"} src={require("../../assets/MenuPage/MenuButtons/scriptsIcon.png")} backgroundColor={styles.MenuIconsColor} onPress={() => {
                        navigation.navigate("Scripts")
                        getData("/user/scripts/", "scripts")
                    }}></MenuBtnText>
                </View>
            </View>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => { navigation.navigate("MainPage") }} ></MenuBtn>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    ActivityIndicator: {
        paddingHorizontal: "3%",
        marginTop: 4,
    },
    shiftText: { marginLeft: -10 },
    settingColor: {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    closeColor: {
        backgroundColor: "#fb7785",
    },
    MenuIconsColor: {
        backgroundColor: "#8a67f4",
    },
    header: {
        marginTop: "10%",
        paddingHorizontal: 30,
        marginBottom: "60%",
        alignItems: "flex-end",
        width: "100%",
    },
    body: {
        width: 252,
        height: 280,
        alignSelf: "center",
        marginBottom: 98,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    top: {
        justifyContent: "space-between",
        width: "100%",
        alignItems: "space-between",
        flexDirection: "row",
    },
    middle: {
        alignItems: "center",
        width: "100%",
    },
    bottom: {
        justifyContent: "space-between",
        width: "100%",
        flexDirection: "row",
    },
    footer: {
        alignItems: "center",
        width: "100%",
        marginTop: "13%",
    },
    middleButtonView: {
        backgroundColor: "#302b4f",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
})

export default MiddleButton;