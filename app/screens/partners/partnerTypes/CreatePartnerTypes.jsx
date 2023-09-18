import { Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input, Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import {
  createPartnerType,
  getPartnerTypes,
} from "../../../sdk/partner/partner";

export default function CreatePartnerTypes() {
  const [partnerTypes, setPartnerTypes] = useState([]);
  const [partnerTypeName, setPartnerTypeName] = useState("");

  const handleCreatePartnerType = async () => {
    const response = await createPartnerType(partnerTypeName);
    
    if (response.status === 201) {
      Alert.alert(`${partnerTypeName} created`);
      setPartnerTypeName("");
      fetchPatnerTypes();
    }
  };

  const fetchPatnerTypes = async () => {
    const response = await getPartnerTypes();
    setPartnerTypes(response?.data);
  };

  useEffect(() => {
    fetchPatnerTypes();
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
          <View mb="2" mt="2">
            <Text>Partner Types</Text>
          </View>

          <View>
            <Text fontFamily="Inter-Regular" fontSize="10">
              Partner Type Name
            </Text>
            <View flexDir="row" alignItems="center">
              <Input
                w="277"
                borderRadius="12"
                height="40px"
                fontSize="10"
                backgroundColor="#ffffff"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                value={partnerTypeName}
                onChangeText={(text) => setPartnerTypeName(text)}
                _focus={{
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(193, 199, 214, 0.35)",
                }}
                placeholder="Enter Group Name"
                mr="2"
              />
              <Button
                backgroundColor="#27C9A9"
                borderRadius="12"
                size="sm"
                height="40px"
                onPress={handleCreatePartnerType}
              >
                Submit
              </Button>
            </View>
          </View>

          <View
            flexDir="row"
            alignItems="center"
            borderBottomWidth="1"
            borderColor="rgba(193, 199, 214, 0.50)"
            mt="4"
          >
            <Text
              textAlign="center"
              width="30%"
              fontFamily="Inter-SemiBold"
              fontSize="10"
            >
              Partner Type Name
            </Text>
            <Text
              textAlign="center"
              width="30%"
              fontFamily="Inter-SemiBold"
              fontSize="10"
            >
              Date Created
            </Text>
            <Text
              textAlign="center"
              width="30%"
              fontFamily="Inter-SemiBold"
              fontSize="10"
            >
              Number of Partners
            </Text>
          </View>

          {partnerTypes &&
            partnerTypes.map((type) => (
              <View
                flexDir="row"
                alignItems="center"
                borderBottomWidth="1"
                borderColor="rgba(193, 199, 214, 0.50)"
                key={type?.id}
                height="60px"
              >
                <Text width="30%" fontFamily="Inter-Regular" fontSize="10">
                  {type?.name}
                </Text>
                <Text
                  textAlign="center"
                  width="30%"
                  fontFamily="Inter-Regular"
                  fontSize="10"
                >
                  {type?.date_created}
                </Text>
                <Text
                  textAlign="center"
                  width="30%"
                  fontFamily="Inter-Regular"
                  fontSize="10"
                >
                  {type?.number_of_partners?.length}
                </Text>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
