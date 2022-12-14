import * as React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, View, Text, Image } from "react-native";
import DateBtn from "../../components/ButtonsLogging/DateBtn";
import SignBtn from "../../components/ButtonsLogging/SignBtn";
import { useNavigation } from "@react-navigation/native";

const DobPage = () => {
    const navigation = useNavigation();
    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false);

    const handleClick = () => {
        AsyncStorage.setItem('dob', JSON.stringify(date))
        navigation.navigate("SignUp")
    }

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
                    <DateBtn datetype="month" date={date} onPress={() => setShow(true)} />
                    <DateBtn datetype="day" date={date} onPress={() => setShow(true)} />
                    <DateBtn datetype="year" date={date} onPress={() => setShow(true)} />
                    {show == true ? (
                        <DateTimePicker
                            mode={"date"}
                            value={date}
                            onChange={(e) => {
                                if (e.type == "set") {
                                    setDate(new Date(e.nativeEvent.timestamp));
                                }
                                setShow(false);
                            }}
                        ></DateTimePicker>
                    ) : (
                        ""
                    )}
                </View>

                <View style={styles.centeringbtn}>
                    <SignBtn
                        cwidth={styles.submitBtn}
                        text="SUBMIT"
                        onPress={handleClick}
                    ></SignBtn>
                </View>
            </View>
        </View>
    );
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
    dateSelectionView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 35,
        marginBottom: 20,
    },
    birthText: {
        fontSize: 18,
        fontWeight: "700",
        color: "rgba(255, 255, 255, 0.8)",
        textAlign: "center",
    },

    centeringbtn: {
        alignSelf: "center",
    },
    logoIcon: {
        alignSelf: "center",
        marginTop: "16.3%",
    },
    submitBtn: {
        width: 297,
    },

    dobPageView: {
        backgroundColor: "#1e193b",
        flex: 1,
        width: "100%",
        height: 800,
    },
});

export default DobPage;
