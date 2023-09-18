import {} from "react-native";
import React, { useState } from "react";
import { Input, Select, Text, TextArea, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../../promotions/promotionsSvgs";

export default function GeneralDetails() {
  return (
    <View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            SKU
          </Text>
          <Input
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter SKU"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            UPC
          </Text>
          <Input
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter UPC"
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
            Product Name
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Product Name"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            ASIN
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter ASIN"
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
            Category
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Product Category"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Serial Number
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Serial Number"
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
            Sub-Category
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Sub-Category"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Model ID
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Model Id"
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
            Brand
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Brand"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Collection
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Collection"
          />
        </View>
      </View>
      <View mb="2">
        <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
          Product Description
        </Text>
        <TextArea
          h={20}
          placeholder="Enter Product Description"
          w="100%"
          fontSize="10"
          borderRadius="12"
          borderColor="rgba(193, 199, 214, 0.35)"
          borderWidth="2"
          _focus={{
            backgroundColor: "#ffffff",
            borderColor: "rgba(193, 199, 214, 0.35)",
          }}
        />
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Feature #1
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Brand"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Product Length
          </Text>
          <Input
            w="108"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Length"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Metric
          </Text>
          <Select
            width="60"
            height="40px"
            borderRadius="12"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="In"
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
            Feature #2
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Feature"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Product Width
          </Text>
          <Input
            w="108"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Width"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Metric
          </Text>
          <Select
            width="60"
            height="40px"
            borderRadius="12"
            fontSize="10"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            accessibilityLabel="Sales Data"
            placeholder="In"
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
            Feature #3
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Feature"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Product Height
          </Text>
          <Input
            w="108"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Height"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Metric
          </Text>
          <Select
            width="60"
            height="40px"
            borderRadius="12"
            fontSize="10"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            accessibilityLabel="Sales Data"
            placeholder="In"
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
            Feature #4
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Feature"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Product Weight
          </Text>
          <Input
            w="108"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Weight"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Metric
          </Text>
          <Select
            width="60"
            height="40px"
            borderRadius="12"
            fontSize="10"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            accessibilityLabel="Sales Data"
            placeholder="lbs"
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
            Feature #5
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Feature"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Assembly Required
          </Text>
          <Select
            w="177"
            height="40px"
            borderRadius="12"
            fontSize="10"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            accessibilityLabel="Sales Data"
            placeholder="Assembly Required"
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
            Minimum Order Quantity
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter MOQ"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Assembly Required Level
          </Text>
          <Select
            w="177"
            height="40px"
            borderRadius="12"
            fontSize="10"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            accessibilityLabel="Sales Data"
            placeholder="Assembly Required"
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
            Partner
          </Text>
          <Select
            w="177"
            height="40px"
            borderRadius="12"
            fontSize="10"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            accessibilityLabel="Sales Data"
            placeholder="Select Partner"
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
            California Prop 65
          </Text>
          <Select
            w="177"
            height="40px"
            borderRadius="12"
            fontSize="10"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            accessibilityLabel="Sales Data"
            placeholder="Yes or No"
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
            Brand
          </Text>
          <Input
            w="177"
            borderRadius="12"
            height="40px"
            fontSize="10"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Brand"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            California Prop 65 Chemical
          </Text>
          <Input
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Chemical"
          />
        </View>
      </View>
      <View flexDir="row" alignItems="center" alignSelf="center" mt="4" mb="6">
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
      </View>
    </View>
  );
}
