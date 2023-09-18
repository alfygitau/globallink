import {} from "react-native";
import React from "react";
import { ScrollView, Select, Text, View } from "native-base";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";
import { SvgXml } from "react-native-svg";
import { FlatList } from "react-native-gesture-handler";
import mockData from "../../../static/allocateData";
import Pagination from "../../../components/pagination/Pagination";

export default function Allocate() {
  const allocateHeaders = () => (
    <View
      flexDir="row"
      borderBottomWidth="1"
      borderColor="rgba(193, 199, 214, 0.50)"
    >
      <Text
        fontFamily="Inter-SemiBold"
        fontSize="8"
        width="25%"
        color="#525252"
      >
        Customer
      </Text>
      <Text
        fontFamily="Inter-SemiBold"
        fontSize="8"
        width="25%"
        textAlign="center"
        color="#525252"
      >
        Product
      </Text>
      <Text
        fontFamily="Inter-SemiBold"
        fontSize="8"
        width="25%"
        textAlign="center"
        color="#525252"
      >
        Quantity
      </Text>
      <Text
        fontFamily="Inter-SemiBold"
        fontSize="8"
        width="25%"
        textAlign="center"
        color="#525252"
      >
        Date Range
      </Text>
    </View>
  );

  const renderAllocate = ({ item }) => (
    <View>
      <View
        flexDir="row"
        py="5"
        borderBottomWidth="1"
        borderColor="rgba(193, 199, 214, 0.50)"
      >
        <Text fontFamily="Inter-Regular" fontSize="8" width="25%">
          {item.customer}
        </Text>
        <Text
          fontFamily="Inter-Regular"
          fontSize="8"
          width="25%"
          textAlign="center"
        >
          {item.product}
        </Text>
        <Text
          fontFamily="Inter-Regular"
          fontSize="8"
          width="25%"
          textAlign="center"
        >
          {item.quantity}
        </Text>
        <Text
          fontFamily="Inter-Regular"
          fontSize="6"
          width="25%"
          textAlign="center"
        >
          {item.dateRange.startDate} - {item.dateRange.endDate}
        </Text>
      </View>
    </View>
  );
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <View>
            <Text fontFamily="Inter-Bold" fontSize="20" fontWeight="700">
              Allocate
            </Text>
          </View>
        </View>
        <View backgroundColor="white" width="100%" mt="3">
          <View backgroundColor="white" width="95%" alignSelf="center" mb="10">
            <View mt="3">
              <Text fontSize="10" fontFamily="Inter-SemiBold">
                Create an Allocation
              </Text>
            </View>
            <View
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              mt="3"
            >
              <View>
                <Text fontFamily="Inter-Regular" fontWeight="400" fontSize="10">
                  Customer
                </Text>
                <Select
                  width="139"
                  height="40px"
                  borderRadius="12"
                  fontSize="8"
                  borderWidth="2"
                  borderColor="rgba(193, 199, 214, 0.35);"
                  accessibilityLabel="Select Customer"
                  placeholder="10 per page"
                  mt={1}
                  dropdownIcon={
                    <View mr="2">
                      <SvgXml xml={dropdown_icon} />
                    </View>
                  }
                >
                  <Select.Item label="5 per page" value="5 per page" />
                  <Select.Item label="10 per page" value="10 per page" />
                </Select>
              </View>
              <View>
                <Text fontFamily="Inter-Regular" fontWeight="400" fontSize="10">
                  Product
                </Text>
                <Select
                  width="139"
                  height="40px"
                  borderRadius="12"
                  fontSize="8"
                  borderWidth="2"
                  borderColor="rgba(193, 199, 214, 0.35);"
                  accessibilityLabel="Select Product"
                  placeholder="10 per page"
                  mt={1}
                  dropdownIcon={
                    <View mr="2">
                      <SvgXml xml={dropdown_icon} />
                    </View>
                  }
                >
                  <Select.Item label="5 per page" value="5 per page" />
                  <Select.Item label="10 per page" value="10 per page" />
                </Select>
              </View>
              <View>
                <Text fontFamily="Inter-Regular" fontWeight="400" fontSize="10">
                  Quantity
                </Text>
                <View
                  width="80px"
                  height="40px"
                  flexDir="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text>-</Text>
                  <Text>25</Text>
                  <Text>+</Text>
                </View>
              </View>
            </View>
            <View flexDir="row" mt="4">
              <View width="65%">
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontFamily="Inter-Regular"
                  fontStyle="italic"
                >
                  Selected Products
                </Text>
                <View>
                  <Text
                    color="rgba(0, 0, 0, 0.50)"
                    fontSize="8"
                    fontFamily="Inter-Regular"
                  >
                    G687332 - Marbello Table (25), G687334 - Marbello Bench (35)
                  </Text>
                </View>
              </View>
              <View width="35%">
                <View
                  width="111"
                  height="40px"
                  borderRadius="16"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="#27C9A9"
                >
                  <Text
                    fontFamily="Inter-Regular"
                    fontSize="10"
                    fontWeight="400"
                    color="white"
                  >
                    Apply Date Range
                  </Text>
                </View>
                <View
                  width="111"
                  height="40px"
                  borderRadius="16"
                  justifyContent="center"
                  alignItems="center"
                  backgroundColor="#27C9A9"
                  mt="3"
                >
                  <Text
                    fontFamily="Inter-Regular"
                    fontSize="10"
                    fontWeight="400"
                    color="white"
                  >
                    Add Product
                  </Text>
                </View>
              </View>
            </View>
            <View mt="6" alignSelf="center">
              <View
                width="199"
                height="40px"
                borderRadius="16"
                backgroundColor="#27C9A9"
                justifyContent="center"
                alignItems="center"
              >
                <Text color="white" fontSize="13" fontFamily="Inter-Regular">
                  Allocate
                </Text>
              </View>
            </View>
            <View mt="4">
              <View mb="4">
                <Text fontSize="12" fontFamily="Inter-SemiBold">
                  Allocated Products
                </Text>
              </View>
              <View>{allocateHeaders()}</View>
              <FlatList
                renderItem={renderAllocate}
                keyExtractor={(item) => item.id.toString()}
                data={mockData}
              />
            </View>
            <Pagination />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
