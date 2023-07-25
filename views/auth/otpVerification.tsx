import { useState } from "react";
import { StatusBar, StatusBarStyle, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OptVerification = () => {
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
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />

      <View></View>
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
  
    SplashLogo: {},
  });

  export default OptVerification;



























