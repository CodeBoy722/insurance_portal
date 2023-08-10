import { Button, Icon, Input, Text } from "@rneui/themed";
import { useState } from "react";
import {
  NativeSyntheticEvent,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  TextInputChangeEventData,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//import { Icon } from "react-native-vector-icons/Icon";
const ForgottenPassword = () => {
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

  const [enteredmail, setEnteredmail] = useState<string>("");
  const emailChange = (
    data: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setEnteredmail(data.currentTarget.toString());
  };

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
        <Icon
          name="chevron-back"
          type="ionicon"
          size={20}
          containerStyle={{ alignItems: "flex-start", width: "100%" }}
          onPress={NavigateBack}
        />

        <View style={styles.forgottenForm}>
          <Text
            style={{
              fontFamily: "System",
              width: "100%",
              fontSize: 24,
              fontWeight: "600",
              color: "#4E52A6",
              textAlign: "center",
              alignSelf: "center"
            }}
          >
            Forgot password?
          </Text>

          <Text
            style={{
              fontFamily: "System",
              fontSize: 14,
              width: "100%",
              fontWeight: "400",
              color: "#4A4A4A",
              textAlign: "center",
              marginTop: 30,
            }}
          >
            Enter your email address and a reset password link will be send to
            your email.
          </Text>

          <Input
            label="Email address"
            leftIcon={
              <Icon name="mail" size={20} color="#637083" type="ionicon" />
            }
            placeholder="Enter your email address"
            containerStyle={{ marginTop: 30, width: "100%" }}
            inputContainerStyle={styles.input}
            inputStyle={styles.inputText}
            labelStyle={{
              color: "#344051",
              fontSize: 16,
              fontWeight: "400",
              fontFamily: "System",
            }}
            leftIconContainerStyle={{ marginLeft: 16 }}
            onChange={emailChange}
          />

          <Button
            containerStyle={styles.signupButton}
            color="#BF2C62"
            title="Submit"
            titleStyle={{
              fontFamily: "System",
              fontSize: 16,
              fontWeight: "500",
              color: "white",
            }}
          />

          <View style={styles.successView}>
            <Icon
              name="checkmark-circle"
              type="ionicon"
              size={20}
              color="#309161"
              containerStyle={{
                alignItems: "flex-start",
                width: "6%",
                marginLeft: "2%",
                marginRight: "2%",
              }}
            />

            <View style={styles.successMessage}>
              <Text
                style={{
                  fontFamily: "System",
                  width: "100%",
                  fontSize: 16,
                  fontWeight: "600",
                  color: "#141C24",
                  textAlign: "left",
                }}
              >
                Reset link sent
              </Text>

              <Text
                style={{
                  fontFamily: "System",
                  width: "100%",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#344051",
                  textAlign: "left",
                  flexWrap: "wrap"
                }}
              >
                Check your email for the reset password link
              </Text>

            </View>

          </View>
        </View>
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
    justifyContent: "flex-start",
  },

  forgottenForm: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },

  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#CED2DA",
    borderRadius: 10,
  },

  inputText: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "System",
    color: "#637083",
  },

  signupButton: {
    marginTop: 20,
    width: "100%",
    height: 40,
    borderRadius: 10,
  },

  successView: {
    width: "100%",
    height: 88,
    backgroundColor: "#D9F2E5",
    marginTop: 35,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },

  successMessage: {
    width: "90%",
    alignItems: "center",
    alignContent: "center",
  },
});

export default ForgottenPassword;
