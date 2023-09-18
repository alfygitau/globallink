import { Pressable } from "react-native";
import React from "react";
import { Image, ScrollView, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../../promotions/promotionsSvgs";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import {
  heavy_plus_sign,
  arrow_right_icon,
  arrow_left_icon,
  accordion_icon,
} from "../../productsSvg";

export default function ProductReview() {
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
              Add Product: Product Review
            </Text>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="1"
            mt="3"
          >
            <View>
              <Select
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="30px"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Variation"
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
              <Select
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="30px"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Product Channel"
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
            width="100%"
            alignSelf="center"
          >
            <Text
              color="rgba(82, 82, 82, 0.50)"
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="semibold"
            >
              D33443
            </Text>
            <Text
              color="rgba(82, 82, 82, 0.50)"
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="semibold"
            >
              33987902221
            </Text>
          </View>
          <View>
            <Text
              color="#525252"
              fontSize="24"
              fontFamily="Inter-Regular"
              fontWeight="semibold"
            >
              Marballo Black Dining Chair
            </Text>
          </View>
          <View width="356" height="206px" borderRadius="16">
            <Image
              alt="product"
              source={require("../../../../../../assets/table.png")}
              resizeMode="contain"
            />
          </View>
          <View flexDir="row" mt="3" mb="3" alignSelf="center">
            <View alignItems="center" justifyContent="center" mr="3">
              <SvgXml xml={arrow_left_icon} />
            </View>
            <View width="80%" alignSelf="center">
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  width="53px"
                  height="49px"
                  borderRadius="12"
                  borderWidth="2"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  mr="3"
                >
                  <Image
                    alt="product"
                    source={require("../../../../../../assets/dinning.png")}
                    style={{ width: 53, height: 44, borderRadius: 12 }}
                    resizeMode="contain"
                  />
                </View>
                <View
                  width="53px"
                  height="49px"
                  borderRadius="12"
                  borderWidth="4"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  borderStyle="dashed"
                  alignItems="center"
                  justifyContent="center"
                  mr="3"
                >
                  <SvgXml xml={heavy_plus_sign} />
                </View>
                <View
                  width="53px"
                  height="49px"
                  borderRadius="12"
                  borderWidth="4"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  borderStyle="dashed"
                  alignItems="center"
                  justifyContent="center"
                  mr="3"
                >
                  <SvgXml xml={heavy_plus_sign} />
                </View>
                <View
                  width="53px"
                  height="49px"
                  borderRadius="12"
                  borderWidth="4"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  borderStyle="dashed"
                  alignItems="center"
                  justifyContent="center"
                  mr="3"
                >
                  <SvgXml xml={heavy_plus_sign} />
                </View>
                <View
                  width="53px"
                  height="49px"
                  borderRadius="12"
                  borderWidth="4"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  borderStyle="dashed"
                  alignItems="center"
                  justifyContent="center"
                  mr="3"
                >
                  <SvgXml xml={heavy_plus_sign} />
                </View>
                <View
                  width="53px"
                  height="49px"
                  borderRadius="12"
                  borderWidth="4"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  borderStyle="dashed"
                  alignItems="center"
                  justifyContent="center"
                  mr="3"
                >
                  <SvgXml xml={heavy_plus_sign} />
                </View>
              </ScrollView>
            </View>
            <View alignItems="center" justifyContent="center" ml="3">
              <SvgXml xml={arrow_right_icon} />
            </View>
          </View>
          <View>
            <Collapse isExpanded={true}>
              <CollapseHeader>
                <View
                  flexDir="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    fontSize="10"
                    fontFamily="Inter-Regular"
                    fontWeight="bold"
                  >
                    Product Price
                  </Text>
                  <View>
                    <SvgXml xml={accordion_icon} />
                  </View>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View flexDir="row" alignItems="center" mb="4" mt="4">
                  <View flexDir="row" alignItems="center" mr="10">
                    <Text
                      mr="2"
                      color="rgba(82, 82, 82, 0.50)"
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="500"
                    >
                      Wholesale
                    </Text>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="bold"
                    >
                      $ 95.00
                    </Text>
                  </View>
                  <View flexDir="row" alignItems="center">
                    <Text
                      mr="2"
                      color="rgba(82, 82, 82, 0.50)"
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="500"
                    >
                      MSRP
                    </Text>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="bold"
                    >
                      $ 199.00
                    </Text>
                  </View>
                </View>
                <View flexDir="row" alignItems="center">
                  <View flexDir="row" alignItems="center" mr="10">
                    <Text
                      mr="2"
                      color="rgba(82, 82, 82, 0.50)"
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="500"
                    >
                      Container
                    </Text>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="bold"
                    >
                      $ 70.00
                    </Text>
                  </View>
                  <View flexDir="row" alignItems="center">
                    <Text
                      mr="2"
                      color="rgba(82, 82, 82, 0.50)"
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="500"
                    >
                      Retail
                    </Text>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="bold"
                    >
                      $ 149.00
                    </Text>
                  </View>
                </View>
              </CollapseBody>
            </Collapse>
          </View>
          <View mt="4">
            <Collapse isExpanded={true}>
              <CollapseHeader>
                <View
                  flexDir="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    fontSize="10"
                    fontFamily="Inter-Regular"
                    fontWeight="bold"
                  >
                    Description
                  </Text>
                  <View>
                    <SvgXml xml={accordion_icon} />
                  </View>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <Text
                  color="rgba(82, 82, 82, 0.50)"
                  fontSize="10"
                  fontFamily="Inter-Regular"
                  fontWeight="500"
                >
                  Indulge in luxurious dining with this stunning black leather
                  dining chair. Crafted from the finest quality leather, this
                  chair is both stylish and comfortable. The sleek black color
                  adds a touch of elegance to any dining space, while the sturdy
                  frame provides ample support for even the longest of meals
                </Text>
              </CollapseBody>
            </Collapse>
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
            <Pressable>
              <View
                width="146"
                height="31px"
                borderRadius="19"
                backgroundColor="#27C9A9"
                justifyContent="center"
                alignItems="center"
              >
                <Text color="white" fontSize="13" fontWeight="400">
                  Complete
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
