import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FullCard from "../../components/Cards/FullCard";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Saved = () => {
    const navigation = useNavigation();
    const [saves, setSaves] = React.useState([]);

    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    const save = async () => {
        const saved = await AsyncStorage.getItem("saves")
        const savesList = JSON.parse(saved)

        if (savesList) {
            const savedItems = savesList.map((save) => <FullCard key={save.trace_id} text={save.title} profile={getIcon(save.file_type)} icon={getIcon(save.file_type)} noType={0} />)
            setSaves(savedItems)
        }
        else {
            const savedItems = <Text style={styles.noContent}>No Saved Traces</Text>
            setSaves(savedItems)
        }

    }

    React.useEffect(() => {
        save()
    }, [refreshing])

    const getIcon = (type) => {
        if (type == 1) {
            return require("../../assets/MenuPage/TraceTypes/cameraIcon.png")
        } else if (type == 2) {
            return require("../../assets/MenuPage/TraceTypes/videoIcon.png")
        } else if (type == 3) {
            return require("../../assets/MenuPage/TraceTypes/musicIcon.png")
        }
    }

    return (
        <View style={styles.screenView}>
            <Text style={styles.text}>SAVED</Text>
            <ScrollView style={styles.scrollView} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <View style={styles.cards}>
                    {saves}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <MenuBtn src={require("../../assets/MenuPage/MenuButtons/closeIcon.png")} backgroundColor={styles.closeColor} onPress={() => navigation.navigate("MiddleButton")}></MenuBtn>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    noContent: {
        fontSize: 20,
        alignSelf: "center",
        marginTop: 20,
        color: "#fff"
    },
    text: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "bold",
        marginTop: "20%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginBottom: "8%",
    },
    cards: {
        alignItems: "center",
    },
    footer: {
        alignItems: "center",
        width: "100%",
        paddingVertical: "10%",
    },
    closeColor: {
        backgroundColor: "#fb7785",
    },
    scrollView: {
        backgroundColor: "#302b4f",
    },
    screenView: {
        flex: 1,
        backgroundColor: "#1e193b",
    }
});

export default Saved;