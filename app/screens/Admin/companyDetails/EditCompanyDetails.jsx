import { Button, Input, Select, Text, View } from "native-base";
import React from "react";
import { SvgXml } from "react-native-svg";
import { avatar_icon, edit_icon } from "./companyDetailssvgs";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function EditCompanyDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
          <View
            flexDir="row"
            width="95%"
            alignSelf="center"
            mt={Platform.OS === "ios" ? "4" : "0"}
            mb="2"
          >
            <View
              width="80px"
              height="80px"
              borderRadius="100"
              backgroundColor="#ffffff"
              alignItems="center"
              justifyContent="center"
              mr="10"
              style={styles.shadowContainer}
            >
              <SvgXml xml={avatar_icon} />
            </View>
            <View justifyContent="center" mr="4">
              <Text
                fontWeight="800"
                fontSize="20"
                color="#525252"
                lineHeight="20"
                fontFamily="Inter-Bold"
              >
                Nate Speirs
              </Text>
              <Text
                fontWeight="400"
                fontSize="15px"
                color="#525252"
                lineHeight="14"
                fontFamily="Inter-Regular"
              >
                Admin
              </Text>
            </View>
          </View>
          <View width="95%" alignSelf="center">
            <View flexDir="row" justifyContent="space-between">
              <View
                width="105px"
                height="29px"
                borderRadius="15"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#27C9A9"
              >
                <Text fontSize="10" color="white">
                  Company Details
                </Text>
              </View>
              <View
                width="80px"
                height="29px"
                borderRadius="15"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#ffffff"
                borderWidth="2"
                borderColor="rgba(193, 199, 214, 0.35)"
              >
                <Text fontSize="10" color="rgba(193, 199, 214, 0.50)">
                  Language
                </Text>
              </View>
              <View
                width="75px"
                height="29px"
                borderRadius="15"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#ffffff"
                borderWidth="2"
                borderColor="rgba(193, 199, 214, 0.35)"
              >
                <Text fontSize="10" color="rgba(193, 199, 214, 0.50)">
                  Currency
                </Text>
              </View>
              <View
                width="75px"
                height="29px"
                borderRadius="15"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#ffffff"
                borderWidth="2"
                borderColor="rgba(193, 199, 214, 0.35)"
              >
                <Text fontSize="10" color="rgba(193, 199, 214, 0.50)">
                  Banking
                </Text>
              </View>
            </View>
          </View>
          <View
            flexDir="row"
            width="95%"
            alignSelf="center"
            justifyContent="space-between"
            marginTop="8"
          >
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                Company Name
              </Text>
              <Input
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                placeholder="Enter Company Name"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                Admin Name
              </Text>
              <Input
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                placeholder="Enter Admin Name"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
          </View>
          <View
            flexDir="row"
            width="95%"
            alignSelf="center"
            justifyContent="space-between"
            marginTop="4"
          >
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                Phone Number
              </Text>
              <Input
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                placeholder="Enter Phone Number"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                Email Address
              </Text>
              <Input
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                placeholder="Enter Email Address"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
          </View>
          <View
            flexDir="row"
            width="95%"
            alignSelf="center"
            justifyContent="space-between"
            marginTop="4"
          >
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                Customer Service Email
              </Text>
              <Input
                borderRadius="12"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                placeholder="Add Customer Service Email"
                height="40px"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                Address
              </Text>
              <Input
                borderRadius="12"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                placeholder="Enter Admin Address"
                height="40px"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
          </View>
          <View
            flexDir="row"
            width="95%"
            alignSelf="center"
            justifyContent="space-between"
            marginTop="4"
          >
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                City
              </Text>
              <Input
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                placeholder="Enter City"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                State/Region
              </Text>
              <Input
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                placeholder="Enter State/Region"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
          </View>
          <View
            flexDir="row"
            width="95%"
            alignSelf="center"
            justifyContent="space-between"
            marginTop="4"
          >
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                Country
              </Text>
              <Input
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                placeholder="Select Country"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                Postal Code
              </Text>
              <Input
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                placeholder="Enter Postal Code"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
          </View>
          <View
            flexDir="row"
            width="95%"
            alignSelf="center"
            justifyContent="space-between"
            marginTop="4"
          >
            <View width="48%">
              <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                Departments
              </Text>
              <Input
                height="40px"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                borderRadius="12"
                placeholder="Insert Departments"
                fontSize="9"
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
              />
            </View>
            <View width="48%">
              <Text fontSize="10" fontFamily="Inter-Regular">
                Metric system
              </Text>
              <Select
                accessibilityLabel="Choose Service"
                placeholder="Select System"
                mt={1}
                borderRadius="12"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="40px"
                fontSize="10"
                dropdownIcon={
                  <View mr="3">
                    <SvgXml xml={dropdown_icon} />
                  </View>
                }
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
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
              borderRadius="12"
              my="6"
            >
              <Text color="white">Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "ios" ? 0 : 0,
  },
  shadowContainer: {
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
});
