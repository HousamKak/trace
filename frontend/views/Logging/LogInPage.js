import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SignBtn from "../../components/SignBtn";
import BtnAndLogo from "../../components/BtnAndLogo";

const LogInPage = () => {
  return (
    <View style={styles.logInPageView}>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../../assets/LogInPage/logo.png")}
      ></Image>
      <View style={styles.signInContView}>
        <SignBtn navigation="SignIn" text="SIGN IN" cwidth={styles.sign} />
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
        <SignBtn navigation="DobPage" text="SIGN UP" cwidth={styles.sign} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
  signUpText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
  },
  logInPageView: {
    backgroundColor: "#1e193b",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
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
  logoIcon: {
    alignSelf: "center",
    marginTop: "16.3%",
  },
});
export default LogInPage;
