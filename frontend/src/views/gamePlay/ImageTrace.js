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
                <View>
                    <View></View>
                    <View></View>
                </View>
                <View>
                    <Text ></Text>
                    <Text></Text>
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

const styles = StyleSheet.create({});

export default ImageTrace;
