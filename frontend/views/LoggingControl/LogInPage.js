import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const LogInPage = () => {
  return (
    <View style={styles.logInPageView}>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../../assets/LogInPage/logo.png")}
      ></Image>
      <View style={styles.signInContView}></View>
      <View style={styles.signUpContView}></View>
    </View>
  );
};
