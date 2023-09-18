import React from "react";
import { View, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

const hexagonSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="62" viewBox="0 0 70 62" fill="none">
    <path d="M48.8371 0.25H21.1621C18.7362 0.25 16.4812 1.54833 15.2512 3.66667L1.44789 27.5833C0.217891 29.7017 0.217891 32.2983 1.44789 34.4167L15.2512 58.3333C16.4812 60.4517 18.7362 61.75 21.1621 61.75H48.8029C51.2287 61.75 53.4837 60.4517 54.7137 58.3333L68.5171 34.4167C69.7471 32.2983 69.7471 29.7017 68.5171 27.5833L54.7137 3.66667C53.5179 1.54833 51.2629 0.25 48.8371 0.25Z" fill="white"/>
  </svg>
`;

const NewHexagon = ({ children }) => {
  return (
    <View style={styles.container}>
      <SvgXml xml={hexagonSvg} width="58" height="52" />
      <View style={styles.iconContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    top: 17,
    left: 20,
  },
});

export default NewHexagon;
