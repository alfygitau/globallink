import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import CustomSidebarMenu from "../screens/sidebar/Sidebar";
import Login from "../screens/login/LoginScreen";
import CustomHeader from "../components/header/CustomHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TabsScreens from "../routes/TabScreens";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 300,
        },
        gestureHandlerProps: { enabled: false },
        drawerPosition: "left",
      }}
    >
      <Drawer.Screen
        name="DrawerScreens"
        component={TabsScreens}
        options={{
          header: (props) => <CustomHeader />,
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="AppScreens" component={AppScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function AppScreens({ route }) {
  const isLoginScreen = route.name === "Login";
  return (
    <React.Fragment>
      {isLoginScreen ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <DrawerNavigator />
      )}
    </React.Fragment>
  );
}

export default App;
