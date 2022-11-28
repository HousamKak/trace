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
import axios from "axios";
const base_url = "http://192.168.1.102:8000"

const ImageTrace = () => {
    const [trace, setTrace] = React.useState({})
    const [traceImage, setTraceImage] = React.useState({})
    const [profile, setProfile] = React.useState("")
    const navigation = useNavigation();

    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    let user;
    React.useEffect(() => {

        (async () => {
            const type0 = await AsyncStorage.getItem("Type")
            const type = JSON.parse(type0)
            const trace_id0 = await AsyncStorage.getItem("displayTrace")
            const trace_id = JSON.parse(trace_id0)
            if (type === "self") {
                const user_prime = await AsyncStorage.getItem("user")
                user = JSON.parse(user_prime)
                const configurationObject = {
                    method: "get",
                    url: base_url + "/traces/" + trace_id,
                }
                try {
                    const response = await axios(configurationObject)
                    if (response.status === 200) {
                        setTrace(response.data[0])
                        setTraceImage(base_url + response.data[0].file.slice(1))
                    }
                }
                catch (e) {
                    console.log(e.message)
                }
                if (user.profile) {
                    const profiledata = user.profile
                    const profileImage = base_url + profiledata.slice(1)
                    setProfile(profileImage)
                }
                else {
                    setProfile(require("../../assets/MenuPage/dummyProfile.png"))
                }
            } else {

            }

        })()

    }, [refreshing])


    return (
        <View style={styles.ImageTracePage}>
            <ScrollView refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <View style={styles.header}>
                    <View style={styles.upperheader}>
                        <View style={styles.rightheader}>
                            <Image source={{ uri: profile }} style={styles.profilePicture}></Image>
                            {user ? <Text style={styles.name}> {user.username}</Text> : ""}
                        </View>
                        <View style={styles.leftheader}>
                            <Image source={require("../../assets/MenuPage/Friends/addFriendIcon.png")}></Image>
                            <Image source={require("../../assets/MenuPage/Friends/saveFriendIcon.png")}></Image>
                        </View>
                    </View>
                    <View style={styles.lowerheader}>
                        <Text style={styles.title}>{trace.title}</Text>
                        <Text style={styles.description}>{trace.description}</Text>
                    </View>
                </View>
                <View style={styles.ImageTrace}>
                    <Image source={{ uri: traceImage }} style={styles.Image}></Image>
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
        borderRadius: 50,
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
