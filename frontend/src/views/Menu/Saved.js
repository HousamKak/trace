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

export default Saved;