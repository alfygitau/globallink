import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { View } from "native-base";
import { SvgXml } from "react-native-svg";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logo_icon } from "../../screens/login/loginSvgs";

const menu = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M5.15625 8.90625H24.8438M5.15625 15H24.8438M5.15625 21.0938H24.8438" stroke="#525252" stroke-width="2.8125" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>`;

const search = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M19.375 17.5H18.3875L18.0375 17.1625C19.3048 15.6925 20.0014 13.8159 20 11.875C20 10.268 19.5235 8.69714 18.6307 7.361C17.7379 6.02485 16.469 4.98344 14.9843 4.36848C13.4997 3.75352 11.866 3.59262 10.2899 3.90612C8.7138 4.21963 7.26606 4.99346 6.12976 6.12976C4.99346 7.26606 4.21963 8.7138 3.90612 10.2899C3.59262 11.866 3.75352 13.4997 4.36848 14.9843C4.98344 16.469 6.02485 17.7379 7.361 18.6307C8.69714 19.5235 10.268 20 11.875 20C13.8875 20 15.7375 19.2625 17.1625 18.0375L17.5 18.3875V19.375L23.75 25.6125L25.6125 23.75L19.375 17.5ZM11.875 17.5C8.7625 17.5 6.25 14.9875 6.25 11.875C6.25 8.7625 8.7625 6.25 11.875 6.25C14.9875 6.25 17.5 8.7625 17.5 11.875C17.5 14.9875 14.9875 17.5 11.875 17.5Z" fill="black"/>
</svg>`;

export default function CustomHeader() {
  const navigation = useNavigation(); // Access the navigation prop
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleMenuPress = () => {
    // Open the side drawer here
    navigation.toggleDrawer();
  };

  const handleSearchPress = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search visibility
  };
  return (
    <SafeAreaView style={styles.container}>
      <View width="100%" height="60px" bgColor="white" justifyContent="center">
        <View
          width="90%"
          bgColor="white"
          alignItems="center"
          justifyContent="space-between"
          alignSelf="center"
          flexDir="row"
        >
          <View>
            <TouchableOpacity onPress={handleMenuPress}>
              <SvgXml xml={menu} />
            </TouchableOpacity>
          </View>
          <View>
            <SvgXml xml={logo_icon} width={180} height={60} />
          </View>
          <View>
            <TouchableOpacity onPress={handleSearchPress}>
              <SvgXml xml={search} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isSearchVisible && (
        <View style={styles.searchInputContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
  searchInputContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderColor: "rgba(207, 207, 207, 0.25)",
    height: 70,
  },
  searchInput: {
    height: 40,
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1, // Add border width
    borderColor: "#ccc",
  },
});
