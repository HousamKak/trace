import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl, Image
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
const base_url = "http://192.168.1.102:8000"

const ImageTrace = () => {
    const navigation = useNavigation();

    React.useEffect(() => {

        (async () => {
            const type0 = await AsyncStorage.getItem("Type")
            const type = JSON.parse(type0)
            const trace_id0 = await AsyncStorage.getItem("displayTrace")
            const trace_id = JSON.parse(trace_id0)
            if (type === "self") {
                const user = await AsyncStorage.getItem("user")
                const configurationObject = {
                    method: "get",
                    headers: {
                        'Authorization': parsedToken,
                    },
                    url: base_url + "/traces/" + trace_id,
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
            } else {

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


    return (
        <View style={styles.ImageTracePage}>
            <ScrollView >
                <View style={styles.header}>
                    <View style={styles.upperheader}>
                        <View style={styles.rightheader}>
                            <Image source={require("../../assets/MenuPage/dummyProfile.png")} style={styles.profilePicture}></Image>
                            <Text style={styles.name}> Random Text</Text>
                        </View>
                        <View style={styles.leftheader}>
                            <Image source={require("../../assets/MenuPage/Friends/addFriendIcon.png")}></Image>
                            <Image source={require("../../assets/MenuPage/Friends/saveFriendIcon.png")}></Image>
                        </View>
                    </View>
                    <View style={styles.lowerheader}>
                        <Text style={styles.title}>Check my Cat</Text>
                        <Text style={styles.description}>This is some random text and the likes are
                            whatever you think they are.</Text>
                    </View>
                </View>
                <View style={styles.ImageTrace}>
                    <Image source={require("../../assets/MenuPage/StrongCat.jpg")} style={styles.Image}></Image>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    Image: {
        resizeMethod: "scale",
        resizeMode: "stretch",
        width: "100%",
        borderRadius: 20,
    },
    ImageTrace: {
        backgroundColor: "#302b4f",
        borderRadius: 20,
        alignItems: "center",
        padding: 20,
    },
    lowerheader: {
        paddingHorizontal: 6,
    },
    profilePicture: {
        height: 50,
        width: 50,
    },
    rightheader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: 145,
    },
    leftheader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 85,
    },
    upperheader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
        marginBottom: 13,
    },
    header: {
        backgroundColor: "#302b4f",
        width: "100%",
        marginTop: "15%",
        paddingRight: "3%",
        paddingLeft: "5%",
        borderRadius: 20,
        marginBottom: 20,
    },
    title: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        color: "#ffffff",
        fontSize: 14,
        marginBottom: 30,
    },
    name: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 14,
    },
    ImageTracePage: {
        backgroundColor: "#1e193b",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        paddingHorizontal: 20,
    },
    footer: {
        alignItems: "center",
        width: "100%",
        paddingVertical: "10%",
    },
    closeColor: {
        backgroundColor: "#fb7785",
    },


});

export default ImageTrace;
