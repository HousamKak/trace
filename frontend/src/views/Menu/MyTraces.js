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

const MyTraces = () => {
    const navigation = useNavigation();
    const [myTrace, setMyTrace] = React.useState([]);

    const [refreshing, setRefreshing] = React.useState(false);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);

    const trace = async () => {
        const traces = await AsyncStorage.getItem("mytraces")
        const tracesList = JSON.parse(traces)
        if (tracesList) {
            const traceItems = tracesList.map((trace) => <FullCard key={trace.trace_id} text={trace.title} profile={getIcon(trace.file_type)} icon={getIcon(trace.file_type)} noType={0} textOnly={1} />)
            setMyTrace(traceItems)
        }
        else {
            const traceItems = <Text style={styles.noContent}>No Traces</Text>
            setMyTrace(traceItems)
        }
    }

    React.useEffect(() => {
        trace()
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
            <Text style={styles.text}>MY TRACES</Text>
            <ScrollView style={styles.scrollView} refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }>
                <View style={styles.cards}>
                    {myTrace}
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
    screenView: {
        flex: 1,
        backgroundColor: "#1e193b",
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

export default MyTraces;