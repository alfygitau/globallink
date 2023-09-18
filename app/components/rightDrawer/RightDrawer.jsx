import { Platform, Pressable } from "react-native";
import React from "react";
import { Input, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../screens/catalog/promotions/promotionsSvgs";
import { arrow_right_icon } from "../../screens/purchasing/purchaseSvgs";
import { useClickOutside } from "react-native-click-outside";
import Modal from "react-native-modal";

export default function RightDrawerModal({ modalVisible, setModalVisible }) {
  const ref = useClickOutside(() => setModalVisible(false));
  return (
    <Modal
      isVisible={modalVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
    >
      <View
        ref={ref}
        style={{
          position: "absolute",
          right: -20,
          top: -24,
          backgroundColor: "white",
          height: 920,
          width: 240,
        }}
      >
        <View mt={Platform.OS === "ios" ? "65px" : "40px"}>
          <View paddingLeft="4">
            <View mb="2">
              <Text fontSize="12" fontFamily="Inter-Regular" mb="1">
                Select Partner
              </Text>
              <Select
                width="188"
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Enter Account Type"
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
            <View mb="2">
              <Text fontSize="12" fontFamily="Inter-Regular" mb="1">
                Select Container Type
              </Text>
              <Select
                width="188"
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
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
            <View mb="2">
              <Text fontSize="12" fontFamily="Inter-Regular" mb="1">
                Select Location
              </Text>
              <Select
                width="188"
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Location"
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
            borderBottomWidth="1"
            borderColor="rgba(193, 199, 214, 0.50)"
            my="3"
          />
          <View paddingX="4">
            <View
              flexDir="row"
              justifyContent="space-between"
              alignItems="center"
              mb="3"
            >
              <Text>Products</Text>
              <View>
                <SvgXml xml={arrow_right_icon} />
              </View>
            </View>
            <View mb="2">
              <Text fontSize="12" fontFamily="Inter-Regular" mb="1">
                Product
              </Text>
              <Select
                width="188"
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Davis’s Chairs"
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
            <View mb="2">
              <Text fontSize="12" fontFamily="Inter-Regular" mb="1">
                Current Quantity
              </Text>
              <Select
                width="188"
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="100"
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
            <View mb="2">
              <Text fontSize="12" fontFamily="Inter-Regular" mb="1">
                Consigned Quantity
              </Text>
              <Select
                width="188"
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="0"
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
            <View mb="2">
              <Text fontSize="12" fontFamily="Inter-Regular" mb="1">
                Purchase Consignment
              </Text>
              <Select
                width="188"
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="0"
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
            <View mb="2">
              <Text fontSize="12" fontFamily="Inter-Regular" mb="1">
                Purchase Amount
              </Text>
              <Input
                w="188"
                borderRadius="12"
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                backgroundColor="#ffffff"
                fontSize="10"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Apt, Suite, Building #"
              />
            </View>
          </View>
          <Pressable onPress={() => setModalVisible(false)}>
            <View
              width="146px"
              height="30px"
              borderRadius="19"
              backgroundColor="#27C9A9"
              justifyContent="center"
              alignItems="center"
              alignSelf="center"
              mt="4"
            >
              <Text color="white" fontSize="10" fontFamily="Inter-Regular">
                Add
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
