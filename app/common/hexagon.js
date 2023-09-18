import React from "react";
import { View } from "react-native";
import Svg, { Polygon } from "react-native-svg";

const Hexagon = ({ children }) => {
  return (
    <View style={styles.hexagonContainer}>
      <View style={styles.hexagonWrapper}>
        <Svg height="50" width="50">
          <Polygon
            points="25,0 45.45,12.5 45.45,37.5 25,50 4.55,37.5 4.55,12.5"
            fill="white"
            stroke="white"
            strokeWidth="1"
            transform="rotate(90 25 25)"
          />
        </Svg>
      </View>
      <View style={styles.icon}>{children}</View>
    </View>
  );
};

const styles = {
  hexagonContainer: {
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  hexagonWrapper: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: "hidden",
  },
  icon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Hexagon;
