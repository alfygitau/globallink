import {} from "react-native";
import React from "react";
import { ScrollView, Text, View } from "native-base";

export default function ChannelHome() {
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <Text>Channels Dashboard</Text>
        </View>
      </ScrollView>
    </View>
  );
}
