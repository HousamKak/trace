import * as React from "react";
import {
    Image,
    StyleSheet,
    View,
    ScrollView, RefreshControl, TextInput
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import IconTypeDisplay from "../../components/Displayers/IconTypeDisplay";
import SignBtn from "../../components/ButtonsLogging/SignBtn";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";

const AddTrace = () => {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.AddTracePage}>
            <Image
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../../assets/MenuPage/AddTrace/BigHand.png")}
            />
            <View style={styles.IconTypeContainer}>
                <IconTypeDisplay src={require("../../assets/MenuPage/TraceTypes/cameraIcon.png")} />
                <IconTypeDisplay src={require("../../assets/MenuPage/TraceTypes/videoIcon.png")} />
                <IconTypeDisplay src={require("../../assets/MenuPage/TraceTypes/musicIcon.png")} />
            </View>
            <View style={styles.textInputFields}>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.field}
                        placeholder={"Add Title"}
                        mode="flat"
                        placeholderTextColor="#818181"
                        onChangeText={(e) => handleTitleChnage(e)}
                    />
                    <TextInput
                        placeholder="Write Something" mode="flat"
                        placeholderTextColor="#818181"
                        style={styles.multiline}
                        multiline={true}
                        maxLength={280} />
                </View>
                <SignBtn onPress={() => { navigation.navigate("MainPage") }} text="DROP ON MAP" cwidth={styles.sign} />
            </View>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </ScrollView>)
};

const styles = StyleSheet.create({
    field: {
        height: 55,
        width: "100%",
        borderRadius: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 8,
        marginBottom: 22,
    },
    logoIcon: {
        alignSelf: "center",
        marginTop: "12%",
        marginBottom: "12%",
    },
    footer: {
        alignItems: "center",
        width: "100%",
        paddingVertical: "10%",
    },
    closeColor: {
        backgroundColor: "#fb7785",
    },
    multiline: {
        height: 110,
        width: "100%",
        borderRadius: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 8,
        textAlignVertical: "top",
        paddingVertical: 10,
        marginBottom: 22,
    },
    AddTracePage: {
        backgroundColor: "#1e193b",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        paddingHorizontal: "5%",
    },
    IconTypeContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "5%",
    },
    textInputFields: {
        backgroundColor: "#302b4f",
        borderRadius: 20,
        padding: "5%",
    },
    textInputContainer: {
        alignItems: "center",
    }

});

export default AddTrace;