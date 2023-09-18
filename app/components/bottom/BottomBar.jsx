import { View, Text } from "native-base";
import React, { useEffect, useState } from "react";
import { ScrollView, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import {
  catalog_active,
  dash_bottom_active,
  global_files_active_icon,
  global_files_icon,
  logistics_active_icon,
  purchasing_active_icon,
  sales_active_icon,
  svg1,
} from "./bottomBarSvg";
import { svg2 } from "./bottomBarSvg";
import { svg3 } from "./bottomBarSvg";
import { svg4 } from "./bottomBarSvg";
import { svg5 } from "./bottomBarSvg";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { dash_icon } from "../../screens/sidebar/sidebarSvgs";

export default function BottomBar({ state, descriptors, navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const isIpad = screenWidth >= 768;
  const [activeRoute, setActiveRoute] = useState("MainStack");

  const getActiveRouteName = (state) => {
    const route = state.routes[state.index];
    if (route.state) {
      return getActiveRouteName(route.state);
    }
    return route.name;
  };

  useEffect(() => {
    const activeRoute = getActiveRouteName(state);
    setActiveRoute(activeRoute);
  }, [state]);

  console.log(activeRoute);

  return (
    <View width="100%" bgColor="white" height="60" justifyContent="center">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <View
          width="90%"
          bgColor="white"
          alignSelf="center"
          alignItems="center"
          flexDir="row"
          justifyContent="space-between"
        >
          <View width={isIpad ? "200" : "75"}>
            {activeRoute === "Purchasing Order" ? (
              <TouchableOpacity
                onPress={() => navigation.navigate("Purchasing Order")}
              >
                <SvgXml xml={purchasing_active_icon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate("Purchasing Order")}
              >
                <SvgXml xml={svg1} />
              </TouchableOpacity>
            )}
          </View>
          <View width={isIpad ? "200" : "75"}>
            {activeRoute === "CatalogProducts" ? (
              <TouchableOpacity
                onPress={() => navigation.navigate("CatalogProducts")}
              >
                <SvgXml xml={catalog_active} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate("CatalogProducts")}
              >
                <SvgXml xml={svg2} />
              </TouchableOpacity>
            )}
          </View>
          <View width={isIpad ? "200" : "75"}>
            {activeRoute === "Dash" || activeRoute === "MainStack" ? (
              <TouchableOpacity onPress={() => navigation.navigate("Dash")}>
                <SvgXml xml={svg3} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => navigation.navigate("Dash")}>
                <SvgXml xml={dash_bottom_active} />
              </TouchableOpacity>
            )}
          </View>
          <View width={isIpad ? "200" : "75"}>
            {activeRoute === "Inventory" ? (
              <TouchableOpacity
                onPress={() => navigation.navigate("Inventory")}
              >
                <SvgXml xml={logistics_active_icon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate("Inventory")}
              >
                <SvgXml xml={svg4} />
              </TouchableOpacity>
            )}
          </View>
          <View width={isIpad ? "200" : "75"}>
            {activeRoute === "Dashboard Sales" ? (
              <TouchableOpacity
                onPress={() => navigation.navigate("Dashboard Sales")}
              >
                <SvgXml xml={sales_active_icon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate("Dashboard Sales")}
              >
                <SvgXml xml={svg5} />
              </TouchableOpacity>
            )}
          </View>
          <View width={isIpad ? "200" : "75"}>
            {activeRoute === "My Files" ? (
              <TouchableOpacity onPress={() => navigation.navigate("My Files")}>
                <SvgXml xml={global_files_active_icon} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => navigation.navigate("My Files")}>
                <SvgXml xml={global_files_icon} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
