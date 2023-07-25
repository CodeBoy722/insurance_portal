import { Button, Icon, Image, Text } from "@rneui/themed";
import { useState } from "react";
import {
  ActivityIndicator,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MailLogin = () => {
  const STYLES = ["default", "dark-content", "light-content"] as const;
  const TRANSITIONS = ["fade", "slide", "none"] as const;

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0]
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    "fade" | "slide" | "none"
  >(TRANSITIONS[0]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />

      <View style={styles.MainView}>
        <Image
          style={styles.SplashLogo}
          source={require("../../assets/images/title_logo.png")}
          containerStyle={styles.SplashLogo}
          PlaceholderContent={<ActivityIndicator />}
        />

        <Text style={styles.signup_title}>Sign into your account</Text>

        <View style={styles.authButtons}>
          <Button color="#4E52A6" type="solid" style={styles.authButton_1}>
          <Icon name="email" color="white"/>
          <Text style={styles.bottom_1_text}>Email</Text>
          </Button>

          <Button color="white" type="solid" style={styles.authButton_2}>
          <Icon name="phone" color="#344051" />
          <Text style={styles.bottom_2_text}>Mobile</Text>
          </Button>
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  MainView: {
    height: "75%",
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  SplashLogo: {
    width: 104,
    height: 51.97,
  },

  signup_title: {
    fontSize: 24,
    color: "#4E52A6",
    fontWeight: "600",
    fontFamily: "System",
    width: 244,
    marginTop: 30,
  },

  authButtons: {
    width: 212,
    height: 40,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    borderColor: "#CED2DA",
    borderWidth: 1,
    borderRadius: 10
  },

  bottom_1_text: {
    color: "white",
    fontFamily: "System",
    fontSize: 14,
    fontWeight: "600",
  },

  bottom_2_text: {
    fontFamily: "System",
    fontSize: 14,
    fontWeight: "600",
    color: "#344051",
  },

  authButton_1: {
    width: 102,
    color: "#4E52A6",
    padding: 0,
    margin: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },

  authButton_2: {
    width: 102,
    color: "#FFFFFF",
    padding: 0,
    margin: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  }


});

export default MailLogin;
