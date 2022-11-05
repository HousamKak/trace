import * as React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StyleSheet, View, Text, Image } from "react-native";
import DateBtn from "../../components/DateBtn";
import SignBtn from "../../components/SignBtn";

const DobPage = () => {

    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false);
    return (
        <View style={styles.dobPageView}>
            <Image
                style={styles.logoIcon}
                resizeMode="cover"
                source={require("../../assets/LogInPage/logo.png")}
            />
            <View style={styles.rectangleView}>
                <Text style={styles.birthText}>Please enter your date of birth.</Text>
                <View style={styles.dateSelectionView}>
                    <DateBtn></DateBtn>
                    <DateBtn></DateBtn>
                    <DateBtn></DateBtn>
                </View>
                <View style={styles.centeringbtn}>
                    <SignBtn></SignBtn>
                </View>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    rectangleView: {
        marginTop: "12%",
        alignSelf: "center",
        borderRadius: 20,
        backgroundColor: "#302b4f",
        width: 358,
        height: 259,
        justifyContent: "space-between",
        paddingVertical: 30,
    },
});

export default DobPage;