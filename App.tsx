import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./views/auth/splashScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import MailLogin from "./views/auth/mailLogin";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MailLogin" component={MailLogin} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
