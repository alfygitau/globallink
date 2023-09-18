import { Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { Input, Select, Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";

export default function CreatePartner() {
  const [activeTab, setActiveTab] = useState("General Info.");

  const screenHeight = Dimensions.get("window").height;
  let boxHeight = screenHeight - 220;
  let androidHeight = screenHeight - 160;

  const [customerInfo, setCustomerInfo] = useState({
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    company: "",
    first_name: "",
    last_name: "",
    shipping_first_name: "",
    shipping_last_name: "",
    shipping_wechat: "",
    shipping_whatsapp: "",
    shipping_email: "",
    shipping_primary_language: "",
    shipping_secondary_language: "",
    shipping_phone: "",
    email: "",
    wechat: "",
    whatsapp: "",
    primary_language: "",
    secondary_language: "",
    phone: "",
    dropship: "",
    preferred_carrier: "",
    country: "",
    ship_discount: "",
    ship_allowance: 0,
    payment_type: "",
    bank_address: "",
    secondary_bank_address: "",
    account_no: "",
    routing_no: "",
    account_type: "",
    card_number: "",
    expiry_month: "",
    expiry_year: "",
    zip_code: "",
    cvc_code: "",
    card_holder: "",
    custom_payment_terms: "",
    payment_terms: "",
    inventory_minimum: 0,
    inventory_maximum: 0,
    shipment_parameter: "",
    preferred_carrier: "",
  });

  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View flexDir="row" alignItems="center" mt="2">
              <Pressable onPress={() => setActiveTab("General Info.")}>
                <View
                  width="90px"
                  height="30px"
                  backgroundColor={
                    activeTab === "General Info." ? "#27C9A9" : "white"
                  }
                  borderRadius="12"
                  borderWidth={activeTab === "General Info." ? "0" : "2"}
                  borderColor="rgba(193, 199, 214, 0.35)"
                  justifyContent="center"
                  alignItems="center"
                  mr="2"
                >
                  <Text
                    color={
                      activeTab === "General Info."
                        ? "white"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontSize="8"
                    fontFamily="Inter-Regular"
                  >
                    General Info.
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setActiveTab("Contact Info.")}>
                <View
                  width="90px"
                  height="30px"
                  backgroundColor={
                    activeTab === "Contact Info." ? "#27C9A9" : "white"
                  }
                  borderRadius="12"
                  borderWidth={activeTab === "Contact Info." ? "0" : "2"}
                  borderColor="rgba(193, 199, 214, 0.35)"
                  justifyContent="center"
                  alignItems="center"
                  mr="2"
                >
                  <Text
                    color={
                      activeTab === "Contact Info."
                        ? "white"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontSize="8"
                    fontFamily="Inter-Regular"
                  >
                    Contact Info.
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setActiveTab("Shipping")}>
                <View
                  width="90px"
                  height="30px"
                  backgroundColor={
                    activeTab === "Shipping" ? "#27C9A9" : "white"
                  }
                  borderRadius="12"
                  borderWidth={activeTab === "Shipping" ? "0" : "2"}
                  borderColor="rgba(193, 199, 214, 0.35)"
                  justifyContent="center"
                  alignItems="center"
                  mr="2"
                >
                  <Text
                    color={
                      activeTab === "Shipping"
                        ? "white"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontSize="8"
                    fontFamily="Inter-Regular"
                  >
                    Shipping
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setActiveTab("Accounting")}>
                <View
                  width="90px"
                  height="30px"
                  backgroundColor={
                    activeTab === "Accounting" ? "#27C9A9" : "white"
                  }
                  borderRadius="12"
                  borderWidth={activeTab === "Accounting" ? "0" : "2"}
                  borderColor="rgba(193, 199, 214, 0.35)"
                  justifyContent="center"
                  alignItems="center"
                  mr="2"
                >
                  <Text
                    color={
                      activeTab === "Accounting"
                        ? "white"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontSize="8"
                    fontFamily="Inter-Regular"
                  >
                    Accounting
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setActiveTab("Agent")}>
                <View
                  width="90px"
                  height="30px"
                  backgroundColor={activeTab === "Agent" ? "#27C9A9" : "white"}
                  borderRadius="12"
                  borderWidth={activeTab === "Agent" ? "0" : "2"}
                  borderColor="rgba(193, 199, 214, 0.35)"
                  justifyContent="center"
                  alignItems="center"
                  mr="2"
                >
                  <Text
                    color={
                      activeTab === "Agent"
                        ? "white"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontSize="8"
                    fontFamily="Inter-Regular"
                  >
                    Agent Info.
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setActiveTab("Payment")}>
                <View
                  width="90px"
                  height="30px"
                  backgroundColor={
                    activeTab === "Payment" ? "#27C9A9" : "white"
                  }
                  borderRadius="12"
                  borderWidth={activeTab === "Payment" ? "0" : "2"}
                  borderColor="rgba(193, 199, 214, 0.35)"
                  justifyContent="center"
                  alignItems="center"
                  mr="2"
                >
                  <Text
                    color={
                      activeTab === "Payment"
                        ? "white"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontSize="8"
                    fontFamily="Inter-Regular"
                  >
                    Payment Info.
                  </Text>
                </View>
              </Pressable>
            </View>
          </ScrollView>

          {/* general info */}
          {activeTab === "General Info." && (
            <View
              height={Platform.OS === "ios" ? boxHeight : androidHeight}
              justifyContent="space-between"
            >
              <View>
                <View mt="2" mb="2">
                  <Text fontSize="16" fontFamily="Inter-Bold">
                    General Information
                  </Text>
                </View>
                <View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb="2"
                  >
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Company Name
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.company}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            company: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Company Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        value={customerInfo.city}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({ ...prev, city: text }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter City"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Address
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.address_1}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            address_1: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Address"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        value={customerInfo.state}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({ ...prev, state: text }))
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Address #2
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.address_2}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            address_2: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Address #2"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        placeholder="Select country"
                        selectedValue={customerInfo.country}
                        onValueChange={(value) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            country: value,
                          }))
                        }
                        dropdownIcon={
                          <View mr="2">
                            <SvgXml xml={dropdown_icon} />
                          </View>
                        }
                      >
                        <Select.Item label="Weekly" value="weekly" />
                        <Select.Item label="Monthly" value="monthly" />
                        <Select.Item label="Annually" value="annually" />
                      </Select>
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Postal Code
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.postal_code}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            zip_code: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Postal Code"
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View
                flexDir="row"
                alignItems="center"
                alignSelf="center"
                mt="4"
                mb="10"
              >
                <View
                  width="146"
                  height="31px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  justifyContent="center"
                  alignItems="center"
                  mr="4"
                >
                  <Text color="white" fontSize="13" fontWeight="400">
                    Save
                  </Text>
                </View>
                <Pressable onPress={() => setActiveTab("Contact Info.")}>
                  <View
                    width="146"
                    height="31px"
                    borderRadius="19"
                    backgroundColor="#27C9A9"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text color="white" fontSize="13" fontWeight="400">
                      Next
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          )}

          {/* contact info */}
          {activeTab === "Contact Info." && (
            <View
              height={Platform.OS === "ios" ? boxHeight : androidHeight}
              justifyContent="space-between"
            >
              <View>
                <View mt="2" mb="2">
                  <Text fontSize="16" fontFamily="Inter-Bold">
                    Contact Information
                  </Text>
                </View>
                <View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb="2"
                  >
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        First Name
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.first_name}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            first_name: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter First Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        WeChat
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        value={customerInfo.wechat}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({ ...prev, wechat: text }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="English"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Last Name
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.last_name}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            last_name: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Last Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        WhatsApp
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        value={customerInfo.whatsapp}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            whatsapp: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="WhatsApp"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Email
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.email}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            email: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Email"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Primary Language
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        value={customerInfo.primary_language}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            primary_language: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Language"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Phone
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.phone}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({ ...prev, phone: text }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Phone"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Secondary Language
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        value={customerInfo.secondary_language}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            secondary_language: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Language"
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View
                flexDir="row"
                alignItems="center"
                alignSelf="center"
                mt="4"
                mb="10"
              >
                <View
                  width="146"
                  height="31px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  justifyContent="center"
                  alignItems="center"
                  mr="4"
                >
                  <Text color="white" fontSize="13" fontWeight="400">
                    Save
                  </Text>
                </View>
                <Pressable onPress={() => setActiveTab("Shipping")}>
                  <View
                    width="146"
                    height="31px"
                    borderRadius="19"
                    backgroundColor="#27C9A9"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text color="white" fontSize="13" fontWeight="400">
                      Next
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          )}

          {activeTab === "Shipping" && (
            <View
              height={Platform.OS === "ios" ? boxHeight : androidHeight}
              justifyContent="space-between"
            >
              <View>
                <View mt="2" mb="2">
                  <Text fontSize="16" fontFamily="Inter-Bold">
                    Shipping Information
                  </Text>
                </View>
                <View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb="2"
                  >
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        First Name
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.shipping_first_name}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            shipping_first_name: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter First Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        WeChat
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        value={customerInfo.shipping_wechat}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            shipping_wechat: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="English"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Last Name
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.shipping_last_name}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            shipping_last_name: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Last Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        WhatsApp
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        value={customerInfo.shipping_whatsapp}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            shipping_whatsapp: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="WhatsApp"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Email
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.shipping_email}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            shipping_email: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Email"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Primary Language
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        value={customerInfo.shipping_primary_language}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            shipping_primary_language: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Language"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Phone
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        value={customerInfo.shipping_phone}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            shipping_phone: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Phone"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Secondary Language
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        value={customerInfo.shipping_secondary_language}
                        onChangeText={(text) =>
                          setCustomerInfo((prev) => ({
                            ...prev,
                            shipping_secondary_language: text,
                          }))
                        }
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Language"
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View
                flexDir="row"
                alignItems="center"
                alignSelf="center"
                mt="4"
                mb="10"
              >
                <View
                  width="146"
                  height="31px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  justifyContent="center"
                  alignItems="center"
                  mr="4"
                >
                  <Text color="white" fontSize="13" fontWeight="400">
                    Save
                  </Text>
                </View>
                <Pressable onPress={() => setActiveTab("Accounting")}>
                  <View
                    width="146"
                    height="31px"
                    borderRadius="19"
                    backgroundColor="#27C9A9"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text color="white" fontSize="13" fontWeight="400">
                      Next
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          )}

          {/* accounting */}
          {activeTab === "Accounting" && (
            <View
              height={Platform.OS === "ios" ? boxHeight : androidHeight}
              justifyContent="space-between"
            >
              <View>
                <View mt="2" mb="2">
                  <Text fontSize="16" fontFamily="Inter-Bold">
                    Accounting Information
                  </Text>
                </View>
                <View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb="2"
                  >
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        dropdownIcon={
                          <View mr="2">
                            <SvgXml xml={dropdown_icon} />
                          </View>
                        }
                      >
                        <Select.Item label="Weekly" value="weekly" />
                        <Select.Item label="Monthly" value="monthly" />
                        <Select.Item label="Annually" value="annually" />
                      </Select>
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Bank Address"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Account Number"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        dropdownIcon={
                          <View mr="2">
                            <SvgXml xml={dropdown_icon} />
                          </View>
                        }
                      >
                        <Select.Item label="Weekly" value="weekly" />
                        <Select.Item label="Monthly" value="monthly" />
                        <Select.Item label="Annually" value="annually" />
                      </Select>
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Card Number"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter CVC"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Name of Card
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        dropdownIcon={
                          <View mr="2">
                            <SvgXml xml={dropdown_icon} />
                          </View>
                        }
                      >
                        <Select.Item label="Weekly" value="weekly" />
                        <Select.Item label="Monthly" value="monthly" />
                        <Select.Item label="Annually" value="annually" />
                      </Select>
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
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
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Postal Code"
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View
                flexDir="row"
                alignItems="center"
                alignSelf="center"
                mt="4"
                mb="10"
              >
                <View
                  width="146"
                  height="31px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  justifyContent="center"
                  alignItems="center"
                  mr="4"
                >
                  <Text color="white" fontSize="13" fontWeight="400">
                    Save
                  </Text>
                </View>
                <Pressable onPress={() => setActiveTab("Agent")}>
                  <View
                    width="146"
                    height="31px"
                    borderRadius="19"
                    backgroundColor="#27C9A9"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text color="white" fontSize="13" fontWeight="400">
                      Next
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          )}

          {/* agent info */}
          {activeTab === "Agent" && (
            <View
              height={Platform.OS === "ios" ? boxHeight : androidHeight}
              justifyContent="space-between"
            >
              <View>
                <View mt="2" mb="2">
                  <Text fontSize="16" fontFamily="Inter-Bold">
                    Agent Information
                  </Text>
                </View>
                <View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb="2"
                  >
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        First Name
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter First Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        WeChat
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="English"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Last Name
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Last Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        WhatsApp
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="WhatsApp"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Email
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Email"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Primary Language
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Language"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Phone
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Phone"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Secondary Language
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Language"
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View
                flexDir="row"
                alignItems="center"
                alignSelf="center"
                mt="4"
                mb="10"
              >
                <View
                  width="146"
                  height="31px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  justifyContent="center"
                  alignItems="center"
                  mr="4"
                >
                  <Text color="white" fontSize="13" fontWeight="400">
                    Save
                  </Text>
                </View>
                <Pressable onPress={() => setActiveTab("Payment")}>
                  <View
                    width="146"
                    height="31px"
                    borderRadius="19"
                    backgroundColor="#27C9A9"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text color="white" fontSize="13" fontWeight="400">
                      Next
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          )}
          {/* payment info */}
          {activeTab === "Payment" && (
            <View
              height={Platform.OS === "ios" ? boxHeight : androidHeight}
              justifyContent="space-between"
            >
              <View>
                <View mt="2" mb="2">
                  <Text fontSize="16" fontFamily="Inter-Bold">
                    Payment Information
                  </Text>
                </View>
                <View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mb="2"
                  >
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        First Name
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter First Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        WeChat
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="English"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Last Name
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Last Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        WhatsApp
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="WhatsApp"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Email
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Email"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Primary Language
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Language"
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
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Phone
                      </Text>
                      <Input
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        w="177"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Phone"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Secondary Language
                      </Text>
                      <Input
                        w="177"
                        borderRadius="12"
                        height="40px"
                        fontSize="10"
                        backgroundColor="#ffffff"
                        borderColor="rgba(193, 199, 214, 0.35)"
                        borderWidth="2"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Language"
                      />
                    </View>
                  </View>
                </View>
              </View>

              <View
                flexDir="row"
                alignItems="center"
                alignSelf="center"
                mt="4"
                mb="10"
              >
                <View
                  width="146"
                  height="31px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  justifyContent="center"
                  alignItems="center"
                  mr="4"
                >
                  <Text color="white" fontSize="13" fontWeight="400">
                    Save
                  </Text>
                </View>
                <View
                  width="146"
                  height="31px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text color="white" fontSize="13" fontWeight="400">
                    Complete
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
