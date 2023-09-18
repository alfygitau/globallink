import { Pressable } from "react-native";
import React from "react";
import { Input, ScrollView, View, Text, Select } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../../promotions/promotionsSvgs";

export default function ProductVariations({ navigation }) {
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <View>
            <Text fontSize="20" fontWeight="bold" fontFamily="Inter-Regular">
              Add Product: Variations
            </Text>
          </View>
          <View>
            <View
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              mb="2"
              mt="4"
            >
              <View>
                <Text
                  fontSize="10"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                  color="rgba(193, 199, 214, 0.50)"
                >
                  Parent SKU
                </Text>
                <Input
                  w="177"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="12"
                  height="40px"
                  fontSize="10"
                  backgroundColor="#ffffff"
                  _focus={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(193, 199, 214, 0.35)",
                  }}
                  placeholder="Parent SKU"
                />
              </View>
              <View>
                <Text
                  fontSize="10"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                  color="rgba(193, 199, 214, 0.50)"
                >
                  Parent Product Name
                </Text>
                <Input
                  w="177"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="12"
                  height="40px"
                  fontSize="10"
                  backgroundColor="#ffffff"
                  _focus={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(193, 199, 214, 0.35)",
                  }}
                  placeholder="Parent Product Name"
                />
              </View>
            </View>
            <View
              borderBottomWidth="2"
              borderColor="rgba(193, 199, 214, 0.50)"
              mt="4"
              mb="4"
            />
            <View
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              mb="6"
            >
              <View>
                <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                  Variation SKU
                </Text>
                <Input
                  w="177"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="12"
                  height="40px"
                  fontSize="10"
                  backgroundColor="#ffffff"
                  _focus={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(193, 199, 214, 0.35)",
                  }}
                  placeholder="Enter Variation SKU"
                />
              </View>
              <View>
                <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                  Variation Type
                </Text>
                <Select
                  w="177"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  height="40px"
                  borderRadius="12"
                  fontSize="10"
                  accessibilityLabel="Sales Data"
                  placeholder="Select Type"
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
            </View>
            <View>
              <Text>Variation Product Name</Text>
              <Input
                w="100%"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="40px"
                fontSize="10"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter Variation Product Name"
              />
            </View>
          </View>
          <View>
            <View
              borderBottomWidth="2"
              borderColor="rgba(193, 199, 214, 0.50)"
              mt="4"
              mb="4"
            />
            <View
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              mb="6"
            >
              <View>
                <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                  Variation SKU
                </Text>
                <Input
                  w="177"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="12"
                  height="40px"
                  fontSize="10"
                  backgroundColor="#ffffff"
                  _focus={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(193, 199, 214, 0.35)",
                  }}
                  placeholder="Enter Variation SKU"
                />
              </View>
              <View>
                <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                  Variation Type
                </Text>
                <Select
                  w="177"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  height="40px"
                  borderRadius="12"
                  fontSize="10"
                  accessibilityLabel="Sales Data"
                  placeholder="Select Type"
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
            </View>
            <View>
              <Text>Variation Product Name</Text>
              <Input
                w="100%"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="40px"
                fontSize="10"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter Variation Product Name"
              />
            </View>
          </View>
          <View
            borderBottomWidth="2"
            borderColor="rgba(193, 199, 214, 0.50)"
            mt="4"
            mb="4"
          />

          <View alignSelf="center" mt="4" mb="4">
            <View
              width="233"
              height="31px"
              backgroundColor="#27C9A9"
              borderRadius="19"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                fontSize="13"
                color="white"
                fontFamily="Inter-Regular"
                fontWeight="400"
              >
                Add Variation
              </Text>
            </View>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            alignSelf="center"
            mt="12"
            mb="6"
          >
            <View
              width="146"
              height="31px"
              borderRadius="19"
              backgroundColor="#27C9A9"
              justifyContent="center"
              alignItems="center"
              mr="4"
            >
              <Text color="white" fontSize="13" fontWeight="400">
                Save
              </Text>
            </View>
            <Pressable
              onPress={() => navigation.navigate("CatalogAddProductShipping")}
            >
              <View
                width="146"
                height="31px"
                borderRadius="19"
                backgroundColor="#27C9A9"
                justifyContent="center"
                alignItems="center"
              >
                <Text color="white" fontSize="13" fontWeight="400">
                  Next
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
