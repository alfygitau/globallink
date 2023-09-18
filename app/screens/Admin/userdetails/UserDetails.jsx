import { Platform, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Input, ScrollView, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { profile_icon } from "../userlist/userlistSvgs";
import { avatar_icon, edit_icon } from "../companyDetails/companyDetailssvgs";
import { TouchableOpacity } from "react-native";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";
import { getAdminUser, viewAdminUsers } from "../../../sdk/admin/users";

export default function UserDetails({ route }) {
  const [activeTab, setActiveTab] = useState("User Details");
  const { userId } = route.params ?? {};
  const [user, setUser] = useState({});
  const [id, setId] = useState(userId);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await getAdminUser(id);
      console.log("res", response);
      setUser(response.data);
    };
    getUser();
  }, [id]);

  console.log("id", id)

  useEffect(() => {
    const getUsers = async () => {
      const res = await viewAdminUsers();
      setUsers(res.data);
    };
    getUsers();
  }, []);

  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="100%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <View
            width="90%"
            alignSelf="center"
            flexDir="row"
            alignItems="center"
          >
            <View
              width="80px"
              height="80px"
              borderRadius="100"
              backgroundColor="#ffffff"
              alignItems="center"
              justifyContent="center"
              mr="8"
              style={styles.shadowContainer}
            >
              <SvgXml xml={avatar_icon} />
            </View>
            <View mr="4">
              <Text fontSize="20" fontFamily="Inter-Bold" fontWeight="bold">
                {user.first_name} {user.last_name}
              </Text>
              <Text
                fontSize="15"
                fontFamily="Inter-Regular"
                fontWeight="400"
                color="#525252"
              >
                {user.role}
              </Text>
            </View>
            <View mb="4">
              <SvgXml xml={edit_icon} width={20} height={20} />
            </View>
          </View>
          <View width="90%" alignSelf="center">
            <View my="1">
              <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
                User
              </Text>
            </View>
            <View>
              <Select
                height="40px"
                borderRadius="12"
                accessibilityLabel="Select user"
                placeholder="Select User"
                selectedValue={id}
                onValueChange={(itemValue) => setId(itemValue)}
                borderWidth="2"
                borderColor="rgba(193, 199, 214, 0.35)"
                dropdownIcon={
                  <View mr="2">
                    <SvgXml xml={dropdown_icon} />
                  </View>
                }
              >
                {users &&
                  users?.map((user) => (
                    <Select.Item label={user?.first_name} value={user?.id} />
                  ))}
              </Select>
            </View>
          </View>
          <View width="90%" alignSelf="center" my="4">
            <View flexDir="row" justifyContent="space-between">
              <View
                width="85px"
                height="29px"
                borderRadius="15"
                alignItems="center"
                justifyContent="center"
                backgroundColor={
                  activeTab === "User Details" ? "#27C9A9" : "#ffffff"
                }
              >
                <TouchableOpacity onPress={() => setActiveTab("User Details")}>
                  <Text
                    fontSize="10"
                    color={
                      activeTab === "User Details"
                        ? "white"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontFamily="Inter-Regular"
                  >
                    User Details
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                width="85px"
                height="29px"
                borderRadius="15"
                alignItems="center"
                justifyContent="center"
                backgroundColor={
                  activeTab === "Permissions" ? "#27C9A9" : "#ffffff"
                }
                borderWidth="1"
                borderColor="rgba(193, 199, 214, 0.35)"
              >
                <TouchableOpacity onPress={() => setActiveTab("Permissions")}>
                  <Text
                    fontSize="10"
                    color={
                      activeTab === "Permissions"
                        ? "white"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontFamily="Inter-Regular"
                  >
                    Permissions
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                width="85px"
                height="29px"
                borderRadius="15"
                alignItems="center"
                justifyContent="center"
                backgroundColor={
                  activeTab === "Additional Info" ? "#27C9A9" : "#ffffff"
                }
                borderWidth="1"
                borderColor="rgba(193, 199, 214, 0.35)"
              >
                <TouchableOpacity
                  onPress={() => setActiveTab("Additional Info")}
                >
                  <Text
                    fontSize="10"
                    color={
                      activeTab === "Additional Info"
                        ? "white"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontFamily="Inter-Regular"
                  >
                    Additional Info
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                width="85px"
                height="29px"
                borderRadius="15"
                alignItems="center"
                justifyContent="center"
                backgroundColor={
                  activeTab === "Banking" ? "#27C9A9" : "#ffffff"
                }
                borderWidth="1"
                borderColor="rgba(193, 199, 214, 0.35)"
              >
                <TouchableOpacity onPress={() => setActiveTab("Banking")}>
                  <Text
                    fontSize="10"
                    color={
                      activeTab === "Banking"
                        ? "white"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontFamily="Inter-Regular"
                  >
                    Banking
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {activeTab === "User Details" && (
            <View width="90%" alignSelf="center">
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
                    Company Name
                  </Text>
                  <Text
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="Inter-Regular"
                    color="rgba(82, 82, 82, 0.50)"
                  >
                    {user?.company_name}
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
                    {user?.phone}
                  </Text>
                </View>
                <View mt="2" mb="4" width="40%">
                  <Text
                    fontSize="10"
                    fontWeight="400"
                    fontFamily="Inter-Regular"
                    mb="5"
                  >
                    Email Address
                  </Text>
                  <Text
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="Inter-Regular"
                    color="rgba(82, 82, 82, 0.50)"
                  >
                    {user?.email}
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
                    {user?.email}
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
                    {user?.address}
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
                    {user?.state}
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
                    {user?.state}
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
                    {user?.country}
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
                    {user?.postal_code}
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
                      <Text
                        color="#ffffff"
                        fontSize="7"
                        fontFamily="Inter-Regular"
                      >
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
                      <Text
                        color="#ffffff"
                        fontSize="7"
                        fontFamily="Inter-Regular"
                      >
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
                      <Text
                        color="#ffffff"
                        fontSize="7"
                        fontFamily="Inter-Regular"
                      >
                        Sales
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
