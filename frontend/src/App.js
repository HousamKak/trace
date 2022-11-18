import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
const base_url = "http://192.168.1.102:8000"
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios";

import LogInPage from "./views/Logging/LogInPage";
import DobPage from "./views/Logging/DobPage";
import SignIn from "./views/Logging/SignIn";
import SignUp from "./views/Logging/SignUp";
import MiddleButton from "./views/Menu/MiddleButton";
import Saved from "./views/Menu/Saved";
import Friends from "./views/Menu/Friends";
import Scripts from "./views/Menu/Scripts";
import Items from "./views/Menu/Items";
import MyTraces from "./views/Menu/MyTraces";
import MainPage from "./views/gameplay/MainPage";
import Profile from "./views/gameplay/Profile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [isLogged, setIsLogged] = React.useState(false);
  const SplashScreen = () => <View />;

  React.useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem("token")
      const parsedToken = JSON.parse(token)
      if (parsedToken) {
        const configurationObject = {
          method: "get",
          headers: {
            'Authorization': parsedToken,
          },
          body: {},
          url: base_url + "/user",

        }
        try {
          const response = await axios(configurationObject)
          if (response.status === 200) {
            AsyncStorage.setItem("user", JSON.stringify(response.data[0]))
            setIsLogged(true)
          }
        }
        catch (e) {
          console.log(e.message)
        }
      } else {
        setIsLogged(false)
      }

    })()
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLogged ?
              (
                <>
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="LogInPage"
                    component={LogInPage}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="DobPage"
                    component={DobPage}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                  />
                </>)}
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;