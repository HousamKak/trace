import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SignBtn from "../../components/ButtonsLogging/SignBtn";
import BtnAndLogo from "../../components/ButtonsLogging/BtnAndLogo";
import { useNavigation } from "@react-navigation/native";

const LogInPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.logInPageView}>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../../assets/LogInPage/logo.png")}
      />
      <View style={styles.signInContView}>
        <SignBtn onPress={() => { navigation.navigate("SignIn") }} text="SIGN IN" cwidth={styles.sign} />
        <BtnAndLogo
          logo={require("../../assets/LogInPage/fb_logo.png")}
          bstyle={styles.FbCont}
          text="Log in using Facebook"
        />
        <BtnAndLogo
          logo={require("../../assets/LogInPage/google_logo.png")}
          bstyle={styles.GoogleCont}
          text="Log in using Google"
        />
      </View>

      <View style={styles.signUpContView}>
        <Text style={styles.signUpText}>Don’t have an account?</Text>
        <SignBtn onPress={() => { navigation.navigate("DobPage") }} text="SIGN UP" cwidth={styles.sign} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  GoogleCont: { backgroundColor: "#e34337" },
  FbCont: { backgroundColor: "#3575f0" },
  sign: { width: 331 },
  signUpContView: {
    borderRadius: 20,
    backgroundColor: "#302b4f",
    width: 358,
    height: 132,
    marginTop: "5%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 17,
    paddingTop: 21,
  },
  signInContView: {
    marginTop: "12%",
    borderRadius: 20,
    backgroundColor: "#302b4f",
    width: 358,
    height: 253,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,
    paddingTop: 30,
  },

  signUpText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },

  logoIcon: {
    alignSelf: "center",
    marginTop: "16.3%",
  },

  logInPageView: {
    backgroundColor: "#1e193b",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LogInPage;
