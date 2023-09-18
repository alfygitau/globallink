import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, ScrollView, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { ColorPicker } from "react-native-color-picker";
import {
  add_custom_icon,
  contact_icon,
  crown_icon,
  crown_white_icon,
  tick_icon,
  white_tick,
} from "./customizeSvgs";

export default function Customize() {
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="100%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <View mb="4" width="90%" alignSelf="center" mt="2">
            <Text fontFamily="Inter-Regular" fontSize="20" fontWeight="600">
              Customization
            </Text>
          </View>
          <View
            width="100%"
            height="185px"
            backgroundColor="#ffffff"
            alignSelf="center"
            borderWidth="1"
            borderColor="rgba(207, 207, 207, 0.25)"
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              alignSelf="center"
            >
              <View flexDir="row" alignItems="center" paddingX="4">
                <View mr="4">
                  <Text
                    mb="2"
                    fontSize="12"
                    fontWeight="600"
                    fontFamily="Inter-Regular"
                  >
                    White Background Logo
                  </Text>
                  <View
                    width="159px"
                    height="95px"
                    backgroundColor="#F4F4F4"
                    borderRadius="19"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                  >
                    <SvgXml xml={contact_icon} />
                    <View position="absolute" top="2" right="2">
                      <SvgXml xml={tick_icon} />
                    </View>
                  </View>
                </View>
                <View mr="4">
                  <Text
                    mb="2"
                    fontSize="12"
                    fontWeight="600"
                    fontFamily="Inter-Regular"
                  >
                    Create New
                  </Text>
                  <View
                    width="159px"
                    height="95px"
                    backgroundColor="#F4F4F4"
                    borderRadius="19"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                  >
                    <SvgXml xml={add_custom_icon} />
                    <View position="absolute" top="2" right="2">
                      <SvgXml xml={tick_icon} />
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    mb="2"
                    fontSize="12"
                    fontWeight="600"
                    fontFamily="Inter-Regular"
                  >
                    Create New
                  </Text>
                  <View
                    width="159px"
                    height="95px"
                    backgroundColor="#F4F4F4"
                    borderRadius="19"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                  >
                    <SvgXml xml={add_custom_icon} />
                    <View position="absolute" top="2" right="2">
                      <SvgXml xml={tick_icon} />
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View
            width="100%"
            height="185px"
            backgroundColor="#ffffff"
            alignSelf="center"
            borderWidth="1"
            borderColor="rgba(207, 207, 207, 0.25)"
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              alignSelf="center"
            >
              <View flexDir="row" alignItems="center" width="100%" paddingX="4">
                <View mr="4">
                  <Text
                    mb="2"
                    fontSize="12"
                    fontWeight="600"
                    fontFamily="Inter-Regular"
                  >
                    White Background Logo
                  </Text>
                  <View
                    width="159px"
                    height="95px"
                    backgroundColor="#27C9A9"
                    borderRadius="19"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                  >
                    <SvgXml xml={crown_icon} />
                    <View position="absolute" top="2" right="2">
                      <SvgXml xml={tick_icon} />
                    </View>
                  </View>
                </View>
                <View mr="4">
                  <Text
                    mb="2"
                    fontSize="12"
                    fontWeight="600"
                    fontFamily="Inter-Regular"
                  >
                    Default #1
                  </Text>
                  <View
                    width="159px"
                    height="95px"
                    backgroundColor="#F0D262"
                    borderRadius="19"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                  >
                    <SvgXml xml={crown_white_icon} />
                    <View position="absolute" top="2" right="2">
                      <SvgXml xml={white_tick} />
                    </View>
                  </View>
                </View>
                <View>
                  <Text
                    mb="2"
                    fontSize="12"
                    fontWeight="600"
                    fontFamily="Inter-Regular"
                  >
                    Default #1
                  </Text>
                  <View
                    width="159px"
                    height="95px"
                    backgroundColor="#F0D262"
                    borderRadius="19"
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                  >
                    <SvgXml xml={crown_white_icon} />
                    <View position="absolute" top="2" right="2">
                      <SvgXml xml={white_tick} />
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
          <View
            backgroundColor="white"
            width="100%"
            borderColor="rgba(207, 207, 207, 0.25)"
            borderWidth="1"
          >
            <View
              width="70%"
              height="298"
              backgroundColor="white"
              alignSelf="center"
            >
              <ColorPicker
                onColorSelected={(color) => setSelectedColor(color)}
                style={{ flex: 1 }}
              />
              <View flexDir="row" my="4" alignItems="center">
                <Text mr="8">Hex Code</Text>
                <View
                  width="160"
                  height="8"
                  borderWidth="1"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderRadius="19"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text>{selectedColor}</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View
              alignSelf="center"
              alignItems="center"
              justifyContent="center"
              width="146px"
              backgroundColor="rgba(39, 201, 169, 1)"
              height="31px"
              borderRadius="19"
              my="6"
            >
              <Text color="white">Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
