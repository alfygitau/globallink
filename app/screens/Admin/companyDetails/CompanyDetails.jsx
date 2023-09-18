import { Platform, StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { avatar_icon, edit_icon } from "./companyDetailssvgs";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

export default function CompanyDetails({ navigation }) {
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          flexDir="row"
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
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
          <View justifyContent="center" mr="5">
            <Text
              fontWeight="800"
              fontSize="20"
              color="#525252"
              fontFamily="Inter-Bold"
              lineHeight="20"
            >
              Nate Speirs
            </Text>
            <Text
              fontWeight="400"
              fontSize="15px"
              color="#525252"
              fontFamily="Inter-Regular"
              lineHeight="14"
            >
              Admin
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Edit Company Details")}
          >
            <View mt="6">
              <SvgXml xml={edit_icon} width={20} height={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View width="90%" alignSelf="center">
          <View flexDir="row" justifyContent="space-between">
            <View
              width="105px"
              height="29px"
              borderRadius="15"
              alignItems="center"
              justifyContent="center"
              backgroundColor="#27C9A9"
            >
              <Text fontSize="10" color="white" fontFamily="Inter-Regular">
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
              <Text
                fontSize="10"
                color="rgba(193, 199, 214, 0.50)"
                fontFamily="Inter-Regular"
              >
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
              <Text
                fontSize="10"
                color="rgba(193, 199, 214, 0.50)"
                fontFamily="Inter-Regular"
              >
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
              <Text
                fontSize="10"
                color="rgba(193, 199, 214, 0.50)"
                fontFamily="Inter-Regular"
              >
                Banking
              </Text>
            </View>
          </View>
        </View>
        <View width="95%" alignSelf="center">
          <View
            flexDir="row"
            justifyContent="space-between"
            width="85%"
            alignSelf="center"
          >
            <View mt="2" mb="4" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="2"
              >
                Company Name
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter-Regular"
                color="rgba(82, 82, 82, 0.50)"
              >
                Global Link Plus
              </Text>
            </View>
            <View mt="2" mb="4" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="3"
              >
                Admin Name
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter-Regular"
                color="rgba(82, 82, 82, 0.50)"
              >
                Nate Speirs
              </Text>
            </View>
          </View>
          <View
            flexDir="row"
            justifyContent="space-between"
            width="85%"
            alignSelf="center"
          >
            <View mt="2" mb="4" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="3"
              >
                Phone Number
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter-Regular"
                color="rgba(82, 82, 82, 0.50)"
              >
                801-707-4979
              </Text>
            </View>
            <View mt="2" mb="4" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="3"
              >
                Email Address
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter-Regular"
                color="rgba(82, 82, 82, 0.50)"
              >
                info@globallinkplus.com
              </Text>
            </View>
          </View>
          <View
            flexDir="row"
            justifyContent="space-between"
            width="85%"
            alignSelf="center"
          >
            <View mt="2" mb="4" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="3"
              >
                Customer Service Email
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter-Regular"
                color="rgba(82, 82, 82, 0.50)"
              >
                info@globallinkplus.com
              </Text>
            </View>
            <View mt="2" mb="4" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="3"
              >
                Address
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter-Regular"
                color="rgba(82, 82, 82, 0.50)"
              >
                1234 W 56789 S
              </Text>
            </View>
          </View>
          <View
            flexDir="row"
            justifyContent="space-between"
            width="85%"
            alignSelf="center"
          >
            <View mt="2" mb="4" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="3"
              >
                City
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter-Regular"
                color="rgba(82, 82, 82, 0.50)"
              >
                Salt Lake City
              </Text>
            </View>
            <View mt="2" mb="4" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="3"
              >
                State/Region
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter-Regular"
                color="rgba(82, 82, 82, 0.50)"
              >
                UT
              </Text>
            </View>
          </View>
          <View
            flexDir="row"
            justifyContent="space-between"
            width="85%"
            alignSelf="center"
          >
            <View mt="2" mb="4" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="3"
              >
                Country
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter-Regular"
                color="rgba(82, 82, 82, 0.50)"
              >
                United States
              </Text>
            </View>
            <View mt="2" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="3"
              >
                Postal Code
              </Text>
              <Text
                fontSize="10"
                fontWeight="500"
                fontFamily="Inter-Regular"
                color="rgba(82, 82, 82, 0.50)"
              >
                807001
              </Text>
            </View>
          </View>
          <View
            flexDir="row"
            justifyContent="space-between"
            width="85%"
            alignSelf="center"
          >
            <View mt="2" width="40%">
              <Text
                fontSize="10"
                fontWeight="400"
                fontFamily="Inter-Regular"
                mb="3"
              >
                Departments
              </Text>
              <View flexDir="row" flexWrap="wrap">
                <View
                  width="100px"
                  height="17px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  alignItems="center"
                  justifyContent="center"
                  mb="2"
                >
                  <Text color="#ffffff" fontSize="7" fontFamily="Inter-Regular">
                    HR
                  </Text>
                </View>
                <View
                  width="100px"
                  height="17px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  alignItems="center"
                  justifyContent="center"
                  mb="2"
                >
                  <Text color="#ffffff" fontSize="7" fontFamily="Inter-Regular">
                    Managers
                  </Text>
                </View>
                <View
                  width="100px"
                  height="17px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  alignItems="center"
                  justifyContent="center"
                  mb="2"
                >
                  <Text color="#ffffff" fontSize="7" fontFamily="Inter-Regular">
                    Sales
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Set your desired background color here
    marginTop: Platform.OS === "ios" ? 0 : 0, // Ensure paddingTop is 0 for iOS
  },
  shadowContainer: {
    backgroundColor: "#fff", // Replace with your desired background color
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
