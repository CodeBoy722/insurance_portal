import { Button, Icon, Text } from "@rneui/themed";
import { useState } from "react";
import { StatusBar, StatusBarStyle, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OTPInputView from "@twotalltotems/react-native-otp-input";

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

  const NavigateBack = () => {};
  const [otpCode, setOtpCode] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        //backgroundColor="#FFFFFF"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        //hidden={hidden}
      />

      <View style={styles.MainView}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
          }}
        >
          <Icon
            name="chevron-back"
            type="ionicon"
            size={20}
            containerStyle={{ alignItems: "flex-start" }}
            onPress={NavigateBack}
          />

          <Text
            style={{
              fontFamily: "System",
              width: "100%",
              fontSize: 18,
              fontWeight: "700",
              color: "#010101",
              textAlign: "left",
            }}
          >
            Verification
          </Text>
        </View>

        <View style={styles.forgottenForm}>
          <Text
            style={{
              fontFamily: "System",
              width: "100%",
              fontSize: 24,
              fontWeight: "600",
              color: "#4E52A6",
              textAlign: "center",
            }}
          >
            Verification Code
          </Text>

          <Text
            style={{
              fontFamily: "System",
              width: "100%",
              fontSize: 14,
              fontWeight: "400",
              color: "#000",
              textAlign: "center",
              marginTop: 16,
            }}
          >
            Enter the code you received by text on the number
          </Text>

          <Text
            style={{
              fontFamily: "System",
              width: "100%",
              fontSize: 14,
              fontWeight: "700",
              color: "#102A51",
              textAlign: "center",
            }}
          >
            690 00 00 00
          </Text>

          <OTPInputView
            pinCount={5}
            style={{ width: "90%", height: 100, marginTop: 24 }}
            onCodeChanged={(code) => setOtpCode(code)}
            autoFocusOnLoad
            codeInputFieldStyle={{
              borderRadius: 10,
              borderColor: "#4A545E",
              color: "#000",
              fontSize: 14,
            }}
            codeInputHighlightStyle={{
              color: "#000"
            }}
            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontFamily: "System",
                fontSize: 14,
                fontWeight: "400",
                color: "#8392A1",
                textAlign: "left",
                marginRight: 16
              }}
            >
              Time left to enter the code
            </Text>

            <Text
              style={{
                fontFamily: "System",
                fontSize: 14,
                fontWeight: "500",
                color: "#BF2C62",
                textAlign: "right",
              }}
            >
              02:35
            </Text>
          </View>

          <Text
              style={{
                fontFamily: "System",
                fontSize: 14,
                fontWeight: "600",
                color: "#BF2C62",
                textAlign: "right",
                marginTop: 32
              }}
            >
              Resend the code
            </Text>

        </View>

        <Button
            containerStyle={styles.signupButton}
            color="#BF2C62"
            title="Confirm"
            titleStyle={{
              fontFamily: "System",
              fontSize: 16,
              fontWeight: "500",
              color: "white",
            }}
          />

      </View>
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
    justifyContent: 'space-between'
  },

  forgottenForm: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },

  signupButton: {
    marginTop: 20,
    width: "100%",
    height: 40,
    borderRadius: 10,
    marginBottom: 32
  },
});

export default OptVerification;
