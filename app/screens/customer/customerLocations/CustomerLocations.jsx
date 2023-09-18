import {} from "react-native";
import React from "react";
import { Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default function CustomerLocations() {
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <View mb="2">
            <Text>Customers Location</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
