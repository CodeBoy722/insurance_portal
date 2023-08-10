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

const ResetPassword = () => {
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

  const [enteredpass, setEnteredPass] = useState<string>("");
  const passwordChange = (
    data: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setEnteredPass(data.currentTarget.toString());
  };

  const [passReset, setPassReset] = useState<boolean>(true);
  const updatePassreset = (reset: boolean) => {
    setPassReset(reset);
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

      {passReset ? (
        <View style={styles.MainView}>
          <View style={styles.successForm}>
            <View
              style={{
                width: 56,
                height: 56,
                backgroundColor: "#ECF9F2",
                borderRadius: 50,
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 46,
                  height: 46,
                  backgroundColor: "#D9F2E5",
                  borderRadius: 50,
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="checkmark-circle-outline"
                  type="ionicon"
                  size={32}
                  color="#309161"
                  containerStyle={{ alignItems: "center", width: "100%" }}
                  onPress={NavigateBack}
                />
              </View>
            </View>

            <Text
              style={{
                fontFamily: "System",
                width: "100%",
                fontSize: 24,
                fontWeight: "600",
                color: "#BF2C62",
                textAlign: "center",
                marginTop: 20
              }}
            >
              Password reset successful!
            </Text>

            <Text
              style={{
                fontFamily: "System",
                fontSize: 14,
                width: "100%",
                fontWeight: "400",
                color: "#4A4A4A",
                textAlign: "center",
                marginTop: 25,
              }}
            >
              You can now use your new password to sign-in to your account
            </Text>

            <Button
              onPress={() => updatePassreset(false)}
              containerStyle={{
                marginTop: 60,
                width: "100%",
                height: 40,
                borderRadius: 10,
              }}
              color="#BF2C62"
              title="Go to Sign in page"
              titleStyle={{
                fontFamily: "System",
                fontSize: 16,
                fontWeight: "500",
                color: "white",
              }}
            />
          </View>
        </View>
      ) : (
        <View style={styles.MainView}>
          <Icon
            name="chevron-back"
            type="ionicon"
            size={20}
            containerStyle={{ alignItems: "flex-start", width: "100%" }}
            onPress={NavigateBack}
          />

          <View style={styles.resetPasswordform}>
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
              Create new password
            </Text>

            <Text
              style={{
                fontFamily: "System",
                fontSize: 14,
                width: "100%",
                fontWeight: "400",
                color: "#4A4A4A",
                textAlign: "center",
                marginTop: 25,
              }}
            >
              Type in your new password and confirm it.
            </Text>

            <Input
              label="New password"
              leftIcon={
                <Icon name="shield" size={20} color="#637083" type="ionicon" />
              }
              secureTextEntry={true}
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
              rightIcon={
                <Icon name="eye-off-outline" size={20} type="ionicon" />
              }
              rightIconContainerStyle={{ marginRight: 16 }}
              onChange={passwordChange}
            />

            <Input
              label="Confirm new password"
              leftIcon={
                <Icon name="shield" size={20} color="#637083" type="ionicon" />
              }
              secureTextEntry={true}
              containerStyle={{ width: "100%" }}
              inputContainerStyle={styles.input}
              inputStyle={styles.inputText}
              labelStyle={{
                color: "#344051",
                fontSize: 16,
                fontWeight: "400",
                fontFamily: "System",
              }}
              leftIconContainerStyle={{ marginLeft: 16 }}
              rightIcon={
                <Icon name="eye-off-outline" size={20} type="ionicon" />
              }
              rightIconContainerStyle={{ marginRight: 16 }}
              onChange={passwordChange}
            />

            <Button
              onPress={() => updatePassreset(true)}
              containerStyle={styles.signupButton}
              color="#BF2C62"
              title="Reset my password"
              titleStyle={{
                fontFamily: "System",
                fontSize: 16,
                fontWeight: "500",
                color: "white",
              }}
            />
          </View>
        </View>
      )}
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

  resetPasswordform: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },

  successForm: {
    width: "100%",
    height: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 50,
    width: "100%",
    height: 40,
    borderRadius: 10,
  },
});

export default ResetPassword;
