import { Dimensions, Platform, Pressable } from "react-native";
import React from "react";
import { Input, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";
import { add_contact_icon } from "./customersSvgs";

export default function CustomerShipping({
  shippingDetails,
  setShippingDetails,
  allowances,
  setAllowances,
  setActiveTab,
}) {
  const screenHeight = Dimensions.get("window").height;
  const iosHeight = Number(screenHeight) - 264;
  const androidHeight = Number(screenHeight) - 204;
  return (
    <View
      height={Platform.OS === "ios" ? iosHeight : androidHeight}
      justifyContent="space-between"
    >
      <View>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mb="2"
        >
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Address
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={shippingDetails.address_1}
              onChangeText={(text) =>
                setShippingDetails((prev) => ({ ...prev, address_1: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Address"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Country
            </Text>
            <Select
              w="177"
              height="40px"
              borderRadius="12"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              fontSize="10"
              accessibilityLabel="Sales Data"
              placeholder="Select Country"
              selectedValue={shippingDetails.country}
              onValueChange={(value) =>
                setShippingDetails((prev) => ({ ...prev, country: value }))
              }
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
          mb="2"
        >
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Address #2
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={shippingDetails.address_2}
              onChangeText={(text) =>
                setShippingDetails((prev) => ({ ...prev, address_2: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Secondary Address"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Zip Code
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={shippingDetails.zip_code}
              onChangeText={(text) =>
                setShippingDetails((prev) => ({ ...prev, zip_code: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Zipcode"
            />
          </View>
        </View>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mb="2"
        >
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              City
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={shippingDetails.city}
              onChangeText={(text) =>
                setShippingDetails((prev) => ({ ...prev, city: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter City"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Preferred Carrier
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={shippingDetails.preferred_carrier}
              onChangeText={(text) =>
                setAllowances((prev) => ({
                  ...prev,
                  preferred_carrier: text,
                }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Preferred Carrier"
            />
          </View>
        </View>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mb="2"
        >
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              State/Region
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={shippingDetails.region}
              onChangeText={(text) =>
                setShippingDetails((prev) => ({ ...prev, region: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter State/Region"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Dropship
            </Text>
            <Select
              w="177"
              height="40px"
              borderRadius="12"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              fontSize="10"
              accessibilityLabel="Sales Data"
              placeholder="Select dropship"
              selectedValue={shippingDetails.dropship}
              onValueChange={(value) =>
                setShippingDetails((prev) => ({ ...prev, dropship: value }))
              }
              dropdownIcon={
                <View mr="2">
                  <SvgXml xml={dropdown_icon} />
                </View>
              }
            >
              <Select.Item label="Yes" value="Yes" />
              <Select.Item label="No" value="No" />
            </Select>
          </View>
        </View>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mb="2"
        >
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Ship Allowance
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              keyboardType="numeric"
              value={shippingDetails.ship_allowance}
              onChangeText={(text) =>
                setShippingDetails((prev) => ({
                  ...prev,
                  ship_allowance: text,
                }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Ship Allowance"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Ship Allowance Discount
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={shippingDetails.ship_discount}
              onChangeText={(text) =>
                setShippingDetails((prev) => ({ ...prev, ship_discount: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="15%"
            />
          </View>
        </View>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mt="4"
        >
          <View
            borderBottomWidth="2"
            borderColor="rgba(193, 199, 214, 0.50)"
            width="65%"
          />
          <View
            width="35%"
            flexDir="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <View>
              <Text>Add Allowance</Text>
            </View>
            <View>
              <SvgXml xml={add_contact_icon} />
            </View>
          </View>
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Shipment Parameters
          </Text>
          <Select
            w="100%"
            height="40px"
            borderRadius="12"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="Ship Complete/Ship as Available"
            selectedValue={allowances.shipment_parameter}
            onValueChange={(value) =>
              setAllowances((prev) => ({ ...prev, shipment_parameter: value }))
            }
            dropdownIcon={
              <View mr="2">
                <SvgXml xml={dropdown_icon} />
              </View>
            }
          >
            <Select.Item
              label="Ship Complete or Ship As Available"
              value="Ship Complete or Ship As Available"
            />
            <Select.Item label="Ship Complete" value="Ship Complete" />
            <Select.Item label="Ship As Available" value="Ship As Available" />
          </Select>
        </View>
      </View>

      <View mb="40px" alignSelf="center">
        <Pressable onPress={() => setActiveTab("Location")}>
          <View
            width="243"
            height="31px"
            borderRadius="19"
            backgroundColor="#27C9A9"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              fontSize="13"
              color="white"
              fontFamily="Inter-Regular"
              fontWeight="400"
            >
              Next
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
