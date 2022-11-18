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
}