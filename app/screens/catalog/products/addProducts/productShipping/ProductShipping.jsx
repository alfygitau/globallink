import { Pressable } from "react-native";
import React from "react";
import { Input, ScrollView, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../../promotions/promotionsSvgs";

export default function ProductShipping({ navigation }) {
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <View mb="4">
            <Text fontSize="20" fontWeight="bold" fontFamily="Inter-Regular">
              Add Product: Shipping
            </Text>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="6"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Country of Origin
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
                placeholder="Insert Country of Origin"
              />
            </View>
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Container
              </Text>
              <Select
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="40px"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Container Type"
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
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="6"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Lead Time in Hours
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
                placeholder="Enter Lead Time"
              />
            </View>
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Freight Class
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
                placeholder="Enter Freight Class"
              />
            </View>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="6"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Shipping Method
              </Text>
              <Select
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="40px"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Shipping Method"
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
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Harmonized Number
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
                placeholder="Enter Harmonized Number"
              />
            </View>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="6"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Small Parcel Carrier
              </Text>
              <Select
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="40px"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Freight Carrier"
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
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Dimensions Metric
              </Text>
              <Select
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="40px"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Metric"
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
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="6"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                LTL Carrier
              </Text>
              <Select
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="40px"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Freight Carrier"
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
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Weight Metric
              </Text>
              <Select
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="40px"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Metric"
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
          <View
            width="100%"
            height="50px"
            borderBottomWidth="1"
            flexDir="row"
            justifyContent="space-between"
            alignItems="flex-end"
            paddingBottom="2"
            borderColor="rgba(193, 199, 214, 0.50)"
          >
            <View flex={1} alignItems="center" justifyContent="center">
              <Text color="#525252" fontFamily="Inter-SemiBold" fontSize="10">
                Carton ID
              </Text>
            </View>
            <View flex={1} alignItems="center" justifyContent="center">
              <Text color="#525252" fontFamily="Inter-SemiBold" fontSize="10">
                Quantity
              </Text>
            </View>
            <View flex={1} alignItems="center" justifyContent="center">
              <Text color="#525252" fontFamily="Inter-SemiBold" fontSize="10">
                Length
              </Text>
            </View>
            <View flex={1} alignItems="center" justifyContent="center">
              <Text color="#525252" fontFamily="Inter-SemiBold" fontSize="10">
                Width
              </Text>
            </View>
            <View flex={1} alignItems="center" justifyContent="center">
              <Text color="#525252" fontFamily="Inter-SemiBold" fontSize="10">
                Height
              </Text>
            </View>
          </View>
          <View
            width="100%"
            height="70px"
            borderBottomWidth="1"
            flexDir="row"
            justifyContent="space-between"
            alignItems="flex-end"
            paddingBottom="2"
            borderColor="rgba(193, 199, 214, 0.50)"
          >
            <View flex={1} alignItems="center" justifyContent="center">
              <Input
                w="51"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="50px"
                fontSize="10"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder=""
              />
            </View>
            <View flex={1} alignItems="center" justifyContent="center">
              <Input
                w="51"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="50px"
                fontSize="10"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder=""
              />
            </View>
            <View flex={1} alignItems="center" justifyContent="center">
              <Input
                w="51"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="50px"
                fontSize="10"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder=""
              />
            </View>
            <View flex={1} alignItems="center" justifyContent="center">
              <Input
                w="51"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="50px"
                fontSize="10"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder=""
              />
            </View>
            <View flex={1} alignItems="center" justifyContent="center">
              <Input
                w="51"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="50px"
                fontSize="10"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder=""
              />
            </View>
          </View>
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
                Add New Shipping Line
              </Text>
            </View>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            alignSelf="center"
            mt="8"
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
              onPress={() => navigation.navigate("CatalogAddProductPricing")}
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
