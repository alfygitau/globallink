import { Pressable } from "react-native";
import React, { useState } from "react";
import { Input, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../../promotions/promotionsSvgs";
import { StyleSheet } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { add_dropdown_icon, editor_close_icon } from "../../productsSvg";

export default function ProductCustoms({ navigation }) {
  const [selected, setSelected] = useState([]);
  const [selected1, setSelected1] = useState([]);
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];
  const data1 = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];
  return (
    <View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="6"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Text Field Title
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
            placeholder="Enter Title"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Text Field Type
          </Text>
          <Select
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            height="40px"
            borderRadius="12"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="Enter type"
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
      <View flexDir="row" justifyContent="space-between" mb="2">
        <View width="177" borderRadius="12">
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Text Field Type
          </Text>
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={selected}
            onChange={(item) => {
              setSelected(item);
            }}
            renderRightIcon={() => (
              <View mr="2">
                <SvgXml xml={add_dropdown_icon} />
              </View>
            )}
            selectedStyle={styles.selectedStyle}
          />
        </View>
        <View width="177" borderRadius="12">
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Text Field Type
          </Text>
          <MultiSelect
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            search
            data={data1}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            value={selected1}
            onChange={(item) => {
              setSelected1(item);
            }}
            renderRightIcon={() => (
              <View mr="2">
                <SvgXml xml={add_dropdown_icon} />
              </View>
            )}
            selectedStyle={styles.selectedStyle}
          />
        </View>
      </View>
      <View justifyContent="center" alignItems="center" mt="4">
        <View
          width="146"
          height="31px"
          borderRadius="19"
          backgroundColor="#27C9A9"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="13" fontWeight="400">
            Create
          </Text>
        </View>
      </View>
      <View mt="4">
        <Text
          textAlign="center"
          fontSize="8"
          fontFamily="Inter-Regular"
          fontStyle="italic"
          fontWeight="300"
          color="#rgba(0, 0, 0, 0.50)"
        >
          Reminder: When you select dropdown or Metric field type the selections
          will be activated to input
        </Text>
      </View>
      <View
        borderBottomWidth="2"
        borderColor="rgba(193, 199, 214, 0.50)"
        mt="4"
        mb="4"
      />
      <View>
        <Text fontSize="15" fontFamily="Inter-Regular" fontWeight="400" mb="2">
          Created Text Fields
        </Text>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mb="6"
        >
          <View>
            <View
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              mb="2"
              width="171"
              alignSelf="center"
            >
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Text Field Title
              </Text>
              <View>
                <SvgXml xml={editor_close_icon} />
              </View>
            </View>
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
              placeholder="Enter Title"
            />
          </View>
          <View>
            <View
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              mb="2"
              width="171"
              alignSelf="center"
            >
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Text Field Title
              </Text>
              <View>
                <SvgXml xml={editor_close_icon} />
              </View>
            </View>
            <Select
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              height="40px"
              borderRadius="12"
              fontSize="10"
              accessibilityLabel="Sales Data"
              placeholder="Enter type"
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
      </View>
      <View flexDir="row" alignItems="center" alignSelf="center" mt="12" mb="6">
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
          onPress={() => navigation.navigate("CatalogAddProductVariations")}
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
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    borderColor: "rgba(193, 199, 214, 0.35)",
    borderWidth: 2,
    borderRadius: 12,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 10,
    marginLeft: 7,
    color: "rgba(82, 82, 82, 0.50)",
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 12,
  },
  selectedStyle: {
    borderRadius: 12,
    width: 80,
  },
});
