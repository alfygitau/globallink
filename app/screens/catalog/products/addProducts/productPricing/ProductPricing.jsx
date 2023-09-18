import { Pressable } from "react-native";
import React from "react";
import { Input, ScrollView, Select, Text, View } from "native-base";
import { dropdown_icon } from "../../../promotions/promotionsSvgs";
import { SvgXml } from "react-native-svg";
import { dash_symbol_icon, tooltip_icon } from "../../productsSvg";
import { LinearGradient } from "expo-linear-gradient";

export default function ProductPricing({ navigation }) {
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <View mb="4">
            <Text fontSize="20" fontWeight="bold" fontFamily="Inter-Regular">
              Add Product: Pricing
            </Text>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="6"
          >
            <View>
              <View flexDir="row" alignItems="center" mb="5px">
                <Text
                  fontSize="10"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                  mr="6"
                >
                  First Cost
                </Text>
                <View>
                  <SvgXml xml={tooltip_icon} />
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
                placeholder="Enter First Cost"
              />
            </View>
            <View>
              <Text
                fontSize="10"
                fontFamily="Inter-Regular"
                fontWeight="400"
                mb="5px"
              >
                Product Channel
              </Text>
              <Select
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="40px"
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
            mb="6"
          >
            <View>
              <View flexDir="row" alignItems="center" mb="5px">
                <Text
                  fontSize="10"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                  mr="6"
                >
                  MarketPlace fee
                </Text>
                <View>
                  <SvgXml xml={tooltip_icon} />
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
                placeholder="Channel Fee (ie. 15%)"
              />
            </View>
            <View>
              <View flexDir="row" alignItems="center" mb="5px">
                <Text
                  fontSize="10"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                  mr="6"
                >
                  Global Link Fee
                </Text>
                <View>
                  <SvgXml xml={tooltip_icon} />
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
                placeholder="3%"
              />
            </View>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="6"
          >
            <View>
              <View flexDir="row" alignItems="center" mb="5px">
                <Text
                  fontSize="10"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                  mr="6"
                >
                  Returns
                </Text>
                <View>
                  <SvgXml xml={tooltip_icon} />
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
                placeholder="Returns Percentage (ie. 5%)"
              />
            </View>
            <View>
              <View flexDir="row" alignItems="center" mb="5px">
                <Text
                  fontSize="10"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                  mr="6"
                >
                  Overhead
                </Text>
                <View>
                  <SvgXml xml={tooltip_icon} />
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
                placeholder="Enter Overhead Cost"
              />
            </View>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="6"
          >
            <View>
              <View flexDir="row" alignItems="center" mb="5px">
                <Text
                  fontSize="10"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                  mr="6"
                >
                  Warehouse
                </Text>
                <View>
                  <SvgXml xml={tooltip_icon} />
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
                placeholder="Enter Marketing Cost"
              />
            </View>
            <View>
              <View flexDir="row" alignItems="center" mb="5px">
                <Text
                  fontSize="10"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                  mr="6"
                >
                  Marketing
                </Text>
                <View>
                  <SvgXml xml={tooltip_icon} />
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
                placeholder="Enter Marketing Cost"
              />
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View flexDir="row">
              <View width="143" height="95px" borderRadius="10" mr="4">
                <LinearGradient
                  style={{ flex: 1, borderRadius: 10, paddingVertical: 4 }}
                  colors={[
                    "rgba(47, 127, 132, 1) 2.60%",
                    "rgba(39, 201, 169, 1) 43.23%)",
                  ]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                >
                  <View
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="90%"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="bold">
                      iStock
                    </Text>
                    <SvgXml xml={dash_symbol_icon} />
                  </View>
                  <View
                    width="90%"
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottomWidth="1"
                    borderBottomColor="white"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="400">
                      First Cost
                    </Text>
                    <Text color="white" fontSize="10" fontWeight="400">
                      $ 10.00
                    </Text>
                  </View>
                  <View
                    width="90%"
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottomWidth="1"
                    borderBottomColor="white"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="400">
                      First Cost
                    </Text>
                    <Text color="white" fontSize="10" fontWeight="400">
                      $ 10.00
                    </Text>
                  </View>
                  <View
                    width="90%"
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottomWidth="1"
                    borderBottomColor="white"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="400">
                      First Cost
                    </Text>
                    <Text color="white" fontSize="10" fontWeight="400">
                      $ 10.00
                    </Text>
                  </View>
                </LinearGradient>
              </View>
              <View width="143" height="268px" borderRadius="10" mr="4">
                <LinearGradient
                  style={{ flex: 1, borderRadius: 10, paddingVertical: 4 }}
                  colors={[
                    "rgba(47, 127, 132, 1) 2.60%",
                    "rgba(39, 201, 169, 1) 43.23%)",
                  ]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                >
                  <View
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="90%"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="bold">
                      Master
                    </Text>
                    <SvgXml xml={dash_symbol_icon} />
                  </View>
                  <View
                    width="90%"
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottomWidth="1"
                    borderBottomColor="white"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="400">
                      First Cost
                    </Text>
                    <Text color="white" fontSize="10" fontWeight="400">
                      $ 10.00
                    </Text>
                  </View>
                  <View
                    width="90%"
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottomWidth="1"
                    borderBottomColor="white"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="400">
                      First Cost
                    </Text>
                    <Text color="white" fontSize="10" fontWeight="400">
                      $ 10.00
                    </Text>
                  </View>
                  <View
                    width="90%"
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottomWidth="1"
                    borderBottomColor="white"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="400">
                      First Cost
                    </Text>
                    <Text color="white" fontSize="10" fontWeight="400">
                      $ 10.00
                    </Text>
                  </View>
                </LinearGradient>
              </View>
              <View width="143" height="95px" borderRadius="10" mr="4">
                <LinearGradient
                  style={{ flex: 1, borderRadius: 10, paddingVertical: 4 }}
                  colors={[
                    "rgba(47, 127, 132, 1) 2.60%",
                    "rgba(39, 201, 169, 1) 43.23%)",
                  ]}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                >
                  <View
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="90%"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="bold">
                      iStock
                    </Text>
                    <SvgXml xml={dash_symbol_icon} />
                  </View>
                  <View
                    width="90%"
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottomWidth="1"
                    borderBottomColor="white"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="400">
                      First Cost
                    </Text>
                    <Text color="white" fontSize="10" fontWeight="400">
                      $ 10.00
                    </Text>
                  </View>
                  <View
                    width="90%"
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottomWidth="1"
                    borderBottomColor="white"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="400">
                      First Cost
                    </Text>
                    <Text color="white" fontSize="10" fontWeight="400">
                      $ 10.00
                    </Text>
                  </View>
                  <View
                    width="90%"
                    flexDir="row"
                    justifyContent="space-between"
                    alignItems="center"
                    borderBottomWidth="1"
                    borderBottomColor="white"
                    alignSelf="center"
                  >
                    <Text color="white" fontSize="10" fontWeight="400">
                      First Cost
                    </Text>
                    <Text color="white" fontSize="10" fontWeight="400">
                      $ 10.00
                    </Text>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </ScrollView>
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
            <Pressable
              onPress={() => navigation.navigate("CatalogAddProductImages")}
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
      </ScrollView>
    </View>
  );
}
