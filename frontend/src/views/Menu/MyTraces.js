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
}