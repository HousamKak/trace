import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
import LogInPage from "./views/Logging/LogInPage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;
  return <></>;
};
