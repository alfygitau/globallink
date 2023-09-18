import { Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input, Text, View, Checkbox } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { tick_icon } from "../../Admin/useradmin/userAdminSvgs";
import {
  createPartnersGroup,
  getAllPartners,
} from "../../../sdk/partner/partner";

export default function CreateGroup() {
  const [partners, setPartners] = useState([]);
  const [partnersGroupName, setPartnersGroupName] = useState("");
  const [selectedPartners, setSelectedPartners] = useState({});

  const getPatners = async () => {
    const response = await getAllPartners();
    setPartners(response?.data);
  };

  useEffect(() => {
    getPatners();
  }, []);

  const finalPartners = Object.entries(selectedPartners)
    .filter(([key, value]) => value === true)
    .map(([key]) => ({ id: key }));

  const handleCreateGroup = async () => {
    const response = await createPartnersGroup(
      partnersGroupName,
      finalPartners
    );
    if (response.status === 201) {
      Alert.alert(`${partnersGroupName} created`);
      setPartnersGroupName("");
    }
  };

  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <View>
            <Text>Create Group</Text>
          </View>

          <View mb="3">
            <Text fontFamily="Inter-Regular" fontSize="10" color="#525252">
              Group Name
            </Text>
            <Input
              w="277"
              borderRadius="12"
              height="40px"
              fontSize="10"
              backgroundColor="#ffffff"
              borderColor="rgba(193, 199, 214, 0.35)"
              borderWidth="2"
              value={partnersGroupName}
              onChangeText={(text) => setPartnersGroupName(text)}
              _focus={{
                backgroundColor: "#ffffff",
                borderColor: "rgba(193, 199, 214, 0.35)",
              }}
              placeholder="Enter Group Name"
            />
          </View>
          <View
            flexDir="row"
            alignItems="center"
            borderBottomWidth="1"
            borderColor="rgba(193, 199, 214, 0.50)"
          >
            <Text fontFamily="Inter-SemiBold" fontSize="10" width="30%">
              Select
            </Text>
            <Text
              fontFamily="Inter-SemiBold"
              fontSize="10"
              width="30%"
              textAlign="center"
            >
              Company/Partner
            </Text>
            <Text
              fontFamily="Inter-SemiBold"
              fontSize="10"
              width="30%"
              textAlign="center"
            >
              Country
            </Text>
          </View>
          {partners &&
            partners.map((partner) => (
              <View flexDir="row" alignItems="center" height="40px">
                <View width="30%">
                  <Checkbox
                    size="sm"
                    borderRadius="100"
                    colorScheme="white"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    aria-label="check"
                    style={{ transform: [{ scale: 0.7 }] }}
                    value={selectedPartners[partner?.id]}
                    onChange={(newValue) => {
                      setSelectedPartners((prevChecked) => ({
                        ...prevChecked,
                        [partner?.id]: newValue,
                      }));
                    }}
                  />
                </View>
                <Text
                  fontFamily="Inter-Regular"
                  fontSize="10"
                  width="30%"
                  textAlign="center"
                >
                  {partner?.company}
                </Text>
                <Text
                  fontFamily="Inter-Regular"
                  fontSize="10"
                  width="30%"
                  textAlign="center"
                >
                  {partner?.country}
                </Text>
              </View>
            ))}

          <View alignSelf="flex-end" mt="6">
            <Button
              backgroundColor="#27C9A9"
              borderRadius="12"
              width="92px"
              height="34px"
              size="sm"
              onPress={handleCreateGroup}
            >
              Submit
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
