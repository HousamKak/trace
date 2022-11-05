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

            <Image />
            <View style={styles.rectangleView}>
                <Text></Text>
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

export default DobPage;