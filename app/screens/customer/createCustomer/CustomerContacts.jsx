import { Dimensions, Platform, Pressable } from "react-native";
import React from "react";
import { Input, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { add_contact_icon } from "./customersSvgs";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";
import { languages } from "../../../static/country";

export default function CustomerContacts({
  contactDetails,
  setContactDetails,
  setActiveTab,
}) {
  const screenHeight = Dimensions.get("window").height;
  const iosHeight = Number(screenHeight) - 264;
  const androidHeight = Number(screenHeight) - 204;
  return (
    <View
      height={Platform.OS === "ios" ? iosHeight : androidHeight}
      justifyContent="space-between"
    >
      <View>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mb="2"
        >
          <View>
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              First Name
            </Text>
            <Input
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="12"
              height="40px"
              backgroundColor="#ffffff"
              fontSize="10"
              value={contactDetails.first_name}
              onChangeText={(text) =>
                setContactDetails((prev) => ({ ...prev, first_name: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter First Name"
            />
          </View>
          <View>
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              WeChat
            </Text>
            <Input
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              value={contactDetails.wechat}
              onChangeText={(text) =>
                setContactDetails((prev) => ({ ...prev, wechat: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter WeChat"
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
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              Last Name
            </Text>
            <Input
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="12"
              height="40px"
              backgroundColor="#ffffff"
              fontSize="10"
              value={contactDetails.last_name}
              onChangeText={(text) =>
                setContactDetails((prev) => ({ ...prev, last_name: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Last Name"
            />
          </View>
          <View>
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              WhatsApp
            </Text>
            <Input
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              value={contactDetails.whatsapp}
              onChangeText={(text) =>
                setContactDetails((prev) => ({ ...prev, whatsapp: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter WhatsApp"
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
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              Email
            </Text>
            <Input
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="12"
              height="40px"
              backgroundColor="#ffffff"
              value={contactDetails.email}
              onChangeText={(text) =>
                setContactDetails((prev) => ({ ...prev, email: text }))
              }
              fontSize="10"
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Email Address"
            />
          </View>
          <View>
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              Primary Language
            </Text>
            <Select
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              height="40px"
              borderRadius="12"
              fontSize="10"
              accessibilityLabel="Sales Data"
              placeholder="Select Primary Language"
              selectedValue={contactDetails.primary_language}
              onValueChange={(value) =>
                setContactDetails((prev) => ({
                  ...prev,
                  primary_language: value,
                }))
              }
              dropdownIcon={
                <View mr="2">
                  <SvgXml xml={dropdown_icon} />
                </View>
              }
            >
              {languages.map((lang) => (
                <Select.Item
                  key={lang?.code}
                  label={lang?.name}
                  value={lang?.name}
                />
              ))}
            </Select>
          </View>
        </View>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mb="2"
        >
          <View>
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              Phone Number
            </Text>
            <Input
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="12"
              height="40px"
              backgroundColor="#ffffff"
              fontSize="10"
              value={contactDetails.phone}
              onChangeText={(text) =>
                setContactDetails((prev) => ({ ...prev, phone: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Phone Number"
            />
          </View>
          <View>
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              Secondary Language
            </Text>
            <Select
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              height="40px"
              borderRadius="12"
              fontSize="10"
              accessibilityLabel="Sales Data"
              placeholder="Select Secondary Language"
              selectedValue={contactDetails.secondary_language}
              onValueChange={(value) =>
                setContactDetails((prev) => ({
                  ...prev,
                  secondary_language: value,
                }))
              }
              dropdownIcon={
                <View mr="2">
                  <SvgXml xml={dropdown_icon} />
                </View>
              }
            >
              {languages.map((lang) => (
                <Select.Item
                  key={lang?.code}
                  label={lang?.name}
                  value={lang?.name}
                />
              ))}
            </Select>
          </View>
        </View>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mt="4"
        >
          <View
            borderBottomWidth="2"
            borderColor="rgba(193, 199, 214, 0.50)"
            width="70%"
          />
          <View
            width="30%"
            flexDir="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <View>
              <Text>Add Contact</Text>
            </View>
            <View>
              <SvgXml xml={add_contact_icon} />
            </View>
          </View>
        </View>
      </View>

      <View mb="40px" alignSelf="center">
        <Pressable onPress={() => setActiveTab("Banking")}>
          <View
            width="243"
            height="31px"
            borderRadius="19"
            backgroundColor="#27C9A9"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              fontSize="13"
              color="white"
              fontFamily="Inter-Regular"
              fontWeight="400"
            >
              Next
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
