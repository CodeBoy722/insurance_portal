import { Button, Icon, Text } from "@rneui/themed";
import { useState } from "react";
import { StatusBar, StatusBarStyle, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MainHome = () => {
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
        //backgroundColor="#FFFFFF"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        //hidden={hidden}
      />


      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 16,
  },

  MainView: {
    height: "100%",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default MainHome;
