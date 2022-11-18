import * as React from "react";
import {
    Text,
    StyleSheet,
    View,
    ScrollView, RefreshControl
} from "react-native";
import { useNavigation, } from "@react-navigation/native";
import FullCard from "../../components/Cards/FullCard";
import MenuBtn from "../../components/ButtonsMenu/MenuBtn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Scripts = () => {
    const navigation = useNavigation();
    const [myscripts, setMyScripts] = React.useState([]);

    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    const script = async () => {
        const scripts = await AsyncStorage.getItem("scripts")
        const scriptsList = JSON.parse(scripts)
        if (scriptsList) {
            const scriptItems = scriptsList.map((script) => <FullCard key={script.script_id} text={script.title} profile={require("../../assets/MenuPage/MenuButtons/scriptsIcon.png")} icon={""} noType={0} textOnly={0} nodelete={1} />)
            setMyScripts(scriptItems)
        }
        else {
            const scriptItems = <Text style={styles.noContent}>No Scripts</Text>
            setMyScripts(scriptItems)
        }
    }


    React.useEffect(() => {
        script()
    }, [refreshing])

    return (
        <View style={styles.screenView}>
            <Text style={styles.text}>SCRIPTS</Text>
            <ScrollView style={styles.scrollView} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <View style={styles.cards}>
                    {myscripts}
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
        backgroundColor: "#1e193b",
    },
    screenView: {
        flex: 1,
        backgroundColor: "#1e193b",
    }
});

export default Scripts;
