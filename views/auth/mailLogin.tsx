import { color } from "@rneui/base";
import { Button, ButtonGroup, Image, Input, Text } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";
import { useRef, useState } from "react";
import {
  ActivityIndicator,
  NativeSyntheticEvent,
  StatusBar,
  StatusBarStyle,
  StyleSheet,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PhoneInput from "react-native-phone-number-input";

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

  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const updateIndex = (index: number) => {
    setSelectedIndex(index);
  };

  const [enteredmail, setEnteredmail] = useState<string>("");
  const [enteredpass, setEnteredPass] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const phoneInput = useRef<PhoneInput>(null);
  const emailChange = (
    data: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setEnteredmail(data.currentTarget.toString());
  };

  const passwordChange = (
    data: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setEnteredPass(data.currentTarget.toString());
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
        <Image
          style={styles.SplashLogo}
          source={require("../../assets/images/title_logo.png")}
          containerStyle={styles.SplashLogo}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.signup_title}>Sign into your account</Text>
        <View style={styles.authButtons}>
          <TouchableOpacity
            style={[
              styles.authButton_1,
              selectedIndex === 1 ? { backgroundColor: "#4E52A6" } : null,
            ]}
            onPress={() => updateIndex(1)}
          >
            <Icon
              name="mail"
              size={23}
              color={selectedIndex === 1 ? "white" : "#344051"}
            />
            <Text
              style={[
                styles.button_1_text,
                selectedIndex === 1 ? { color: "white" } : { color: "#344051" },
              ]}
            >
              Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.authButton_2,
              selectedIndex === 2 ? { backgroundColor: "#4E52A6" } : null,
            ]}
            onPress={() => updateIndex(2)}
          >
            <Icon
              name="phone-portrait"
              size={23}
              color={selectedIndex === 2 ? "white" : "#344051"}
            />
            <Text
              style={[
                styles.button_2_text,
                selectedIndex === 2 ? { color: "white" } : { color: "#344051" },
              ]}
            >
              Mobile
            </Text>
          </TouchableOpacity>
        </View>

        {selectedIndex === 1 ? (
          <View style={styles.Form}>
            <Input
              label="Email address"
              leftIcon={<Icon name="mail" size={20} color="#637083" />}
              //errorMessage="Oops! that's not correct."
              placeholder="Enter your email address"
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

            <Input
              label="Password"
              leftIcon={<Icon name="shield" size={20} color="#637083" />}
              //errorMessage="Oops! that's not correct."
              placeholder="Enter password"
              secureTextEntry={true}
              inputContainerStyle={styles.input}
              inputStyle={styles.inputText}
              labelStyle={{
                color: "#344051",
                fontSize: 16,
                fontWeight: "400",
                fontFamily: "System",
              }}
              leftIconContainerStyle={{ marginLeft: 16 }}
              rightIcon={<Icon name="eye-off-outline" size={20} />}
              rightIconContainerStyle={{ marginRight: 16 }}
              onChange={passwordChange}
            />

            <Text
              style={{
                color: "#BF2C62",
                textAlign: "right",
                fontFamily: "System",
                fontSize: 14,
                fontWeight: "600",
                width: "98%",
              }}
            >
              Forget your password ?
            </Text>

            <Button
              containerStyle={styles.signupButton}
              color="#BF2C62"
              title="Se connecter"
              titleStyle={{
                fontFamily: "System",
                fontSize: 16,
                fontWeight: "500",
                color: "white",
              }}
            />
          </View>
        ) : (
          <View style={styles.Form}>

            <View style={styles.phoneInput}>
              <Text
                style={{
                  color: "#344051",
                  fontSize: 12,
                  fontWeight: "400",
                  fontFamily: "System",
                  marginLeft: 8,
                  marginTop: 1
                }}
              >
                Telephone
              </Text>

              <PhoneInput
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="CM"
                layout="first"
                onChangeText={(text) => {
                  setPhoneNumber(text);
                }}
                withShadow={false}
                autoFocus
                containerStyle = {{width: "100%", alignSelf: "flex-start"}}
                textContainerStyle = {{backgroundColor: "white"}}
              />
            </View>

            <Button
              containerStyle={styles.signupButton}
              color="#BF2C62"
              title="Se connecter"
              titleStyle={{
                fontFamily: "System",
                fontSize: 16,
                fontWeight: "500",
                color: "white",
              }}
            />
          </View>
        )}
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
  },

  MainView: {
    height: "80%",
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 16,
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
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: "#CED2DA",
    borderWidth: 1,
    borderRadius: 10,
  },

  button_1_text: {
    color: "white",
    fontFamily: "System",
    fontSize: 14,
    fontWeight: "600",
  },

  button_2_text: {
    fontFamily: "System",
    fontSize: 14,
    fontWeight: "600",
    color: "#344051",
  },

  authButton_1: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 0,
    margin: 0,
    borderColor: "#CED2DA",
    borderWidth: 1,
    borderEndWidth: 0,
    borderTopStartRadius: 10,
    borderBottomStartRadius: 10,
    borderTopEndRadius: 0,
    borderBottomEndRadius: 0,
  },

  authButton_2: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 0,
    margin: 0,
    borderColor: "#CED2DA",
    borderWidth: 1,
    borderStartWidth: 0,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    borderTopStartRadius: 0,
    borderBottomStartRadius: 0,
  },

  Form: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },

  input: {
    width: "100%",
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
    marginTop: 40,
    width: "100%",
    height: 40,
    borderRadius: 10,
  },

  phoneInput: {
    width: "100%",
    height: 65,
    borderWidth: 1,
    borderColor: "#CED2DA",
    borderRadius: 10,
  },
});

export default MailLogin;
