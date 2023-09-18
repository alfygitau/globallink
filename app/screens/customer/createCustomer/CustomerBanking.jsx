import { Dimensions, Platform, Pressable } from "react-native";
import React, { useState } from "react";
import { Input, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../../screens/catalog/promotions/promotionsSvgs";
import { countries } from "../../../static/country";

export default function CustomerBanking({
  bankingDetails,
  setBankingDetails,
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
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Payment Type
            </Text>
            <Select
              w="177"
              height="40px"
              borderRadius="12"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              fontSize="10"
              accessibilityLabel="Sales Data"
              placeholder="Select Payment Type"
              selectedValue={bankingDetails.payment_type}
              onValueChange={(value) =>
                setBankingDetails((prev) => ({ ...prev, payment_type: value }))
              }
              dropdownIcon={
                <View mr="2">
                  <SvgXml xml={dropdown_icon} />
                </View>
              }
            >
              <Select.Item label="ACH" value="ACH" />
              <Select.Item label="Wire Transfer" value="Wire Transfer" />
              <Select.Item label="Credit Card" value="Credit Card" />
            </Select>
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Bank Address
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={bankingDetails.bank_address}
              onChangeText={(text) =>
                setBankingDetails((prev) => ({ ...prev, bank_address: text }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Bank Address"
            />
          </View>
        </View>
        <View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="2"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Account Number
              </Text>
              <Input
                borderRadius="12"
                height="40px"
                backgroundColor="#ffffff"
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                fontSize="10"
                value={bankingDetails.account_no}
                onChangeText={(text) =>
                  setBankingDetails((prev) => ({ ...prev, account_no: text }))
                }
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter Account Number"
              />
            </View>
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Routing Number
              </Text>
              <Input
                w="177"
                borderRadius="12"
                height="40px"
                fontSize="10"
                backgroundColor="#ffffff"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                value={bankingDetails.routing_no}
                onChangeText={(text) =>
                  setBankingDetails((prev) => ({ ...prev, routing_no: text }))
                }
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter Routing Number"
              />
            </View>
          </View>
        </View>
        <View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="2"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Account Type
              </Text>
              <Select
                w="177"
                height="40px"
                borderRadius="12"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Account Type"
                selectedValue={bankingDetails.account_type}
                onValueChange={(value) =>
                  setBankingDetails((prev) => ({
                    ...prev,
                    account_type: value,
                  }))
                }
                dropdownIcon={
                  <View mr="2">
                    <SvgXml xml={dropdown_icon} />
                  </View>
                }
              >
                <Select.Item label="Checking" value="Checking" />
                <Select.Item label="Savings" value="Savings" />
                <Select.Item label="Others" value="Others" />
              </Select>
            </View>
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Secondary Bank Address
              </Text>
              <Input
                w="177"
                borderRadius="12"
                height="40px"
                fontSize="10"
                backgroundColor="#ffffff"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                value={bankingDetails.secondary_bank_address}
                onChangeText={(text) =>
                  setBankingDetails((prev) => ({
                    ...prev,
                    secondary_bank_address: text,
                  }))
                }
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter Secondary Bank Address"
              />
            </View>
          </View>
        </View>
        <View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="2"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Card Number
              </Text>
              <Input
                borderRadius="12"
                height="40px"
                backgroundColor="#ffffff"
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                fontSize="10"
                value={bankingDetails.card_number}
                onChangeText={(text) =>
                  setBankingDetails((prev) => ({ ...prev, card_number: text }))
                }
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter Card Number"
              />
            </View>
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Expiration Date
              </Text>
              <View
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
                width="177px"
              >
                <Input
                  w="85"
                  borderRadius="12"
                  height="40px"
                  fontSize="10"
                  backgroundColor="#ffffff"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  value={bankingDetails.expiry_month}
                  onChangeText={(text) =>
                    setBankingDetails((prev) => ({
                      ...prev,
                      expiry_month: text,
                    }))
                  }
                  _focus={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(193, 199, 214, 0.35)",
                  }}
                  placeholder="Month"
                />
                <Input
                  w="85"
                  borderRadius="12"
                  height="40px"
                  fontSize="10"
                  backgroundColor="#ffffff"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  value={bankingDetails.expiry_year}
                  onChangeText={(text) =>
                    setBankingDetails((prev) => ({
                      ...prev,
                      expiry_year: text,
                    }))
                  }
                  _focus={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(193, 199, 214, 0.35)",
                  }}
                  placeholder="Year"
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="2"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                CVC
              </Text>
              <Input
                borderRadius="12"
                height="40px"
                backgroundColor="#ffffff"
                w="177"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                fontSize="10"
                value={bankingDetails.cvc_code}
                onChangeText={(text) =>
                  setBankingDetails((prev) => ({ ...prev, cvc_code: text }))
                }
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter CVC"
              />
            </View>
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Card Holder
              </Text>
              <Input
                w="177"
                borderRadius="12"
                height="40px"
                fontSize="10"
                backgroundColor="#ffffff"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                value={bankingDetails.card_holder}
                onChangeText={(text) =>
                  setBankingDetails((prev) => ({ ...prev, card_holder: text }))
                }
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter Card Name"
              />
            </View>
          </View>
        </View>
        <View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="2"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Country
              </Text>
              <Select
                w="177"
                height="40px"
                borderRadius="12"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Country"
                selectedValue={bankingDetails.country}
                onValueChange={(value) =>
                  setBankingDetails((prev) => ({ ...prev, country: value }))
                }
                dropdownIcon={
                  <View mr="2">
                    <SvgXml xml={dropdown_icon} />
                  </View>
                }
              >
                {countries?.map((country) => (
                  <Select.Item
                    key={country?.name}
                    label={country?.name}
                    value={country?.name}
                  />
                ))}
              </Select>
            </View>
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                State/Region
              </Text>
              <Input
                w="177"
                borderRadius="12"
                height="40px"
                fontSize="10"
                backgroundColor="#ffffff"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                value={bankingDetails.state}
                onChangeText={(text) =>
                  setBankingDetails((prev) => ({ ...prev, state: text }))
                }
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter State/Region"
              />
            </View>
          </View>
        </View>
        <View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="2"
          >
            <View>
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                Zip Code
              </Text>
              <Input
                w="177"
                borderRadius="12"
                height="40px"
                fontSize="10"
                backgroundColor="#ffffff"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                value={bankingDetails.zip_code}
                onChangeText={(text) =>
                  setBankingDetails((prev) => ({ ...prev, zip_code: text }))
                }
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter Zip Code"
              />
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
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Payment Terms
            </Text>
            <Select
              w="177"
              height="40px"
              borderRadius="12"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              fontSize="10"
              accessibilityLabel="Sales Data"
              placeholder="Select Payment Terms"
              selectedValue={bankingDetails.payment_terms}
              onValueChange={(value) =>
                setBankingDetails((prev) => ({ ...prev, payment_terms: value }))
              }
              dropdownIcon={
                <View mr="2">
                  <SvgXml xml={dropdown_icon} />
                </View>
              }
            >
              <Select.Item
                label="COD(Cash on Delivery)"
                value="Cash on Delivery"
              />
              <Select.Item label="Net 30" value="Net 30" />
              <Select.Item label="Net 90" value="Net 90" />
              <Select.Item label="2% Net 10" value="2% Net 10" />
              <Select.Item
                label="LC(Letter of Credit)"
                value="LC(Letter of Credit)"
              />
              <Select.Item
                label="Deposit BUS | Balance Upon Shipment"
                value="Deposit BUS"
              />
              <Select.Item label="Custom" value="Custom" />
            </Select>
          </View>
          <View>
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Custom Payment Term
            </Text>
            <Input
              w="177"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={bankingDetails.custom_payment_terms}
              onChangeText={(text) =>
                setBankingDetails((prev) => ({
                  ...prev,
                  custom_payment_terms: text,
                }))
              }
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="60 Day Net With 25% Down"
            />
          </View>
        </View>
      </View>

      <View mb="40px" alignSelf="center">
        <Pressable onPress={() => setActiveTab("Shipping")}>
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
