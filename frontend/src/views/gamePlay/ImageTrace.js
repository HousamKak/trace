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

    return (
        <ScrollView style={styles.ImageTracePage}>
            <View style={styles.header}>
                <View style={styles.upperheader}>
                    <View style={styles.rightheader}>
                        <Image source={""} style={styles.profilePicture}></Image>
                        <Text style={styles.name}> Random Text</Text>
                    </View>
                    <View style={styles.leftheader}>
                        <Image source={""}></Image>
                        <Image source={""}></Image>
                    </View>
                </View>
                <View style={styles.lowerheader}>
                    <Text style={styles.title}>Random random reando</Text>
                    <Text style={styles.description}> random I am</Text>
                </View>
            </View>
            <View style={styles.ImageTrace}>
                <Image source={""}></Image>
            </View>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    ImageTracePage: {
        backgroundColor: "#1e193b",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
});

export default ImageTrace;
