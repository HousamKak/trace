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


const Profile = () => {
    const navigation = useNavigation();
    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);
    
    return (
        <View style={styles.screenView}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <Image style={styles.profileImage} source={require("../../assets/MenuPage/ellipse-3.png")} />
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
                    {/* {medals} */}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MainPage")}></MenuBtn>
            </View>
        </View>
    )
}

