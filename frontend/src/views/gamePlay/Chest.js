import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import DataDisplay from "../../components/Displayers/DataDisplay";
const Chest = () => {
    return (
        <View>
            <ScrollView>
                <Image></Image>
                <DataDisplay />
                <View>

                </View>
                <DataDisplay />
                <View>

                </View>

                <View>
                    <View>
                        <Image></Image>
                        <Text></Text>
                    </View>
                    <View>
                        <Image></Image>
                        <Text></Text>
                    </View>
                    <View>
                        <Image></Image>
                        <Text></Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MainPage")}></MenuBtn>
            </View>
        </View>

    )
};
const styles = StyleSheet.create({});

export default Chest;