import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import IconTypeDisplay from "../../components/Displayers/IconTypeDisplay";
import InputField from "../../components/Inputs/InputField";

const AddTrace = () => {
    <View style={styles.AddTracePage}>
        <Image
            style={styles.logoIcon}
            resizeMode="cover"
            source={require("../../assets/LogInPage/logo.png")}
        />
        <View styles={styles.IconTypeContainer}>
            <IconTypeDisplay src={require("../../assets/TraceTypes/cameraIcon.png")} />
            <IconTypeDisplay src={require("../../assets/TraceTypes/videoIcon.png")} />
            <IconTypeDisplay src={require("../../assets/TraceTypes/musicIcon.png")} />
        </View>
        <View style={styles.textInputFields}>

        </View>
    </View>
};

const styles = StyleSheet.create({});

export default AddTrace;