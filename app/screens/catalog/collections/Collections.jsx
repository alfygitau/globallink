import { Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView, Text, View } from "native-base";
import CreateCollection from "./CreateCollection";
import ViewCollections from "./ViewCollections";

export default function Collections() {
  const [activeTab, setActiveTab] = useState("CreateCollection");
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <View mt="2" mb="3">
            <Text fontSize="20" fontWeight="600" fontFamily="Inter-Regular">
              Collections
            </Text>
          </View>
          <View flexDir="row" mt="2" mb="3">
            <TouchableOpacity onPress={() => setActiveTab("CreateCollection")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth={activeTab === "CreateCollection" ? "0" : "1"}
                backgroundColor={
                  activeTab === "CreateCollection" ? "#27C9A9" : "#ffffff"
                }
                borderColor={
                  activeTab === "CreateCollection"
                    ? "none"
                    : "rgba(193, 199, 214, 0.35)"
                }
                justifyContent="center"
                alignItems="center"
                mr="4"
              >
                <Text
                  color={
                    activeTab === "CreateCollection"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Create Collection
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("ViewCollections")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth="1"
                borderColor={
                  activeTab === "ViewCollections"
                    ? "none"
                    : "rgba(193, 199, 214, 0.35)"
                }
                backgroundColor={
                  activeTab === "ViewCollections" ? "#27C9A9" : "#ffffff"
                }
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  color={
                    activeTab === "ViewCollections"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  View Collection
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {activeTab === "CreateCollection" && (
            <ScrollView>
              <View>
                <CreateCollection />
              </View>
            </ScrollView>
          )}

          {activeTab === "ViewCollections" && (
            <View>
              <ViewCollections />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
