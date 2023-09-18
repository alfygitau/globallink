import {} from "react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { getAllPartners } from "../../../sdk/partner/partner";

export default function PartnerList() {
  const [partners, setPartners] = useState([]);

  const getPatners = async () => {
    const response = await getAllPartners();
    setPartners(response?.data);
  };

  useEffect(() => {
    getPatners();
  }, []);

  console.log(partners);

  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <View mb="2" mt="2">
            <Text>Partner List</Text>
          </View>

          <View
            flexDir="row"
            alignItems="center"
            borderBottomWidth="1"
            borderColor="rgba(193, 199, 214, 0.50)"
          >
            <Text width="20%" fontFamily="Inter-SemiBold" fontSize="8">
              Partner
            </Text>
            <Text
              width="20%"
              textAlign="center"
              fontFamily="Inter-SemiBold"
              fontSize="8"
            >
              Primary Contact
            </Text>
            <Text
              width="20%"
              textAlign="center"
              fontFamily="Inter-SemiBold"
              fontSize="8"
            >
              Phone #
            </Text>
            <Text
              width="20%"
              textAlign="center"
              fontFamily="Inter-SemiBold"
              fontSize="8"
            >
              Email
            </Text>
            <Text
              width="20%"
              textAlign="center"
              fontFamily="Inter-SemiBold"
              fontSize="8"
            >
              Country
            </Text>
          </View>

          {partners &&
            partners?.map((partner) => (
              <View
                flexDir="row"
                alignItems="center"
                borderBottomWidth="1"
                borderColor="rgba(193, 199, 214, 0.50)"
                key={partner.id}
                height="50px"
              >
                <Text width="20%" fontFamily="Inter-Regular" fontSize="8">
                  {partner?.company}
                </Text>
                <Text
                  width="20%"
                  textAlign="center"
                  fontFamily="Inter-Regular"
                  fontSize="8"
                >
                  {partner?.contact?.first_name} {partner?.contact?.last_name}
                </Text>
                <Text
                  width="20%"
                  textAlign="center"
                  fontFamily="Inter-Regular"
                  fontSize="8"
                >
                  {partner?.contact?.phone}
                </Text>
                <Text
                  width="20%"
                  textAlign="center"
                  fontFamily="Inter-Regular"
                  fontSize="8"
                >
                  {partner?.contact?.email}
                </Text>
                <Text
                  width="20%"
                  textAlign="center"
                  fontFamily="Inter-Regular"
                  fontSize="8"
                >
                  {partner?.country}
                </Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
