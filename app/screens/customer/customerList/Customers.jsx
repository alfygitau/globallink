import {} from "react-native";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { getCustomers } from "../../../sdk/customer/customer";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  const fetchCustomers = async () => {
    let response = await getCustomers();
    setCustomers(response?.data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <View mb="2">
            <Text>View Customers</Text>
          </View>

          <View
            flexDir="row"
            alignItems="center"
            borderBottomWidth="1"
            borderColor="rgba(193, 199, 214, 0.50)"
          >
            <Text fontSize="10" fontFamily="Inter-Bold" width="16%">
              Logo
            </Text>
            <Text
              fontSize="10"
              fontFamily="Inter-Bold"
              width="16%"
              textAlign="center"
            >
              Customer
            </Text>
            <Text
              fontSize="10"
              fontFamily="Inter-Bold"
              width="16%"
              textAlign="center"
            >
              Contact
            </Text>
            <Text
              fontSize="10"
              fontFamily="Inter-Bold"
              width="16%"
              textAlign="center"
            >
              Phone
            </Text>
            <Text
              fontSize="10"
              fontFamily="Inter-Bold"
              width="16%"
              textAlign="center"
            >
              Email
            </Text>
            <Text
              fontSize="10"
              fontFamily="Inter-Bold"
              width="16%"
              textAlign="center"
            >
              Status
            </Text>
          </View>

          {customers?.map((customer) => (
            <View
              flexDir="row"
              alignItems="center"
              borderBottomWidth="1"
              borderColor="rgba(193, 199, 214, 0.50)"
              height="50px"
              key={customer.id}
            >
              <View width="16%">
                <Image
                  source={{ uri: customer?.logo }}
                  alt="logo"
                  resizeMode="contain"
                  width="90%"
                  height="90%"
                  borderRadius="12"
                />
              </View>
              <Text
                fontSize="8"
                fontFamily="Inter-Regular"
                width="16%"
                textAlign="center"
              >
                {customer?.company}
              </Text>
              <Text
                fontSize="8"
                fontFamily="Inter-Regular"
                width="16%"
                textAlign="center"
              >
                {customer?.contacts?.first_name} {customer?.contacts?.last_name}
              </Text>
              <Text
                fontSize="8"
                fontFamily="Inter-Regular"
                width="16%"
                textAlign="center"
              >
                {customer?.contacts?.phone}
              </Text>
              <Text
                fontSize="8"
                fontFamily="Inter-Regular"
                width="16%"
                textAlign="center"
              >
                {customer?.contacts?.email}
              </Text>
              <Text
                fontSize="8"
                fontFamily="Inter-Regular"
                width="16%"
                textAlign="center"
              >
                Active
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
