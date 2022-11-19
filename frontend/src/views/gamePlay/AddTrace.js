import * as React from "react";
import {
    Image,
    StyleSheet,
    View,
    ScrollView, RefreshControl, TextInput
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import IconTypeDisplay from "../../components/Displayers/IconTypeDisplay";
import InputField from "../../components/Inputs/InputField";
import SignBtn from "../../components/ButtonsLogging/SignBtn";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";

const AddTrace = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.AddTracePage}>
            <Image
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../../assets/LogInPage/logo.png")}
            />
            <View styles={styles.IconTypeContainer}>
                <IconTypeDisplay src={require("../../assets/MenuPage/TraceTypes/cameraIcon.png")} />
                <IconTypeDisplay src={require("../../assets/MenuPage/TraceTypes/videoIcon.png")} />
                <IconTypeDisplay src={require("../../assets/MenuPage/TraceTypes/musicIcon.png")} />
            </View>
            <View style={styles.textInputFields}>
                <InputField placeholder="Add Title" />
                <TextInput placeholder="Write Something" style={styles.multiline} multiline={true} maxLength={280} />
                <SignBtn onPress={() => { navigation.navigate("MainPage") }} text="SIGN IN" cwidth={styles.sign} />
            </View>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </View>)
};

const styles = StyleSheet.create({
    footer: {
        alignItems: "center",
        width: "100%",
        paddingVertical: "10%",
    },
    closeColor: {
        backgroundColor: "#fb7785",
    },
    multiline: {
        borderRadius: 12,
    }
});

export default AddTrace;