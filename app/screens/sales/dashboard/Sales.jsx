import React from "react";
import { ScrollView, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";
import { export_icon } from "../salesSvgs";
import Chart from "../../../components/charts/chart";
import { Dimensions } from "react-native";
import { shadowStyle } from "../../../globalStyles/Styles";
import mockData from "../../../static/salesOverviewData";
import { FlatList } from "react-native-gesture-handler";

export default function Sales() {
  const screenWidth = Dimensions.get("window").width;
  const blockWidth = screenWidth - 20;

  const renderItem = ({ item }) => {
    return (
      <View
        flexDir="row"
        alignItems="center"
        borderBottomWidth="1"
        borderBottomColor="rgba(193, 199, 214, 0.50)"
        py="6"
        key={item?.id}
      >
        <Text width="20%" fontFamily="Inter-Regular" fontSize="8">
          {item?.date}
        </Text>
        <Text
          width="20%"
          fontFamily="Inter-Regular"
          fontSize="8"
          textAlign="center"
        >
          {item?.orderNo}
        </Text>
        <Text
          width="20%"
          fontFamily="Inter-Regular"
          fontSize="8"
          textAlign="center"
        >
          {item?.customer}
        </Text>
        <Text
          width="20%"
          fontFamily="Inter-Regular"
          fontSize="8"
          textAlign="center"
        >
          {item?.paymentStatus}
        </Text>
        <Text
          width="20%"
          fontFamily="Inter-Regular"
          fontSize="8"
          textAlign="center"
        >
          {item?.totalAmount}
        </Text>
      </View>
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
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular">
              Product Channel
            </Text>
            <Select
              width="360px"
              height="40px"
              borderRadius="12"
              fontSize="8"
              borderWidth="2"
              borderColor="rgba(193, 199, 214, 0.35);"
              accessibilityLabel="Create Location"
              placeholder="Select Product Channel"
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

          <View
            mt="2"
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <View
              width="103px"
              height="82px"
              borderRadius="19"
              backgroundColor="#27C9A9"
              justifyContent="center"
              alignItems="center"
              style={shadowStyle}
            >
              <Text fontSize="10" fontFamily="Inter-SemiBold" color="white">
                Total Sales
              </Text>
            </View>
            <View
              width="103px"
              height="82px"
              borderRadius="19"
              backgroundColor="#F0D262"
              justifyContent="center"
              alignItems="center"
              style={shadowStyle}
            >
              <Text fontSize="10" fontFamily="Inter-SemiBold" color="white">
                Bulk Upload
              </Text>
            </View>
            <View
              width="103px"
              height="82px"
              borderRadius="19"
              backgroundColor="#525252"
              justifyContent="center"
              alignItems="center"
              style={shadowStyle}
            >
              <View flexDir="row" alignItems="center">
                <View mr="1">
                  <SvgXml xml={export_icon} />
                </View>
                <Text fontSize="10" fontFamily="Inter-SemiBold" color="white">
                  Export
                </Text>
              </View>
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View flexDir="row">
              <View mr="2" style={shadowStyle}>
                <Chart />
              </View>
              <View
                width={blockWidth}
                height="310px"
                borderRadius="19"
                backgroundColor="#27C9A9"
                p="4"
                mt="20px"
              >
                <View mb="12">
                  <View flexDir="row" justifyContent="space-between">
                    <View>
                      <Text
                        color="white"
                        fontSize="10"
                        fontFamily="Inter-SemiBold"
                      >
                        Gross
                      </Text>
                      <Text
                        color="white"
                        fontSize="16"
                        fontFamily="Inter-SemiBold"
                      >
                        Today’s Earnings
                      </Text>
                    </View>
                    <View>
                      <Select
                        width="90px"
                        height="28px"
                        borderRadius="19"
                        fontSize="8"
                        borderWidth="2"
                        borderColor="rgba(193, 199, 214, 0.35);"
                        backgroundColor="white"
                        accessibilityLabel="Create Location"
                        placeholder="Weekly"
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
                  </View>
                  <View mt="0">
                    <Text color="white" fontSize="32" fontFamily="Inter-Bold">
                      $ 42,765.23
                    </Text>
                  </View>
                </View>
                <View>
                  <View>
                    <View>
                      <Text
                        color="white"
                        fontSize="10"
                        fontFamily="Inter-SemiBold"
                      >
                        Net
                      </Text>
                      <Text
                        color="white"
                        fontSize="16"
                        fontFamily="Inter-SemiBold"
                      >
                        Today’s Earnings
                      </Text>
                    </View>
                  </View>
                  <View mt="0">
                    <Text color="white" fontSize="32" fontFamily="Inter-Bold">
                      $ 19,282.96
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>

          <View mt="4" mb="8">
            <View
              width={blockWidth}
              height="296px"
              borderWidth="1"
              borderColor="rgba(207, 207, 207, 0.25)"
              borderRadius="19"
              backgroundColor="white"
              p="2"
            >
              <View
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
                mb="2"
              >
                <Text>Sales Overview</Text>
                <Select
                  width="70px"
                  height="28px"
                  borderRadius="12"
                  fontSize="8"
                  borderWidth="2"
                  borderColor="rgba(193, 199, 214, 0.35);"
                  backgroundColor="white"
                  accessibilityLabel="Create Location"
                  placeholder="Weekly"
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
                <Select
                  width="70px"
                  height="28px"
                  borderRadius="12"
                  fontSize="8"
                  borderWidth="2"
                  borderColor="rgba(193, 199, 214, 0.35);"
                  backgroundColor="white"
                  accessibilityLabel="Create Location"
                  placeholder="Weekly"
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
                <Select
                  width="70px"
                  height="28px"
                  borderRadius="12"
                  fontSize="8"
                  borderWidth="2"
                  borderColor="rgba(193, 199, 214, 0.35);"
                  backgroundColor="white"
                  accessibilityLabel="Create Location"
                  placeholder="Weekly"
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
              <View
                flexDir="row"
                alignItems="center"
                borderBottomWidth="1"
                borderBottomColor="rgba(193, 199, 214, 0.50)"
              >
                <Text width="20%" fontFamily="Inter-SemiBold" fontSize="8">
                  Date
                </Text>
                <Text
                  width="20%"
                  fontFamily="Inter-SemiBold"
                  fontSize="8"
                  textAlign="center"
                >
                  Order No
                </Text>
                <Text
                  width="20%"
                  fontFamily="Inter-SemiBold"
                  fontSize="8"
                  textAlign="center"
                >
                  Customer
                </Text>
                <Text
                  width="20%"
                  fontFamily="Inter-SemiBold"
                  fontSize="8"
                  textAlign="center"
                >
                  Payment Status
                </Text>
                <Text
                  width="20%"
                  fontFamily="Inter-SemiBold"
                  fontSize="8"
                  textAlign="center"
                >
                  Total Amount
                </Text>
              </View>
              <FlatList
                data={mockData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
