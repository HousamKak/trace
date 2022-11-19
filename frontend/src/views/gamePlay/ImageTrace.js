import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl, Image
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";

const ImageTrace = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.ImageTracePage}>
            <ScrollView >
                <View style={styles.header}>
                    <View style={styles.upperheader}>
                        <View style={styles.rightheader}>
                            <Image source={require("../../assets/MenuPage/trialprofile.png")} style={styles.profilePicture}></Image>
                            <Text style={styles.name}> Random Text</Text>
                        </View>
                        <View style={styles.leftheader}>
                            <Image source={require("../../assets/MenuPage/Friends/addFriendIcon.png")}></Image>
                            <Image source={require("../../assets/MenuPage/Friends/saveFriendIcon.png")}></Image>
                        </View>
                    </View>
                    <View style={styles.lowerheader}>
                        <Text style={styles.title}>Check my tree</Text>
                        <Text style={styles.description}>This is some random text and the likes are
                            whatever you think they are.</Text>
                    </View>
                </View>
                <View style={styles.ImageTrace}>
                    <Image source={""} style={styles.Image}></Image>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    lowerheader: {
        paddingHorizontal: 6,
    },
    profilePicture: {
        height: 50,
        width: 50,
    },
    rightheader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 145,
    },
    leftheader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 85,
    },
    upperheader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
        marginBottom: 13,
    },
    header: {
        backgroundColor: "#302b4f",
        width: "100%",
        marginTop: "15%",
        paddingRight: "3%",
        paddingLeft: "5%",
        borderRadius: 20,
    },
    title: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        color: "#ffffff",
        fontSize: 14,
        marginBottom: 30,
    },
    name: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 14,
    },
    ImageTracePage: {
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
    ImageTrace: {
        backgroundColor: "#302b4f",
    }

});

export default ImageTrace;
