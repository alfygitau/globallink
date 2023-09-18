import { Dimensions, Platform, Pressable } from "react-native";
import React from "react";
import { Input, Text, View } from "native-base";

export default function CustomerLocation({
  locationDetails,
  setLocationDetails,
  handleCreateCustomer,
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
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Title
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={locationDetails.title}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({ ...prev, title: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Title"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              City
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={locationDetails.city}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({ ...prev, city: text }))
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
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Address #1
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={locationDetails.address_1}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({ ...prev, address_1: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Address"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              State
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={locationDetails.state}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({ ...prev, state: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter State"
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
              Address #2
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={locationDetails.address_2}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({ ...prev, address_2: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Address"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Country
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={locationDetails.country}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({ ...prev, country: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Country"
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
              Contact
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={locationDetails.contact}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({ ...prev, contact: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Contact"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Phone
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={locationDetails.phone}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({ ...prev, phone: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Phone"
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
              Email
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              keyboardType="email-address"
              value={locationDetails.email}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({ ...prev, email: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Email"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Postal Code
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={locationDetails.postal_code}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({ ...prev, postal_code: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Phone"
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
              Location Minimum Inventory
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              keyboardType="numeric"
              value={locationDetails.inventory_minimum}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({
                  ...prev,
                  inventory_minimum: text,
                }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="10"
            />
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Location Maximum Inventory
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={locationDetails.inventory_maximum}
              onChangeText={(text) =>
                setLocationDetails((prev) => ({
                  ...prev,
                  inventory_maximum: text,
                }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="1000"
            />
          </View>
        </View>
      </View>

      <View mb="40px" alignSelf="center">
        <Pressable onPress={handleCreateCustomer}>
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
              Create Customer
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
