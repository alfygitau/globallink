import { Platform, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, View } from "native-base";
import CreatePromotion from "./CreatePromotion";
import ActivePromotions from "./ActivePromotions";

export default function Promotions() {
  const [activeTab, setActiveTab] = useState("CreatePromotion");
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
              Promotions
            </Text>
          </View>
          <View flexDir="row" mt="2" mb="3">
            <TouchableOpacity onPress={() => setActiveTab("CreatePromotion")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth={activeTab === "CreatePromotion" ? "0" : "1"}
                backgroundColor={
                  activeTab === "CreatePromotion" ? "#27C9A9" : "#ffffff"
                }
                borderColor={
                  activeTab === "CreatePromotion"
                    ? "none"
                    : "rgba(193, 199, 214, 0.35)"
                }
                justifyContent="center"
                alignItems="center"
                mr="4"
              >
                <Text
                  color={
                    activeTab === "CreatePromotion"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Create Promotion
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("ActivePromotions")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth="1"
                borderColor={
                  activeTab === "ActivePromotions"
                    ? "none"
                    : "rgba(193, 199, 214, 0.35)"
                }
                backgroundColor={
                  activeTab === "ActivePromotions" ? "#27C9A9" : "#ffffff"
                }
                justifyContent="center"
                alignItems="center"
                mr="4"
              >
                <Text
                  color={
                    activeTab === "ActivePromotions"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Active Promotions
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("PastPromotions")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth="1"
                borderColor={
                  activeTab === "PastPromotions"
                    ? "none"
                    : "rgba(193, 199, 214, 0.35)"
                }
                backgroundColor={
                  activeTab === "PastPromotions" ? "#27C9A9" : "#ffffff"
                }
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  color={
                    activeTab === "PastPromotions"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Past Promotions
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* create promotion */}
          {activeTab === "CreatePromotion" && <CreatePromotion />}

          {/* active promotions */}
          {activeTab === "ActivePromotions" && <ActivePromotions />}
        </View>
      </ScrollView>
    </View>
  );
}
