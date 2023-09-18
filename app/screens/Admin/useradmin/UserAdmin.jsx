import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Icon,
  Input,
  Radio,
  Select,
  Text,
  View,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { tick_icon } from "./userAdminSvgs";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";
import { getComapanies } from "../../../sdk/admin/company";
import { getDepartments } from "../../../sdk/admin/department";

export default function UserAdmin() {
  const [activeTab, setActiveTab] = useState("Create User");

  const [username, setUsername] = useState("");
  const [userTitle, setUserTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [customerServiceEmail, setCustomerServiceEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [departments, setDepartments] = useState([]);
  const [departmentId, setDepartmentId] = useState("");
  const [position, setPosition] = useState("");
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getAdminData = async () => {
      const response = await getComapanies();
      const res = await getDepartments();

      setDepartments(res.data);
      setCompanies(response.data);
    };

    getAdminData();
  }, []);

  const userData = {
    phone: phoneNumber,
    role: position,
    country: country,
    state: state,
    zip_code: postalCode,
    postal_code: postalCode,
    department_id: departmentId,
    last_name: username,
    first_name: username,
    address: address,
    secondary_address: address,
    language: "English",
    email: email,
    company_id: companies[0]?.id,
  };

  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="100%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <View mb="1" width="95%" alignSelf="center" mt="1">
            <Text fontFamily="Inter-Bold" fontSize="20" fontWeight="700">
              User Admin
            </Text>
          </View>
        </View>
        <View width="95%" alignSelf="center">
          <View flexDir="row" justifyContent="space-between">
            <View
              width="85px"
              height="29px"
              borderWidth={activeTab === "Create User" ? "0" : "2"}
              borderColor="rgba(193, 199, 214, 0.35)"
              borderRadius="15"
              alignItems="center"
              justifyContent="center"
              backgroundColor={
                activeTab === "Create User" ? "#27C9A9" : "#ffffff"
              }
            >
              <TouchableOpacity onPress={() => setActiveTab("Create User")}>
                <Text
                  fontSize="10"
                  color={
                    activeTab === "Create User"
                      ? "white"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontFamily="Inter-Regular"
                >
                  Create User
                </Text>
              </TouchableOpacity>
            </View>
            <View
              width="85px"
              height="29px"
              borderRadius="15"
              alignItems="center"
              justifyContent="center"
              borderWidth={activeTab === "Permissions" ? "0" : "2"}
              borderColor="rgba(193, 199, 214, 0.35)"
              backgroundColor={
                activeTab === "Permissions" ? "#27C9A9" : "#ffffff"
              }
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
              borderWidth={activeTab === "Additional Info" ? "0" : "2"}
              borderColor="rgba(193, 199, 214, 0.35)"
            >
              <TouchableOpacity onPress={() => setActiveTab("Additional Info")}>
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
              backgroundColor={activeTab === "Banking" ? "#27C9A9" : "#ffffff"}
              borderWidth={activeTab === "Banking" ? "0" : "2"}
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
        {activeTab === "Create User" && (
          <View>
            <View
              flexDir="row"
              width="95%"
              alignSelf="center"
              justifyContent="space-between"
              marginTop="3"
            >
              <View width="48%">
                <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                  User Name
                </Text>
                <Input
                  height="40px"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="14"
                  placeholder="Enter User Name"
                  fontSize="10"
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                  _focus={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(193, 199, 214, 0.35)",
                  }}
                />
              </View>
              <View width="48%">
                <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                  User Title
                </Text>
                <Input
                  height="40px"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="14"
                  placeholder="Enter User Title"
                  value={userTitle}
                  onChangeText={(text) => setUserTitle(text)}
                  fontSize="10"
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
              marginTop="3"
            >
              <View width="48%">
                <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                  Phone Number
                </Text>
                <Input
                  height="40px"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="14"
                  placeholder="Enter Phone Number"
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
                  fontSize="10"
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
                  borderRadius="14"
                  placeholder="Enter Email Address"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  fontSize="10"
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
              marginTop="3"
            >
              <View width="48%">
                <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                  Customer Service Email
                </Text>
                <Input
                  height="40px"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="14"
                  placeholder="Customer Service Email"
                  value={customerServiceEmail}
                  onChangeText={(text) => setCustomerServiceEmail(text)}
                  fontSize="10"
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
                  height="40px"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="14"
                  placeholder="Enter Address"
                  value={address}
                  onChangeText={(text) => setAddress(text)}
                  fontSize="10"
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
              marginTop="3"
            >
              <View width="48%">
                <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                  City
                </Text>
                <Input
                  height="40px"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="14"
                  placeholder="Enter City Name"
                  value={city}
                  onChangeText={(text) => setCity(text)}
                  fontSize="10"
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
                  borderRadius="14"
                  placeholder="Enter State/Region"
                  value={state}
                  onChangeText={(text) => setState(text)}
                  fontSize="10"
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
              marginTop="3"
            >
              <View width="48%">
                <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                  Country
                </Text>
                <Input
                  height="40px"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="14"
                  placeholder="Enter Country"
                  value={country}
                  onChangeText={(text) => setCountry(text)}
                  fontSize="10"
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
                  borderRadius="14"
                  placeholder="Enter Postal Code"
                  value={postalCode}
                  onChangeText={(text) => setPostalCode(text)}
                  fontSize="10"
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
              marginTop="3"
            >
              <View width="48%">
                <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                  Department
                </Text>
                <Select
                  accessibilityLabel="Choose Service"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  selectedValue={departmentId}
                  onValueChange={(itemValue) => setDepartmentId(itemValue)}
                  placeholder="Select System"
                  borderRadius="14"
                  height="40px"
                  fontSize="10"
                  dropdownIcon={
                    <View mr="3">
                      <SvgXml xml={dropdown_icon} />
                    </View>
                  }
                >
                  {departments.map((item) => (
                    <Select.Item
                      key={item.id}
                      label={item.name}
                      value={item.id}
                    />
                  ))}
                </Select>
              </View>
              <View width="48%">
                <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                  Position
                </Text>
                <Input
                  height="40px"
                  borderRadius="14"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  placeholder="Insert Position"
                  value={position}
                  onChangeText={(text) => setPosition(text)}
                  fontSize="10"
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
              marginTop="1"
            >
              <View width="48%">
                <Text mb="3px" fontSize="10" fontFamily="Inter-Regular">
                  Email
                </Text>
                <Input
                  height="40px"
                  borderColor="rgba(193, 199, 214, 0.35)"
                  borderWidth="2"
                  borderRadius="14"
                  placeholder="Insert Email Address"
                  fontSize="10"
                  _focus={{
                    backgroundColor: "#ffffff",
                    borderColor: "rgba(193, 199, 214, 0.35)",
                  }}
                />
              </View>
              <View width="48%" justifyContent="flex-end" mt="6">
                <TouchableOpacity>
                  <View flexDir="row">
                    <View
                      height="23px"
                      width="82px"
                      borderRadius="14"
                      backgroundColor="#525252"
                      alignItems="center"
                      justifyContent="center"
                      mr="2"
                    >
                      <Text fontSize="12" color="white">
                        Generate
                      </Text>
                    </View>
                    <View
                      height="23px"
                      width="75px"
                      borderRadius="14"
                      backgroundColor="#525252"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontSize="12" color="white">
                        Send
                      </Text>
                    </View>
                  </View>
                  <Text
                    fontSize="8"
                    color="rgba(0, 0, 0, 0.50)"
                    textAlign="center"
                  >
                    Forgot Password? Generate a temp password for your user
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View flexDir="row" alignSelf="center" my="6">
              <TouchableOpacity>
                <View
                  alignSelf="center"
                  alignItems="center"
                  justifyContent="center"
                  mr="4"
                  width="146px"
                  backgroundColor="rgba(39, 201, 169, 1)"
                  height="31px"
                  borderRadius="19"
                >
                  <Text color="white">Disable</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  alignSelf="center"
                  alignItems="center"
                  justifyContent="center"
                  width="146px"
                  backgroundColor="rgba(39, 201, 169, 1)"
                  height="31px"
                  borderRadius="19"
                >
                  <Text color="white">Terminate</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {activeTab === "Permissions" && (
          <View>
            <View my="2" width="95%" alignSelf="center">
              <Text fontFamily="Inter-Regular" fontWeight="400" fontSize="10">
                User
              </Text>
            </View>
            <View width="95%" alignSelf="center">
              <Select
                borderRadius="12"
                height="40px"
                fontSize="10"
                borderWidth="2"
                borderColor="rgba(193, 199, 214, 0.35)"
                dropdownIcon={
                  <View mr="4">
                    <SvgXml xml={dropdown_icon} />
                  </View>
                }
              >
                <Select.Item label="User One" />
                <Select.Item label="User Two" />
                <Select.Item label="User Three" />
              </Select>
            </View>
            <View width="85%" alignSelf="center" my="2">
              <View flexDir="row" justifyContent="space-between" mb="4" mt="2">
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Catalog
                    </Text>
                  </Checkbox>
                </View>
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Marketing
                    </Text>
                  </Checkbox>
                </View>
              </View>
              <View flexDir="row" justifyContent="space-between" mb="4">
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Sales
                    </Text>
                  </Checkbox>
                </View>
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Global Files
                    </Text>
                  </Checkbox>
                </View>
              </View>
              <View flexDir="row" justifyContent="space-between" mb="4">
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Partners
                    </Text>
                  </Checkbox>
                </View>
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Global Store
                    </Text>
                  </Checkbox>
                </View>
              </View>
              <View flexDir="row" justifyContent="space-between" mb="4">
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Logistics
                    </Text>
                  </Checkbox>
                </View>
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      CRM
                    </Text>
                  </Checkbox>
                </View>
              </View>
              <View flexDir="row" justifyContent="space-between" mb="4">
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Purchasing
                    </Text>
                  </Checkbox>
                </View>
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      POS
                    </Text>
                  </Checkbox>
                </View>
              </View>
              <View flexDir="row" justifyContent="space-between" mb="4">
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Customers
                    </Text>
                  </Checkbox>
                </View>
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Web Store
                    </Text>
                  </Checkbox>
                </View>
              </View>
              <View flexDir="row" justifyContent="space-between" mb="4">
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Channels
                    </Text>
                  </Checkbox>
                </View>
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Admin
                    </Text>
                  </Checkbox>
                </View>
              </View>
              <View flexDir="row" justifyContent="space-between" mb="4">
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Reports
                    </Text>
                  </Checkbox>
                </View>
                <View width="40%">
                  <Checkbox
                    value="one"
                    colorScheme="white"
                    size="sm"
                    borderRadius="100"
                    icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                    style={{ transform: [{ scale: 0.7 }] }}
                  >
                    <Text
                      color="#525252"
                      fontSize="14"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Reps
                    </Text>
                  </Checkbox>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
