import { TouchableOpacity } from "react-native";
import React from "react";
import { ScrollView, Text, View } from "native-base";
import { FlatList } from "react-native-gesture-handler";
import mockData from "../../../static/locationData";
import { TouchableOpacityBase } from "react-native";

export default function ListLocation({ navigation }) {
  const renderLocationHeaders = () => (
    <View
      flexDir="row"
      alignItems="center"
      borderBottomWidth="1"
      borderColor="rgba(193, 199, 214, 0.50)"
      mt="3"
    >
      <Text color="#525252" fontSize="8" fontFamily="Inter-Regular" width="20%">
        Location
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="20%"
        textAlign="center"
      >
        Products
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="20%"
        textAlign="center"
      >
        Total Cube
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="20%"
        textAlign="center"
      >
        Total Value
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="20%"
        textAlign="center"
      >
        View
      </Text>
    </View>
  );

  const renderLocationList = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ViewLocation", { locationId: item.id })
      }
    >
      <View
        flexDir="row"
        alignItems="center"
        borderBottomWidth="1"
        borderColor="rgba(193, 199, 214, 0.50)"
        py="5"
      >
        <Text
          color="#525252"
          fontSize="8"
          fontFamily="Inter-Regular"
          width="20%"
        >
          {item.locationName}
        </Text>
        <Text
          color="#525252"
          fontSize="8"
          fontFamily="Inter-Regular"
          width="20%"
          textAlign="center"
        >
          {item.noOfProducts}
        </Text>
        <Text
          color="#525252"
          fontSize="8"
          fontFamily="Inter-Regular"
          width="20%"
          textAlign="center"
        >
          {item.totalCubic}
        </Text>
        <Text
          color="#525252"
          fontSize="8"
          fontFamily="Inter-Regular"
          width="20%"
          textAlign="center"
        >
          {item.totalValue}
        </Text>
        <Text
          color="#525252"
          fontSize="8"
          fontFamily="Inter-Regular"
          width="20%"
          textAlign="center"
        >
          {item.noOfViews}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <View width="90%" alignSelf="center">
            <Text>Locations</Text>
          </View>

          <View width="90%" alignSelf="center">
            <View>{renderLocationHeaders()}</View>
            <FlatList
              data={mockData}
              renderItem={renderLocationList}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
