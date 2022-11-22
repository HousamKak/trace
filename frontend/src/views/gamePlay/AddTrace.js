import * as React from "react";
import {
    Image,
    StyleSheet,
    View,
    ScrollView,
    TextInput,
    Platform
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import IconTypeDisplay from "../../components/Displayers/IconTypeDisplay";
import SignBtn from "../../components/ButtonsLogging/SignBtn";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
const base_url = "http://192.168.1.102:8000"

const AddTrace = () => {
    const navigation = useNavigation();
    const [image, setImage] = React.useState(null);
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [filetype, setFiletype] = React.useState(0);
    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);

    const pickImage = async () => {
        // let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        // if (permissionResult.granted === false) {
        //     alert("Permission to access camera roll is required!");
        //     return;
        // } else {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
        console.log(image);
        // }
    }

    const doNothing = () => { }

    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();

    }, []);


    const handleClick = async () => {
        const user_prime = await AsyncStorage.getItem("user")
        const user = JSON.parse(user_prime)
        let base64_image = ""
        if (image) {
            setFiletype(1)
            base64_image = await FileSystem.readAsStringAsync(image, { encoding: 'base64' })
        }
        if (location) {
            let x_position = location.coords.latitude
            let y_position = location.coords.longitude
            if (!image && !title && !body) { setErrorMsg("The post is empty.") } else {
                const configurationObject = {
                    method: "POST",
                    url: base_url + "/traces",
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    },
                    data: { user_id: user.user_id, filetype, title, desription: body, file: base64_image, x_position, y_position }
                }
                try {
                    const response = await axios(configurationObject)
                    if (response.status === 200) {
                        navigation.navigate("MainPage")
                    } else {
                        setErrorMsg("Something went wrong. Try again later.")
                    }
                } catch (e) { console.log(e.message) }

            }
        }
    }

    return (
        <View style={styles.AddTracePage}>
            <ScrollView >
                <Image
                    style={styles.logoIcon}
                    resizeMode="cover"
                    source={require("../../assets/MenuPage/AddTrace/BigHand.png")}
                />
                <View style={styles.IconTypeContainer}>
                    <IconTypeDisplay src={require("../../assets/MenuPage/TraceTypes/cameraIcon.png")} onPress={pickImage} />
                    <IconTypeDisplay src={require("../../assets/MenuPage/TraceTypes/videoIcon.png")} onPress={doNothing} />
                    <IconTypeDisplay src={require("../../assets/MenuPage/TraceTypes/musicIcon.png")} onPress={doNothing} />
                </View>
                <View style={styles.textInputFields}>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.field}
                            placeholder={"Add Title"}
                            mode="flat"
                            placeholderTextColor="#818181"
                            onChangeText={(e) => setTitle(e)}
                        />
                        <TextInput
                            placeholder="Write Something" mode="flat"
                            placeholderTextColor="#818181"
                            style={styles.multiline}
                            multiline={true}
                            maxLength={280}
                            onChangeText={(e) => setBody(e)} />
                    </View>
                    <SignBtn onPress={handleClick} text="DROP ON MAP" cwidth={styles.sign} />
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </View>)
};

const styles = StyleSheet.create({
    field: {
        height: 55,
        width: "100%",
        borderRadius: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 8,
        marginBottom: 22,
    },
    logoIcon: {
        alignSelf: "center",
        marginTop: "12%",
        marginBottom: "12%",
    },
    footer: {
        alignItems: "center",
        width: "100%",
        paddingVertical: "10%",
    },
    closeColor: {
        backgroundColor: "#fb7785",
    },
    multiline: {
        height: 110,
        width: "100%",
        borderRadius: 12,
        backgroundColor: "#fff",
        paddingHorizontal: 8,
        textAlignVertical: "top",
        paddingVertical: 10,
        marginBottom: 22,
    },
    AddTracePage: {
        backgroundColor: "#1e193b",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
        paddingHorizontal: "5%",
    },
    IconTypeContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "5%",
    },
    textInputFields: {
        backgroundColor: "#302b4f",
        borderRadius: 20,
        padding: "5%",
    },
    textInputContainer: {
        alignItems: "center",
    }

});

export default AddTrace;