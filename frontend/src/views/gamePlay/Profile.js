import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl,
    Image
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import SectionBar from "../../components/Breakers/SectionBar";
import DataDisplay from "../../components/Displayers/DataDisplay";
const item = require("../../utilities/ordering.js")
const medalImages = require("../../utilities/Images/medalImages.js");
import { getData } from "../../utilities/axios/getData.js"

const Profile = () => {
    const navigation = useNavigation();
    const [mymedals, setMyMedals] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    React.useEffect(() => {
        (async () => {
            getData("/user/medals/", "medals")
            const LoadedMedals = await item("medals", 6, medalImages);
            setMyMedals(LoadedMedals)
        })()

    }, [refreshing])

    return (
        <View style={styles.screenView}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <Image style={styles.profileImage} source={require("../../assets/MenuPage/trialprofile.png")} />
                <Text style={styles.name}>Housam Kak</Text>
                <View style={styles.statusContShape}>
                    <Text style={styles.status}>ADVENTURER</Text>
                </View>

                <View style={styles.levelIndicatorSection}>
                    <View style={styles.levelAndMeter}>
                        <Text style={styles.level}>Level 60</Text>
                        <View style={styles.levelBarCont}>
                            <View style={styles.yellow} />
                            <View style={styles.black} />
                        </View>
                    </View>
                    <Text style={styles.XP}>number/total</Text>
                </View>
                <SectionBar text={"TOTAL ACTIVITY"} />
                <View style={styles.userDataCont}>
                    <View>
                        <Text>Distance Walked:</Text>
                        <Text></Text>
                    </View>
                    <View>
                        <Text>Total XP: </Text>
                        <Text></Text>
                    </View>
                    <DataDisplay cheat={styles.cheat} src={require("../../assets/MenuPage/MenuButtons/chestLock.png")} data={"Chests Found:"} info={"info"} />
                    <DataDisplay src={require("../../assets/MenuPage/MenuButtons/Coin.png")} data={"Coins:"} info={"info"} />
                    <DataDisplay src={require("../../assets/MenuPage/MenuButtons/Gem.png")} data={"Gems:"} info={"info"} />
                </View>
                <SectionBar text={"WEEKLY PROGRESS "} />
                <View style={styles.weeklyProgressCont}>
                    <Text style={styles.weeklyProgressText}>
                        You walked xx km this week!
                    </Text>
                </View>
                <SectionBar text={"MEDALS"} />
                <View>
                    <Text>Medals</Text>
                </View>
                <View>
                    {mymedals}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weeklyProgressText: {
        color: "#fff",
        fontSize: 15,
    },
    userDataCont: {
        marginBottom: 20,
    },
    weeklyProgressCont: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "20%",
    },
    cheat: {
        marginLeft: -5,
    },
    levelAndMeter: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
    XP: {
        display: "flex",
        alignSelf: "flex-end",
        color: "#fff",
        fontSize: 15,
    },
    yellow: {
        position: "absolute",
        width: "20%",
        backgroundColor: "#D6B545",
        height: 8,
        borderRadius: 11,
        zIndex: 2,
        elevation: 2,
    },
    black: {
        position: "absolute",
        backgroundColor: "#000000",
        width: "80%",
        height: 8,
        borderRadius: 11,
        zIndex: 1,
        elevation: 1,
    },
    levelBarCont: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
    },
    levelIndicatorSection: {
        width: "100%",
        marginTop: 16,
        paddingLeft: 5,
        paddingRight: 20,
        marginBottom: 20,
    },
    level: {
        fontSize: 15,
        color: "#fff",
    },
    status: {
        textAlign: "center",
        color: "#fff",
        fontSize: 10,
        fontWeight: "bold",
    },
    name: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 15,
    },
    profileImage: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginTop: 35,
    },
    statusContShape: {
        backgroundColor: "#e86e6e",
        width: "10%",
        fontSize: 10,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 12,
        height: 24,
        width: 80,
        justifyContent: "center",
    },
    footer: {
        alignItems: "center",
        width: "100%",
        paddingVertical: "10%",
    },
    closeColor: {
        backgroundColor: "#fb7785",
    },
    ScrollView: {
        backgroundColor: "#302b4f",
        borderRadius: 15,
        overflow: "hidden",
    },
    screenView: {
        flex: 1,
        backgroundColor: "#1e193b",
        paddingHorizontal: "5%",
        paddingTop: "15%",

    }
});

export default Profile;