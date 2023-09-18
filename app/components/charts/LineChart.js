import { LineChart, Grid, Circle } from "react-native-svg-charts";
import React from "react";
import { View } from "native-base";

export default function LineChartGraph() {
  const data = [
    { x: 1, y: 20 },
    { x: 2, y: 45 },
    { x: 3, y: 28 },
    { x: 4, y: 80 },
    { x: 5, y: 99 },
    { x: 6, y: 43 },
    { x: 7, y: 80 },
    { x: 8, y: 296 },
  ];

  return (
    <View
      width="95%"
      alignSelf="center"
      borderWidth={1}
      borderColor="#DFE3E6"
      borderRadius={19}
      marginTop="10"
    >
      <LineChart
        style={{ height: 300 }}
        data={data}
        svg={{ stroke: "#27C9A9" }}
        contentInset={{ top: 20, bottom: 20 }}
        xAccessor={({ item }) => item.x} // Use 'x' key for x-axis data
        yAccessor={({ item }) => item.y} // Use 'y' key for y-axis data
      >
        <Grid />
      </LineChart>
    </View>
  );
}
