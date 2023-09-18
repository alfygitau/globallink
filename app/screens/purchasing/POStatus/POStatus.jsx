import {} from "react-native";
import React from "react";
import { ScrollView, Text, View } from "native-base";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import { SvgXml } from "react-native-svg";
import { accordion_icon } from "../../catalog/products/productsSvg";
import mockData from "../../../static/poStatusData";

export default function POStatus() {
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="100%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <View
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
            width="95%"
            alignSelf="center"
            mb="3"
          >
            <Text fontFamily="Inter-Bold" fontSize="20">
              PO Status
            </Text>
            <Text fontFamily="Inter-Bold" fontSize="20">
              Value: $ 575,000{" "}
            </Text>
          </View>
          <View width="100%" mb="4">
            <Collapse isExpanded={true}>
              <CollapseHeader>
                <View
                  flexDir="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width="95%"
                  alignSelf="center"
                >
                  <Text fontSize="16" fontFamily="Inter-Bold" fontWeight="bold">
                    On Order
                  </Text>
                  <View flexDir="row" alignItems="center">
                    <Text mr="2" fontSize="10" fontFamily="Inter-SemiBold">
                      Cube: 2,400
                    </Text>
                    <Text mr="2" fontSize="10" fontFamily="Inter-SemiBold">
                      Value: $ 575,000
                    </Text>
                    <View>
                      <SvgXml xml={accordion_icon} />
                    </View>
                  </View>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View
                  width="100%"
                  backgroundColor="#27C9A9"
                  height="23px"
                  alignItems="center"
                >
                  <View
                    width="90%"
                    flexDir="row"
                    alignItems="center"
                    height="23px"
                  >
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                      >
                        Container
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                        lineHeight="10"
                      >
                        PO Number
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Created
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Partner
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Cube
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Value
                      </Text>
                    </View>
                  </View>
                </View>
                {mockData.map((item) => (
                  <View
                    width="90%"
                    flexDir="row"
                    alignItems="center"
                    height="33px"
                    alignSelf="center"
                    borderBottomWidth="1"
                    borderColor="rgba(193, 199, 214, 0.50)"
                  >
                    <View width="16%">
                      <Text fontSize="8" fontFamily="Inter-Regular">
                        {item.container}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.poNumber}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.createdAt}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.partner}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.cube}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.value}
                      </Text>
                    </View>
                  </View>
                ))}
              </CollapseBody>
            </Collapse>
          </View>
          <View width="100%" mb="4">
            <Collapse isExpanded={true}>
              <CollapseHeader>
                <View
                  flexDir="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width="95%"
                  alignSelf="center"
                >
                  <Text fontSize="16" fontFamily="Inter-Bold" fontWeight="bold">
                    In Production
                  </Text>
                  <View flexDir="row" alignItems="center">
                    <Text mr="2" fontSize="10" fontFamily="Inter-SemiBold">
                      Cube: 2,400
                    </Text>
                    <Text mr="2" fontSize="10" fontFamily="Inter-SemiBold">
                      Value: $ 575,000
                    </Text>
                    <View>
                      <SvgXml xml={accordion_icon} />
                    </View>
                  </View>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View
                  width="100%"
                  backgroundColor="#27C9A9"
                  height="23px"
                  alignItems="center"
                >
                  <View
                    width="90%"
                    flexDir="row"
                    alignItems="center"
                    height="23px"
                  >
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                      >
                        Container
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                        lineHeight="10"
                      >
                        PO Number
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Created
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Partner
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Cube
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Value
                      </Text>
                    </View>
                  </View>
                </View>
                {mockData.map((item) => (
                  <View
                    width="90%"
                    flexDir="row"
                    alignItems="center"
                    height="33px"
                    alignSelf="center"
                    borderBottomWidth="1"
                    borderColor="rgba(193, 199, 214, 0.50)"
                  >
                    <View width="16%">
                      <Text fontSize="8" fontFamily="Inter-Regular">
                        {item.container}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.poNumber}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.createdAt}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.partner}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.cube}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.value}
                      </Text>
                    </View>
                  </View>
                ))}
              </CollapseBody>
            </Collapse>
          </View>
          <View width="100%" mb="4">
            <Collapse isExpanded={true}>
              <CollapseHeader>
                <View
                  flexDir="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width="95%"
                  alignSelf="center"
                >
                  <Text fontSize="16" fontFamily="Inter-Bold" fontWeight="bold">
                    En Route
                  </Text>
                  <View flexDir="row" alignItems="center">
                    <Text mr="2" fontSize="10" fontFamily="Inter-SemiBold">
                      Cube: 2,400
                    </Text>
                    <Text mr="2" fontSize="10" fontFamily="Inter-SemiBold">
                      Value: $ 575,000
                    </Text>
                    <View>
                      <SvgXml xml={accordion_icon} />
                    </View>
                  </View>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View
                  width="100%"
                  backgroundColor="#27C9A9"
                  height="23px"
                  alignItems="center"
                >
                  <View
                    width="90%"
                    flexDir="row"
                    alignItems="center"
                    height="23px"
                  >
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                      >
                        Container
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                        lineHeight="10"
                      >
                        PO Number
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Created
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Partner
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Cube
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        color="white"
                        textAlign="center"
                      >
                        Value
                      </Text>
                    </View>
                  </View>
                </View>
                {mockData.map((item) => (
                  <View
                    width="90%"
                    flexDir="row"
                    alignItems="center"
                    height="33px"
                    alignSelf="center"
                    borderBottomWidth="1"
                    borderColor="rgba(193, 199, 214, 0.50)"
                  >
                    <View width="16%">
                      <Text fontSize="8" fontFamily="Inter-Regular">
                        {item.container}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.poNumber}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.createdAt}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.partner}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.cube}
                      </Text>
                    </View>
                    <View width="16%">
                      <Text
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        textAlign="center"
                      >
                        {item.value}
                      </Text>
                    </View>
                  </View>
                ))}
              </CollapseBody>
            </Collapse>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
