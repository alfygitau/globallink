import {} from "react-native";
import React, { useState } from "react";
import { Text, View, Pressable, Input } from "native-base";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { search_icon } from "../../globalFiles/globalFilesSvgs";
import mockData from "../../../static/salesOrderData";
import Pagination from "../../../components/pagination/Pagination";
import { LongPressGestureHandler, State } from "react-native-gesture-handler";
import { shadowStyle } from "../../../globalStyles/Styles";
import CreateOrder from "./CreateOrder";
import { useClickOutside } from "react-native-click-outside";

export default function SalesOrder() {
  const [activeTab, setActiveTab] = useState("API Orders");
  const ref = useClickOutside(() => setSelectedRow(null));
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowPress = (itemId) => {
    setSelectedRow(itemId);
  };

  const handleCloseDropdown = () => {
    setSelectedRow(null);
  };

  const handleDropdownOptionSelect = (item, option) => {
    console.log(`Selected option "${option}" for row with ID ${item.id}`);
    handleCloseDropdown();
  };

  const renderDropdown = (selectedItem) => {
    const selectedRowIndex = mockData.findIndex(
      (item) => item.id === selectedRow
    );
    const topOffset = (selectedRowIndex + 1) * 50;
    return (
      <View
        style={[
          {
            position: "absolute",
            top: topOffset,
            left: "30%",
            width: 164,
            zIndex: 1,
            backgroundColor: "#F8F8F8",
            height: 120,
            justifyContent: "center",
            borderRadius: 12,
          },
          shadowStyle,
        ]}
        onTouchStart={() => handleCloseDropdown()}
      >
        <TouchableOpacity
          onPress={() => handleDropdownOptionSelect(selectedItem, "Option 1")}
        >
          <View
            borderBottomWidth="1"
            borderColor="rgba(193, 199, 214, 0.50)"
            py="2"
          >
            <Text textAlign="center" fontSize="8" fontFamily="Inter-Regular">
              Acknowledge Order
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDropdownOptionSelect(selectedItem, "Option 2")}
        >
          <View
            borderBottomWidth="1"
            borderColor="rgba(193, 199, 214, 0.50)"
            py="2"
          >
            <Text textAlign="center" fontSize="8" fontFamily="Inter-Regular">
              Process Order
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDropdownOptionSelect(selectedItem, "Option 3")}
        >
          <View
            borderBottomWidth="1"
            borderColor="rgba(193, 199, 214, 0.50)"
            py="2"
          >
            <Text textAlign="center" fontSize="8" fontFamily="Inter-Regular">
              Other Options
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedRow;
    return (
      <LongPressGestureHandler
        onHandlerStateChange={({ nativeEvent }) => {
          if (nativeEvent.state === State.ACTIVE) {
            handleRowPress(item.id);
          }
        }}
        minDurationMs={800}
      >
        <View
          width="95%"
          alignSelf="center"
          flexDir="row"
          alignItems="center"
          borderBottomWidth="1"
          borderColor="rgba(193, 199, 214, 0.50)"
          backgroundColor={isSelected ? "rgba(207, 207, 207, 0.15)" : "white"}
          height="60px"
        >
          <Text
            width="16%"
            color="#525252"
            fontSize="8"
            fontFamily="Inter-Regular"
          >
            {item?.date}
          </Text>
          <Text
            width="16%"
            color="#525252"
            fontSize="8"
            fontFamily="Inter-Regular"
            textAlign="center"
          >
            {item?.orderNo}
          </Text>
          <Text
            width="16%"
            color="#525252"
            fontSize="8"
            fontFamily="Inter-Regular"
            textAlign="center"
          >
            {item?.customer}
          </Text>
          <Text
            width="16%"
            color="#525252"
            fontSize="8"
            fontFamily="Inter-Regular"
            textAlign="center"
          >
            {item?.value}
          </Text>
          <Text
            width="16%"
            color="#525252"
            fontSize="8"
            fontFamily="Inter-Regular"
            textAlign="center"
          >
            {item?.carrier}
          </Text>
          <Text
            width="16%"
            color="#525252"
            fontSize="8"
            fontFamily="Inter-Regular"
            textAlign="center"
          >
            {item?.shipDate}
          </Text>
        </View>
      </LongPressGestureHandler>
    );
  };

  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <View mb="2">
            <Text fontSize="20" fontFamily="Inter-Bold">
              Sales Order
            </Text>
          </View>

          <View flexDir="row" alignItems="center">
            <Pressable onPress={() => setActiveTab("API Orders")}>
              <View
                width="80px"
                height="30px"
                borderRadius="12"
                backgroundColor={
                  activeTab === "API Orders" ? "#27C9A9" : "white"
                }
                borderColor={
                  activeTab === "API Orders"
                    ? "none"
                    : "rgba(193, 199, 214, 0.50)"
                }
                borderWidth={activeTab === "API Orders" ? "0" : "1"}
                justifyContent="center"
                alignItems="center"
                mr="2"
              >
                <Text
                  fontSize="8"
                  fontFamily="Inter-Bold"
                  color={
                    activeTab === "API Orders"
                      ? "white"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                >
                  API Orders
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setActiveTab("Manual Orders")}>
              <View
                width="90px"
                height="30px"
                borderRadius="12"
                backgroundColor={
                  activeTab === "Manual Orders" ? "#27C9A9" : "white"
                }
                borderColor={
                  activeTab === "Manual Orders"
                    ? "none"
                    : "rgba(193, 199, 214, 0.50)"
                }
                borderWidth={activeTab === "Manual Orders" ? "0" : "1"}
                justifyContent="center"
                alignItems="center"
                mr="2"
              >
                <Text
                  fontSize="8"
                  fontFamily="Inter-Bold"
                  color={
                    activeTab === "Manual Orders"
                      ? "white"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                >
                  Manual Orders
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setActiveTab("Create Order")}>
              <View
                width="80px"
                height="30px"
                borderRadius="12"
                backgroundColor={
                  activeTab === "Create Order" ? "#27C9A9" : "white"
                }
                borderColor={
                  activeTab === "Create Order"
                    ? "none"
                    : "rgba(193, 199, 214, 0.50)"
                }
                borderWidth={activeTab === "Create Order" ? "0" : "1"}
                justifyContent="center"
                alignItems="center"
                mr="2"
              >
                <Text
                  fontSize="8"
                  fontFamily="Inter-Bold"
                  color={
                    activeTab === "Create Order"
                      ? "white"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                >
                  Create Order
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setActiveTab("Replacement Parts")}>
              <View
                width="90px"
                height="30px"
                borderRadius="12"
                backgroundColor={
                  activeTab === "Replacement Parts" ? "#27C9A9" : "white"
                }
                borderColor={
                  activeTab === "Replacement Parts"
                    ? "none"
                    : "rgba(193, 199, 214, 0.50)"
                }
                borderWidth={activeTab === "Replacement Parts" ? "0" : "1"}
                justifyContent="center"
                alignItems="center"
                mr="2"
              >
                <Text
                  fontSize="8"
                  fontFamily="Inter-Bold"
                  color={
                    activeTab === "Replacement Parts"
                      ? "white"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                >
                  Replacement Parts
                </Text>
              </View>
            </Pressable>
          </View>
        </View>

        {activeTab === "API Orders" && (
          <View backgroundColor="white" height="600px">
            <View
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              mt="2"
              mb="6"
              width="95%"
              alignSelf="center"
            >
              <View>
                <Input
                  w="155px"
                  borderRadius="12"
                  height="30px"
                  fontSize="10"
                  backgroundColor="#ffffff"
                  _focus={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(193, 199, 214, 0.35)",
                  }}
                  InputRightElement={
                    <Pressable>
                      <View mr="2">
                        <SvgXml xml={search_icon} />
                      </View>
                    </Pressable>
                  }
                  placeholder="Search"
                />
              </View>
              <View>
                <View
                  width="66px"
                  height="30px"
                  borderRadius="12"
                  backgroundColor="#27C9A9"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text color="white" fontFamily="Inter-Regular" fontSize="8">
                    Filter
                  </Text>
                </View>
              </View>
            </View>
            <View
              width="95%"
              alignSelf="center"
              flexDir="row"
              alignItems="center"
              borderBottomWidth="1"
              borderColor="rgba(193, 199, 214, 0.50)"
            >
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
              >
                Date
              </Text>
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
                textAlign="center"
              >
                Order No.
              </Text>
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
                textAlign="center"
              >
                Customer Info
              </Text>
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
                textAlign="center"
              >
                Value
              </Text>
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
                textAlign="center"
              >
                Carrier
              </Text>
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
                textAlign="center"
              >
                Ship Date
              </Text>
            </View>
            <View>
              <FlatList
                data={mockData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
              {selectedRow !== null &&
                renderDropdown(
                  mockData.find((item) => item.id === selectedRow)
                )}
              <View my="2">
                <Pagination />
              </View>
            </View>
          </View>
        )}

        {activeTab === "Manual Orders" && (
          <View backgroundColor="white" height="600px">
            <View
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              mt="2"
              mb="6"
              width="95%"
              alignSelf="center"
            >
              <View>
                <Input
                  w="155px"
                  borderRadius="12"
                  height="30px"
                  fontSize="10"
                  backgroundColor="#ffffff"
                  _focus={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(193, 199, 214, 0.35)",
                  }}
                  InputRightElement={
                    <Pressable>
                      <View mr="2">
                        <SvgXml xml={search_icon} />
                      </View>
                    </Pressable>
                  }
                  placeholder="Search"
                />
              </View>
              <View>
                <View
                  width="66px"
                  height="30px"
                  borderRadius="12"
                  backgroundColor="#27C9A9"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text color="white" fontFamily="Inter-Regular" fontSize="8">
                    Filter
                  </Text>
                </View>
              </View>
            </View>
            <View
              width="95%"
              alignSelf="center"
              flexDir="row"
              alignItems="center"
              borderBottomWidth="1"
              borderColor="rgba(193, 199, 214, 0.50)"
            >
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
              >
                Date
              </Text>
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
                textAlign="center"
              >
                Order No.
              </Text>
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
                textAlign="center"
              >
                Customer Info
              </Text>
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
                textAlign="center"
              >
                Value
              </Text>
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
                textAlign="center"
              >
                Carrier
              </Text>
              <Text
                width="16%"
                color="#525252"
                fontSize="8"
                fontFamily="Inter-SemiBold"
                textAlign="center"
              >
                Ship Date
              </Text>
            </View>
            <View>
              <FlatList
                data={mockData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
              {selectedRow !== null &&
                renderDropdown(
                  mockData.find((item) => item.id === selectedRow)
                )}
              <View my="2">
                <Pagination />
              </View>
            </View>
          </View>
        )}

        {activeTab === "Create Order" && <CreateOrder />}
      </ScrollView>
    </View>
  );
}
