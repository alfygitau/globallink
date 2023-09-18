import { Dimensions, Platform, Pressable } from "react-native";
import React from "react";
import { Image, Input, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { customer_add_icon } from "./customersSvgs";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";
import { countries } from "../../../static/country";

export default function CustomerGeneralDetails({
  generalInfo,
  setGeneralInfo,
  browseLogo,
  file,
  setActiveTab
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
          width="100%"
          height="150px"
          flexDir="row"
          justifyContent="space-between"
        >
          <View>
            <View mb="4">
              <Text
                mb="1"
                fontSize="10"
                fontFamily="Inter-Regular"
                fontWeight="400"
              >
                Company Name
              </Text>
              <Input
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="40px"
                fontSize="10"
                backgroundColor="#ffffff"
                value={generalInfo.company}
                onChangeText={(text) =>
                  setGeneralInfo((prev) => ({ ...prev, company: text }))
                }
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter Company Name"
              />
            </View>
            <View>
              <Text
                mb="1"
                fontSize="10"
                fontFamily="Inter-Regular"
                fontWeight="400"
              >
                Address
              </Text>
              <Input
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                height="40px"
                fontSize="10"
                backgroundColor="#ffffff"
                value={generalInfo.address_1}
                onChangeText={(text) =>
                  setGeneralInfo((prev) => ({ ...prev, address_1: text }))
                }
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter UPC"
              />
            </View>
          </View>
          <View>
            <View>
              <Text
                mb="1"
                fontSize="10"
                fontFamily="Inter-Regular"
                fontWeight="400"
              >
                Company Logo
              </Text>
              <View
                width="181"
                height="118"
                borderWidth="2"
                borderRadius="12"
                borderColor="rgba(193, 199, 214, 0.50)"
                backgroundColor="#F3F3F3"
              >
                {file?.uri?.length > 0 ? (
                  <Pressable onPress={browseLogo}>
                    <View
                      alignItems="center"
                      justifyContent="center"
                      width="100%"
                      height="100%"
                    >
                      <Image
                        alt="product"
                        source={{ uri: file?.uri }}
                        resizeMode="contain"
                        width="90%"
                        height="90%"
                        borderRadius="19"
                      />
                    </View>
                  </Pressable>
                ) : (
                  <View position="absolute" bottom="2" right="2">
                    <Pressable onPress={browseLogo}>
                      <View
                        width="40px"
                        height="40px"
                        borderWidth="2"
                        borderStyle="dashed"
                        backgroundColor="#F3F3F3"
                        borderColor="rgba(193, 199, 214, 0.50)"
                        borderRadius="10"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <SvgXml xml={customer_add_icon} />
                      </View>
                    </Pressable>
                  </View>
                )}
              </View>
            </View>
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
              Address #2
            </Text>
            <Input
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="12"
              height="40px"
              backgroundColor="#ffffff"
              fontSize="10"
              value={generalInfo.address_2}
              onChangeText={(text) =>
                setGeneralInfo((prev) => ({ ...prev, address_2: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Apt, Suite, Building #"
            />
          </View>
          <View>
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              City
            </Text>
            <Input
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              value={generalInfo.city}
              onChangeText={(text) =>
                setGeneralInfo((prev) => ({ ...prev, city: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter City"
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
              State/Region
            </Text>
            <Input
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="12"
              height="40px"
              backgroundColor="#ffffff"
              fontSize="10"
              value={generalInfo.state}
              onChangeText={(text) =>
                setGeneralInfo((prev) => ({ ...prev, state: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="State/Region"
            />
          </View>
          <View>
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              Country
            </Text>
            <Select
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              height="40px"
              borderRadius="12"
              fontSize="10"
              accessibilityLabel="Sales Data"
              placeholder="Select Country"
              selectedValue={generalInfo.country}
              onValueChange={(value) =>
                setGeneralInfo((prev) => ({ ...prev, country: value }))
              }
              dropdownIcon={
                <View mr="2">
                  <SvgXml xml={dropdown_icon} />
                </View>
              }
            >
              {countries.map((country) => (
                <Select.Item
                  key={country?.name}
                  label={country?.name}
                  value={country?.name}
                />
              ))}
            </Select>
          </View>
        </View>
        <View mb="2">
          <View>
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mb="1"
            >
              Postal Code
            </Text>
            <Input
              w="177"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              borderRadius="12"
              height="40px"
              backgroundColor="#ffffff"
              fontSize="10"
              value={generalInfo.postal_code}
              onChangeText={(text) =>
                setGeneralInfo((prev) => ({ ...prev, postal_code: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Postal Code"
            />
          </View>
        </View>
      </View>

      <View mb="40px" alignSelf="center">
        <Pressable onPress={() => setActiveTab("Contact Info")}>
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
