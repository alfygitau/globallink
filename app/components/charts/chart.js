import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Select, Text, View } from "native-base";
import { dropdown_icon } from "../../screens/catalog/promotions/promotionsSvgs";
import { SvgXml } from "react-native-svg";

const weeklyData = {
  labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "Total"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 80, 296],
    },
  ],
};
const monthlyData = {
  labels: ["Week1", "Week2", "Week3", "Week4", "Total"],
  datasets: [
    {
      data: [120, 145, 128, 180, 530],
    },
  ],
};

const annualData = {
  labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D", "Total"],
  datasets: [
    {
      data: [20, 14, 128, 18, 100, 20, 40, 80, 8, 100, 55, 12, 500],
    },
  ],
};

const Chart = () => {
  const screenWidth = Dimensions.get("window").width;
  const isIpad = screenWidth >= 768;

  const chartWidth = screenWidth - 45;

  const chartHeight = isIpad ? 300 : 210;

  const [selectedValue, setSelectedValue] = useState("weekly");

  const handleDataChange = (value) => {
    setSelectedValue(value);
  };

  const getDataByValue = (value) => {
    switch (value) {
      case "weekly":
        return weeklyData;
      case "monthly":
        return monthlyData;
      case "annually":
        return annualData;
      default:
        return [];
    }
  };

  const data = getDataByValue(selectedValue);

  const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    chartContainer: {
      borderWidth: 1,
      borderColor: "#DFE3E6",
      borderRadius: 19,
      backgroundColor: "white",
      padding: 10,
      height: isIpad ? 370 : 310,
      shadowColor: "rgba(126, 126, 126, 0.10)",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 1,
      elevation: 2,
      borderRadius: 19,
      padding: 10,
    },
    introText: {
      paddingHorizontal: 10,
      fontFamily: "Inter-Regular",
      fontSize: 12,
      fontWeight: 500,
      color: "#525252",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <View
          flexDir="row"
          justifyContent="space-between"
          alignItems="center"
          mb="5"
        >
          <Text style={styles.introText}>Sales summary</Text>
          <Select
            width="120"
            height="30px"
            borderRadius="19"
            fontSize="10"
            selectedValue={selectedValue}
            accessibilityLabel="Sales Data"
            placeholder="Sales Data"
            onValueChange={(itemValue) => handleDataChange(itemValue)}
            mt={1}
            dropdownIcon={
              <View mr="2">
                <SvgXml xml={dropdown_icon} />
              </View>
            }
          >
            <Select.Item label="Weekly" value="weekly" />
            <Select.Item label="Monthly" value="monthly" />
            <Select.Item label="Annually" value="annually" />
          </Select>
        </View>
        <View>
          <LineChart
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            yAxisLabel="$ "
            data={data}
            width={chartWidth}
            height={chartHeight}
            chartConfig={{
              backgroundColor: "#ffffff",
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              lineDashPattern: null,
              strokeWidth: 2,
              color: (opacity = 1) => `#27C9A9`,
              labelColor: (opacity = 1) => `#000`,
              fillShadowGradient: "#ffffff",
              fillShadowGradientOpacity: 0,
              useShadowColorFromDataset: false,
              propsForDots: {
                r: "3",
                strokeWidth: "2",
              },
            }}
            bezier
          />
        </View>
      </View>
    </View>
  );
};

export default Chart;
