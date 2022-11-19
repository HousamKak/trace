import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import IconTypeDisplay from "../../components/Displayers/IconTypeDisplay";

const AddTrace = () => {
    <View style={styles.AddTracePage}>
        <Image
            style={styles.logoIcon}
            resizeMode="cover"
            source={require("../../assets/LogInPage/logo.png")}
        />
        <View styles={styles.IconTypeContainer}>

        </View>
    </View>
};

const styles = StyleSheet.create({});

export default AddTrace;