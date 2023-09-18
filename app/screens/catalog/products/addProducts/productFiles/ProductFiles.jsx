import { Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Image, Input, ScrollView, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../../promotions/promotionsSvgs";
import {
  arrow_left_icon,
  arrow_right_icon,
  delete_inactive_icon,
  heavy_plus_sign,
  photo_image,
  product_tick_icon,
  product_video_icon,
  upload_icon,
  upload_icon_two,
} from "../../productsSvg";
import mockData from "../../../../../static/catalogImageData";
import { FlatList } from "react-native-gesture-handler";

export default function ProductFiles({ navigation }) {
  const [activeTab, setActiveTab] = useState("Add");
  console.log(activeTab);

  const renderImageCard = ({ item }) => (
    <View>
      <View width="340" alignSelf="center">
        <Text fontSize="12" fontFamily="Inter-Regular" fontWeight="400">
          Primary Image
        </Text>
      </View>
      <View
        width="340"
        height="70px"
        borderWidth="2"
        borderColor="rgba(193, 199, 214, 0.35)"
        borderRadius="12"
        alignSelf="center"
        backgroundColor="white"
        flexDir="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <View
          width="46px"
          height="46px"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            source={require("../../../../../../assets/dinning.png")}
            resizeMode="cover"
            alt="product"
          />
        </View>
        <View>
          <Text fontSize="15" fontFamily="Inter-Regular" fontWeight="400">
            G22785.WB.jpg
          </Text>
          <View flexDir="row" alignSelf="center">
            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontSize="12"
              fontFamily="Inter-Regular"
              fontWeight="400"
            >
              500 KB
            </Text>
            <Text
              mr="2"
              color="rgba(0, 0, 0, 0.50)"
              fontSize="12"
              fontFamily="Inter-Regular"
              fontWeight="400"
            >
              1000 x 1000
            </Text>
          </View>
        </View>
        <View>
          <SvgXml xml={delete_inactive_icon} />
        </View>
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
          <View mb="2">
            <Text fontSize="20" fontWeight="bold" fontFamily="Inter-Regular">
              Add Product: Files
            </Text>
          </View>
          <View flexDir="row" mb="3" justifyContent="space-between">
            <TouchableOpacity onPress={() => setActiveTab("Add")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth={activeTab === "Add" ? "0" : "2"}
                backgroundColor={activeTab === "Add" ? "#27C9A9" : "#ffffff"}
                borderColor={
                  activeTab === "Add" ? "none" : "rgba(193, 199, 214, 0.35)"
                }
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  color={
                    activeTab === "Add"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Add
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Preview")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth="2"
                borderColor={
                  activeTab === "Preview" ? "none" : "rgba(193, 199, 214, 0.35)"
                }
                backgroundColor={
                  activeTab === "Preview" ? "#27C9A9" : "#ffffff"
                }
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  color={
                    activeTab === "Preview"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Preview
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <Select
                width="171"
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

          {activeTab === "Add" && (
            <>
              <View alignSelf="center" mt="2" mb="1">
                <View
                  width="358"
                  height="176px"
                  borderWidth="4"
                  borderStyle="dashed"
                  borderRadius="19"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  backgroundColor="rgba(193, 199, 214, 0.15)"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    alt="product"
                    source={require("../../../../../../assets/samplefile.png")}
                    width="88"
                    height="73px"
                    resizeMode="contain"
                  />
                  <View flexDir="row" alignItems="center">
                    <View mr="2">
                      <SvgXml xml={upload_icon_two} />
                    </View>
                    <Text
                      color="rgba(0, 0, 0, 0.50)"
                      fontWeight="400"
                      fontFamily="Inter-Regular"
                      fontSize="10"
                    >
                      Drop your template here. or <Text>Browse</Text>
                    </Text>
                  </View>
                </View>
              </View>
              <View flexDir="row" width="95%" alignSelf="center" mb="1">
                <Text
                  mr="2"
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="8"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                >
                  1000 x 1000
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="8"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                >
                  500 KB
                </Text>
              </View>
              <View flexDir="row" mb="2" justifyContent="space-between">
                <Select
                  width="143"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  height="34px"
                  borderRadius="12"
                  fontSize="10"
                  accessibilityLabel="Sales Data"
                  placeholder="Select Video Type"
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
                <View
                  width="91"
                  height="34px"
                  backgroundColor="#27C9A9"
                  borderRadius="12"
                  justifyContent="center"
                  alignItems="center"
                >
                  <SvgXml xml={product_tick_icon} />
                </View>
              </View>
            </>
          )}

          {activeTab === "Preview" && (
            <View alignSelf="center">
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
                      borderWidth="1"
                      borderColor="rgba(193, 199, 214, 0.50)"
                      mr="3"
                    >
                      <Image
                        alt="product"
                        source={require("../../../../../../assets/samplefile.png")}
                        style={{
                          width: 53,
                          height: 49,
                          borderRadius: 12,
                          resizeMode: "contain",
                        }}
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
            </View>
          )}

          <View
            borderBottomWidth="2"
            borderColor="rgba(193, 199, 214, 0.50)"
            mt="4"
            mb="4"
          />
          {/* image lists */}
          <View height="230px">
            <FlatList
              data={mockData}
              renderItem={renderImageCard}
              keyExtractor={(item) => item.id.toString()}
            />
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
            <Pressable
              onPress={() =>
                navigation.navigate("CatalogAddProductChannelReview")
              }
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
