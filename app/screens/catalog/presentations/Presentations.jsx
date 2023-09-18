import { Platform, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, View } from "native-base";
import CreatePresentations from "./CreatePresentations";
import ViewPresentations from "./ViewPresentations";

export default function Presentations() {
  const [activeTab, setActiveTab] = useState("CreatePresentation");
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
              Presentation
            </Text>
          </View>
          <View flexDir="row" mt="2" mb="3">
            <TouchableOpacity
              onPress={() => setActiveTab("CreatePresentation")}
            >
              <View
                width="107px"
                height="29px"
                borderRadius="19"
                borderWidth={activeTab === "CreatePresentation" ? "0" : "1"}
                backgroundColor={
                  activeTab === "CreatePresentation" ? "#27C9A9" : "#ffffff"
                }
                borderColor={
                  activeTab === "CreatePresentation"
                    ? "none"
                    : "rgba(193, 199, 214, 0.35)"
                }
                justifyContent="center"
                alignItems="center"
                mr="4"
              >
                <Text
                  color={
                    activeTab === "CreatePresentation"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Create Presentation
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Presentations")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth="1"
                borderColor={
                  activeTab === "Presentations"
                    ? "none"
                    : "rgba(193, 199, 214, 0.35)"
                }
                backgroundColor={
                  activeTab === "Presentations" ? "#27C9A9" : "#ffffff"
                }
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  color={
                    activeTab === "Presentations"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Presentations
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {activeTab === "CreatePresentation" && <CreatePresentations />}

          {activeTab === "Presentations" && <ViewPresentations />}
        </View>
      </ScrollView>
    </View>
  );
}
