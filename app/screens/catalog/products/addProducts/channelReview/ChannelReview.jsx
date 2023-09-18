import { Pressable } from "react-native";
import React from "react";
import { Image, Input, ScrollView, Text, TextArea, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { editor_close_large } from "../../productsSvg";

export default function ChannelReview({ navigation }) {
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
              Add Product: Channel Review
            </Text>
          </View>
          <View
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
            mb="4"
            mt="4"
          >
            <View>
              <Image
                source={require("../../../../../../assets/wayfair1.png")}
                resizeMode="contain"
                alt="channel"
              />
            </View>
            <View>
              <SvgXml xml={editor_close_large} />
            </View>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="2"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Master SKU
              </Text>
              <Input
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="40px"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Parent SKU"
              />
            </View>
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Product Name
              </Text>
              <Input
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="40px"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Product Name"
              />
            </View>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="2"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                SKU
              </Text>
              <Input
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="40px"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Insert SKU"
              />
            </View>
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                UPC
              </Text>
              <Input
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="40px"
                backgroundColor="#ffffff"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Channel UPC"
              />
            </View>
          </View>
          <View mb="2">
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Product Description
            </Text>
            <TextArea
              h={20}
              placeholder="Enter Product Description"
              w="100%"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="16"
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
            />
          </View>
          <View mb="2">
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Keywords
            </Text>
            <TextArea
              h={20}
              placeholder="Insert Keywords followed by enter"
              w="100%"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="16"
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
            />
          </View>
          <View mb="2">
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Features
            </Text>
            <TextArea
              h={20}
              placeholder="Insert Features followed by enter"
              w="100%"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="16"
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
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
              onPress={() => navigation.navigate("CatalogAddProductReview")}
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
