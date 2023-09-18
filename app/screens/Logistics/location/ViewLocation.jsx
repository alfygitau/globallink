import {} from "react-native";
import React from "react";
import { Image, ScrollView, Text, View } from "native-base";
import { FlatList } from "react-native-gesture-handler";
import mockData from "../../../static/warehouseLocationData";

export default function ViewLocation() {
  const renderLocationHeaders = () => (
    <View
      flexDir="row"
      alignItems="center"
      borderBottomWidth="1"
      borderColor="rgba(193, 199, 214, 0.50)"
      mt="3"
    >
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
      >
        Image
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        Name
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        ONH
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        First Cost
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        Wholesale
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        Allocated
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        Cube
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        Value
      </Text>
    </View>
  );

  const renderWarehousePaymentHeaders = () => (
    <View
      flexDir="row"
      alignItems="center"
      borderBottomWidth="1"
      borderColor="rgba(193, 199, 214, 0.50)"
    >
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Bold"
        width="16%"
        textAlign="left"
      >
        In Fee
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Bold"
        width="16%"
        textAlign="center"
      >
        Out Fee
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Bold"
        width="16%"
        textAlign="center"
      >
        Unload Fee
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Bold"
        width="16%"
        textAlign="center"
      >
        Transaction Fee
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Bold"
        width="16%"
        textAlign="center"
      >
        Storage Fee
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Bold"
        width="16%"
        textAlign="right"
      >
        SF Fee
      </Text>
    </View>
  );

  const renderWareHousePaymentData = () => (
    <View
      flexDir="row"
      alignItems="center"
      py="3"
    >
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="16%"
        textAlign="left"
      >
        32
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="16%"
        textAlign="center"
      >
        18
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="16%"
        textAlign="center"
      >
        24
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="16%"
        textAlign="center"
      >
        30
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="16%"
        textAlign="center"
      >
        15
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="16%"
        textAlign="right"
      >
        15
      </Text>
    </View>
  );

  const renderWarehouseLocation = ({ item }) => (
    <View
      flexDir="row"
      alignItems="center"
      borderBottomWidth="1"
      borderColor="rgba(193, 199, 214, 0.50)"
      height="60px"
    >
      <View
        width="12.5%"
        height="60px"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          source={{ uri: item.productImage }}
          alt="room table"
          width="40px"
          height="40px"
        />
      </View>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        {item.productName}
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        {item.ONH}
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        {item.firstCost}
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        {item.wholesaleCost}
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        {item.numberAllocated}
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        {item.cube}
      </Text>
      <Text
        color="#525252"
        fontSize="8"
        fontFamily="Inter-Regular"
        width="12.5%"
        textAlign="center"
      >
        {item.value}
      </Text>
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
          <View flexDir="row" alignItems="center">
            <View width="60%">
              <Text fontFamily="Inter-SemiRegular" fontSize="20">
                Salt Lake City
              </Text>
              <Text fontFamily="Inter-SemiBold" fontSize="20">
                Warehouse
              </Text>
              <Text
                fontSize="7"
                color="rgba(82, 82, 82, 0.50)"
                fontFamily="Inter-Regular"
              >
                1234 W 30043 S Suite 100 San Diego CA, 94032
              </Text>
              <Text
                fontSize="7"
                color="rgba(82, 82, 82, 0.50)"
                fontFamily="Inter-Regular"
              >
                Warehouse Hours: M T W TH F | 8:00AM PST - 5:00PM PST
              </Text>
            </View>
            <View width="40%">
              <View width="70%">
                <Image
                  source={require("../../../../assets/usflag.png")}
                  alt="location_flag"
                />
              </View>
            </View>
          </View>

          <View mt="2">
            <Text fontFamily="Inter-Bold" fontSize="12" fontWeight="600">
              Payment Details
            </Text>
          </View>

          <View>
            <View>{renderWarehousePaymentHeaders()}</View>
            <View>{renderWareHousePaymentData()}</View>
            <View>{renderLocationHeaders()}</View>
            <FlatList
              data={mockData}
              renderItem={renderWarehouseLocation}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
