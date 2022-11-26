import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl,
    Image,
    Modal
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import SectionBar from "../../components/Breakers/SectionBar";
import DataDisplay from "../../components/Displayers/DataDisplay";
const item = require("../../utilities/ordering.js")
const medalImages = require("../../utilities/Images/medalImages.js");
import { getData } from "../../utilities/axios/getData.js"
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignBtn from "../../components/ButtonsLogging/SignBtn";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";

const base_url = "http://192.168.1.102:8000"

const Profile = () => {
    const navigation = useNavigation();
    const [mymedals, setMyMedals] = React.useState([])
    const [refreshing, setRefreshing] = React.useState(false);
    const [userData, setUserData] = React.useState("")
    const [chestCount, setChestCount] = React.useState(0)
    const [profile, setProfile] = React.useState(null)
    const [profileSource, setProfileSource] = React.useState(null)
    const [isEmptyProfile, setIsEmptyProfile] = React.useState(true)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [errorMsg, setErrorMsg] = React.useState(null);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [usernameModalVisible, setUsernameModalVisible] = React.useState(false);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    const pickImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        } else {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
                base64: true
            });
            if (!result.cancelled) {
                setProfile(result.base64);
            }
        }
    }
    const forceStateUpdate = () => {
        const [forceState, setForceState] = React.useState(0);
        return () => setForceState(forceState + 1);
    }

    React.useEffect(() => {

        (async () => {
            const token = await AsyncStorage.getItem("token")
            const parsedToken = JSON.parse(token)
            if (parsedToken) {
                const configurationObject = {
                    method: "get",
                    headers: {
                        'Authorization': parsedToken,
                    },
                    url: base_url + "/user",
                }
                try {
                    const response = await axios(configurationObject)
                    if (response.status === 200) {
                        AsyncStorage.setItem("user", JSON.stringify(response.data[0]))
                        console.log(response.data[0])
                        setUserData(response.data[0])
                    }
                }
                catch (e) {
                    console.log(e.message)
                }
            }

            getData("/user/medals/", "medals")
            getData("/chests/user/", "userChests")
            const userChests = await AsyncStorage.getItem("userChests")
            const userChestsData = JSON.parse(userChests)
            setChestCount(Object.keys(userChestsData).length)
            const LoadedMedals = await item("medals", 6, medalImages);
            setMyMedals(LoadedMedals)
            if (userData.profile) {
                setIsEmptyProfile(false)
                const profiledata = userData.profile
                const profileImage = base_url + profiledata.slice(1)
                setProfileSource(profileImage)
                console.log(profileImage)
            }
            else {
                setProfileSource(require("../../assets/MenuPage/dummyProfile.png"))
            }
        })()

    }, [refreshing])

    const updateProfile = async () => {
        const configurationObject = {
            method: "PUT",
            url: base_url + "/user",
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            data: { user_id: userData.user_id, profile, email, password, username }
        }
        try {
            const response = await axios(configurationObject)
            if (response.status !== 200) {
                setErrorMsg("Something went wrong. Try again later.")
            }
        }
        catch (e) { console.log(e.message) }

    }

    return (
        <View style={styles.screenView}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <View style={styles.gear}>
                    <MenuBtn src={require("../../assets/MenuPage/MenuButtons/gear.png")} backgroundColor={{ backgroundColor: "#302b4f" }} onPress={() => { setModalVisible(!modalVisible) }}></MenuBtn>
                </View>
                {!isEmptyProfile ? <Image style={styles.profileImage} source={{ uri: profileSource }} /> : <Image style={styles.profileImage} source={profileSource} />}
                <Text style={styles.name}>{userData.username}</Text>
                <View style={styles.statusContShape}>
                    <Text style={styles.status}>ADVENTURER</Text>
                </View>

                <View style={styles.levelIndicatorSection}>
                    <View style={styles.levelAndMeter}>
                        <Text style={styles.level}>level {userData.level}</Text>
                        <View style={styles.levelBarCont}>
                            <View style={styles.yellow} />
                            <View style={styles.black} />
                        </View>
                    </View>
                    {/* <Text style={styles.XP}>number/total</Text> */}
                </View>
                <SectionBar text={"TOTAL ACTIVITY"} />
                <View style={styles.userDataCont}>
                    <View>
                        <View style={styles.distanceWalked}>
                            <Text style={styles.Text}>Distance Walked: </Text>
                            <Text style={styles.Text}></Text>
                        </View>
                        <View style={styles.xpCont}>
                            <Text style={styles.Text}>Total XP: </Text>
                            <Text style={styles.Text}>{userData.XP}</Text>
                        </View>
                    </View>
                    <DataDisplay cheat={styles.cheat} src={require("../../assets/MenuPage/MenuButtons/chestLock.png")} data={"Chests Found:"} info={chestCount} />
                    <DataDisplay src={require("../../assets/MenuPage/MenuButtons/Coin.png")} data={"Coins:"} info={userData.Coins} />
                    <DataDisplay src={require("../../assets/MenuPage/MenuButtons/Gem.png")} data={"Gems:"} info={userData.gems} />
                </View>
                <SectionBar text={"WEEKLY PROGRESS "} />
                <View style={styles.weeklyProgressCont}>
                    <Text style={styles.weeklyProgressText}>
                        You walked xx km this week!
                    </Text>
                </View>
                <SectionBar text={"MEDALS"} />
                <View style={{ marginBottom: 40 }}>
                    {mymedals}
                </View>
            </ScrollView >
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => { setModalVisible(!modalVisible); }}
                >
                    <View style={styles.modalstyle}>
                        <View style={styles.closeView}>
                            <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => { setModalVisible(!modalVisible) }}></MenuBtn>
                        </View>
                        <View style={styles.updateProfileBtn}>
                            <SignBtn text={"Update Profile Image"} onPress={() => {
                                (async () => {
                                    await pickImage()
                                    await updateProfile()
                                    setModalVisible(!modalVisible)
                                    onRefresh()
                                })();
                            }} />
                        </View>
                        <SignBtn text={"Update Username"} onPress={() => {
                            setModalVisible(!modalVisible)
                            setUsernameModalVisible(!usernameModalVisible)
                        }} />
                    </View>
                </Modal>
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={usernameModalVisible}
                    onRequestClose={() => { setUsernameModalVisible(!usernameModalVisible) }}
                >
                    <View style={styles.modalstyle}>
                        <View style={styles.closeView}>
                            <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => setUsernameModalVisible(!usernameModalVisible)}></MenuBtn>
                        </View>
                        <View style={styles.updateProfileBtn}>
                            <SignBtn text={"Confirm Change"} onPress={() => updateProfile()} />
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    updateProfileBtn: {
        marginBottom: 20
    },
    closeView: {
        alignSelf: "flex-end",
        marginBottom: 10,
    },
    modalstyle: {
        backgroundColor: "#fff",
        paddingHorizontal: "10%",
        backgroundColor: "#000000aa",
        height: "100%",
        justifyContent: "center",
    },
    gear: {
        alignSelf: "flex-end",
    },
    distanceWalked: {
        flexDirection: "row",
        width: "100%",
        width: "29%",
        alignSelf: "center",
        justifyContent: "space-between",
        marginBottom: 8,
        marginTop: 20,
    },
    Text: {
        color: "#fff",
        fontSize: 12,
    },
    xpCont: {
        flexDirection: "row",
        width: "29%",
        alignSelf: "center",
        justifyContent: "space-between",
        marginBottom: 30,

    },

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
        borderRadius: 100,
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