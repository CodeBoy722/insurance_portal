import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { StatusBarStyle } from "react-native";
import { useState } from "react";
import { Icon, Image } from "@rneui/themed";

const SplashScreen = () => {
  const STYLES = ["default", "dark-content", "light-content"] as const;
  const TRANSITIONS = ["fade", "slide", "none"] as const;

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0]
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    "fade" | "slide" | "none"
  >(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />

      <View style={styles.LogoContainer}>
        <Image
          style={styles.SplashLogo}
          source={require("../../assets/images/splash_logo.png")}
          containerStyle={styles.SplashLogo}
          PlaceholderContent={<ActivityIndicator />}
        />
      </View>

      <View style={styles.Bottombranding}>
        <Text style={styles.bottom_1}>Powered by</Text>
        <Text style={styles.bottom_2}>CHIPS ANALITICS Inc. NY</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  LogoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  SplashLogo: {
    width: 188,
    height: 93.95,
  },

  Bottombranding: {
    alignItems:"center",
    height: 70,
  },

  bottom_1: {
    fontSize: 12,
    color: "#102A5180",
    fontFamily: 'System',
  },

  bottom_2: {
    fontSize: 14,
    color: "#102A51",
    fontFamily: 'System',
  },
});

export default SplashScreen;
