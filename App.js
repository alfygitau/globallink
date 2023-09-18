import React, { useEffect, useState } from "react";
import { NativeBaseProvider } from "native-base";
import Routes from "./app/routes/Routes";
import "react-native-gesture-handler";
import * as Font from "expo-font";
import { Text } from "react-native";
import { ClickOutsideProvider } from "react-native-click-outside";
import { configureStatusBar } from "./StatusBarConfig";
import DataContextProvider from "./app/context/DataContext";
import { QueryClient, QueryClientProvider } from "react-query";

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const queryClient = new QueryClient();

  useEffect(() => {
    configureStatusBar();
  }, []);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
        "Inter-Thin": require("./assets/fonts/Inter-Thin.ttf"),
        "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
        "Inter-Light": require("./assets/fonts/Inter-Light.ttf"),
        "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
        "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
        "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
        "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = { fontFamily: "Inter-Regular" };

  return (
    <DataContextProvider>
      <QueryClientProvider client={queryClient}>
        <ClickOutsideProvider>
          <NativeBaseProvider>
            <Routes />
          </NativeBaseProvider>
        </ClickOutsideProvider>
      </QueryClientProvider>
    </DataContextProvider>
  );
};

export default App;
