import { Dimensions, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input, ScrollView, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";

export default function CreateLocation() {
  const [activeTab, setActiveTab] = useState("Location Details");
  const screenHeight = Dimensions.get("window").height;

  const iosHeight = Number(screenHeight) - 184;
  const androidHeight = Number(screenHeight) - 124;
  console.log(androidHeight);
  console.log(iosHeight);
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          height={Platform.OS === "ios" ? `${iosHeight}` : `${androidHeight}`}
          justifyContent="space-between"
        >
          <View>
            <View
              flexDir="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontFamily="Inter-Bold" fontSize="20" fontWeight="700">
                Create Location
              </Text>
              <Select
                width="139"
                height="40px"
                borderRadius="12"
                fontSize="8"
                borderWidth="2"
                borderColor="rgba(193, 199, 214, 0.35);"
                accessibilityLabel="Create Location"
                placeholder="Create Location"
                mt={1}
                dropdownIcon={
                  <View mr="2">
                    <SvgXml xml={dropdown_icon} />
                  </View>
                }
              >
                <Select.Item label="5 per page" value="5 per page" />
                <Select.Item label="10 per page" value="10 per page" />
              </Select>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View flexDir="row" mt="2" mb="3">
                <TouchableOpacity
                  onPress={() => setActiveTab("Location Details")}
                >
                  <View
                    width="107px"
                    height="29px"
                    borderRadius="19"
                    borderWidth={activeTab === "Location Details" ? "0" : "2"}
                    backgroundColor={
                      activeTab === "Location Details" ? "#27C9A9" : "#ffffff"
                    }
                    borderColor={
                      activeTab === "Location Details"
                        ? "none"
                        : "rgba(193, 199, 214, 0.35)"
                    }
                    justifyContent="center"
                    alignItems="center"
                    mr="2"
                  >
                    <Text
                      color={
                        activeTab === "Location Details"
                          ? "#ffffff"
                          : "rgba(193, 199, 214, 0.50)"
                      }
                      fontSize="10"
                    >
                      Location Details
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveTab("Contact Information")}
                >
                  <View
                    width="107px"
                    height="29px"
                    borderRadius="19"
                    borderWidth="2"
                    borderColor={
                      activeTab === "Contact Information"
                        ? "none"
                        : "rgba(193, 199, 214, 0.35)"
                    }
                    backgroundColor={
                      activeTab === "Contact Information"
                        ? "#27C9A9"
                        : "#ffffff"
                    }
                    justifyContent="center"
                    alignItems="center"
                    mr="2"
                  >
                    <Text
                      color={
                        activeTab === "Contact Information"
                          ? "#ffffff"
                          : "rgba(193, 199, 214, 0.50)"
                      }
                      fontSize="10"
                    >
                      Contact Information
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setActiveTab("Inventory Management")}
                >
                  <View
                    width="127px"
                    height="29px"
                    borderRadius="19"
                    borderWidth="2"
                    borderColor={
                      activeTab === "Inventory Management"
                        ? "none"
                        : "rgba(193, 199, 214, 0.35)"
                    }
                    backgroundColor={
                      activeTab === "Inventory Management"
                        ? "#27C9A9"
                        : "#ffffff"
                    }
                    justifyContent="center"
                    alignItems="center"
                    mr="2"
                  >
                    <Text
                      color={
                        activeTab === "Inventory Management"
                          ? "#ffffff"
                          : "rgba(193, 199, 214, 0.50)"
                      }
                      fontSize="10"
                    >
                      Inventory Management
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab("Pricing")}>
                  <View
                    width="87px"
                    height="29px"
                    borderRadius="19"
                    borderWidth="2"
                    borderColor={
                      activeTab === "Pricing"
                        ? "none"
                        : "rgba(193, 199, 214, 0.35)"
                    }
                    backgroundColor={
                      activeTab === "Pricing" ? "#27C9A9" : "#ffffff"
                    }
                    justifyContent="center"
                    alignItems="center"
                    mr="2"
                  >
                    <Text
                      color={
                        activeTab === "Pricing"
                          ? "#ffffff"
                          : "rgba(193, 199, 214, 0.50)"
                      }
                      fontSize="10"
                    >
                      Pricing
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {/* location Details */}
            {activeTab === "Location Details" && (
              <View>
                <View
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt="2"
                >
                  <View>
                    <Text>Location Title</Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter Location Title"
                    />
                  </View>
                  <View>
                    <Text>City</Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter City"
                    />
                  </View>
                </View>
                <View
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt="2"
                >
                  <View>
                    <Text>Address</Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter Address"
                    />
                  </View>
                  <View>
                    <Text>State/Region</Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter State/Region"
                    />
                  </View>
                </View>
                <View
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt="2"
                >
                  <View>
                    <Text>Address 2</Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter Address"
                    />
                  </View>
                  <View>
                    <Text>Country</Text>
                    <Select
                      width="181"
                      height="40px"
                      borderRadius="12"
                      fontSize="8"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      accessibilityLabel="Select Country"
                      placeholder="Select Country"
                      mt={1}
                      dropdownIcon={
                        <View mr="2">
                          <SvgXml xml={dropdown_icon} />
                        </View>
                      }
                    >
                      <Select.Item label="5 per page" value="5 per page" />
                      <Select.Item label="10 per page" value="10 per page" />
                    </Select>
                  </View>
                </View>
                <View
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt="2"
                >
                  <View>
                    <Text>Postal Code</Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter Postal Code"
                    />
                  </View>
                </View>
                <View mt="4">
                  <Text>Location Hours</Text>
                </View>
              </View>
            )}

            {/* Contact Info */}
            {activeTab === "Contact Information" && (
              <View>
                <View>
                  <View>
                    <Text
                      fontSize="14"
                      fontWeight="400"
                      fontFamily="Inter-Regular"
                    >
                      Primary Contact
                    </Text>
                  </View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mt="2"
                  >
                    <View>
                      <Text
                        fontSize="10"
                        fontWeight="400"
                        fontFamily="Inter-Regular"
                      >
                        Contact Name
                      </Text>
                      <Input
                        w="181"
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        borderWidth="2"
                        borderColor="rgba(193, 199, 214, 0.35);"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Contact Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontWeight="400"
                        fontFamily="Inter-Regular"
                      >
                        Email
                      </Text>
                      <Input
                        w="181"
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        borderWidth="2"
                        borderColor="rgba(193, 199, 214, 0.35);"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Email"
                      />
                    </View>
                  </View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mt="2"
                  >
                    <View>
                      <Text
                        fontSize="10"
                        fontWeight="400"
                        fontFamily="Inter-Regular"
                      >
                        Phone Number
                      </Text>
                      <Input
                        w="181"
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        borderWidth="2"
                        borderColor="rgba(193, 199, 214, 0.35);"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Phone Number"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontWeight="400"
                        fontFamily="Inter-Regular"
                      >
                        WhatsApp
                      </Text>
                      <Input
                        w="181"
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        borderWidth="2"
                        borderColor="rgba(193, 199, 214, 0.35);"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter WhatsApp"
                      />
                    </View>
                  </View>
                </View>
                <View mt="4">
                  <View>
                    <Text
                      fontSize="14"
                      fontWeight="400"
                      fontFamily="Inter-Regular"
                    >
                      Secondary Contact
                    </Text>
                  </View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mt="2"
                  >
                    <View>
                      <Text
                        fontSize="10"
                        fontWeight="400"
                        fontFamily="Inter-Regular"
                      >
                        Contact Name
                      </Text>
                      <Input
                        w="178"
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        borderWidth="2"
                        borderColor="rgba(193, 199, 214, 0.35);"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Contact Name"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontWeight="400"
                        fontFamily="Inter-Regular"
                      >
                        Email
                      </Text>
                      <Input
                        w="178"
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        borderWidth="2"
                        borderColor="rgba(193, 199, 214, 0.35);"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Email"
                      />
                    </View>
                  </View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    mt="2"
                  >
                    <View>
                      <Text
                        fontSize="10"
                        fontWeight="400"
                        fontFamily="Inter-Regular"
                      >
                        Phone Number
                      </Text>
                      <Input
                        w="181"
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        borderWidth="2"
                        borderColor="rgba(193, 199, 214, 0.35);"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter Phone Number"
                      />
                    </View>
                    <View>
                      <Text
                        fontSize="10"
                        fontWeight="400"
                        fontFamily="Inter-Regular"
                      >
                        WhatsApp
                      </Text>
                      <Input
                        w="181"
                        borderRadius="12"
                        height="40px"
                        backgroundColor="#ffffff"
                        borderWidth="2"
                        borderColor="rgba(193, 199, 214, 0.35);"
                        fontSize="10"
                        _focus={{
                          backgroundColor: "#ffffff",
                          borderColor: "rgba(193, 199, 214, 0.35)",
                        }}
                        placeholder="Enter WhatsApp"
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}

            {/* inventory management */}
            {activeTab === "Inventory Management" && (
              <View>
                <View>
                  <Text
                    fontSize="10"
                    fontFamily="Inter-Regular"
                    fontWeight="400"
                  >
                    Management Type
                  </Text>
                  <Select
                    width="370"
                    height="40px"
                    borderRadius="12"
                    fontSize="8"
                    borderWidth="2"
                    borderColor="rgba(193, 199, 214, 0.35);"
                    accessibilityLabel="Select Country"
                    placeholder="Enter Management Type"
                    mt={1}
                    dropdownIcon={
                      <View mr="2">
                        <SvgXml xml={dropdown_icon} />
                      </View>
                    }
                  >
                    <Select.Item label="5 per page" value="5 per page" />
                    <Select.Item label="10 per page" value="10 per page" />
                  </Select>
                </View>
                <View
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt="2"
                >
                  <View>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Inventory Minimum
                    </Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter Minimum"
                    />
                  </View>
                  <View>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Inventory Max
                    </Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter Max"
                    />
                  </View>
                </View>
              </View>
            )}

            {/* pricing */}
            {activeTab === "Pricing" && (
              <View>
                <View
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt="2"
                >
                  <View>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Location Title
                    </Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter Location Title"
                    />
                  </View>
                  <View>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      In Fee
                    </Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter In Fee"
                    />
                  </View>
                </View>
                <View
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt="2"
                >
                  <View>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Unload Fee
                    </Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter Unload Fee"
                    />
                  </View>
                  <View>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Transaction Fee
                    </Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter Transaction Fee"
                    />
                  </View>
                </View>
                <View
                  flexDir="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt="2"
                >
                  <View>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Storage Fee
                    </Text>
                    <Input
                      w="181"
                      borderRadius="12"
                      height="40px"
                      backgroundColor="#ffffff"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                      placeholder="Enter Storage Fee"
                    />
                  </View>
                  <View>
                    <Text
                      fontSize="10"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Free Value
                    </Text>
                    <Select
                      width="181"
                      height="40px"
                      borderRadius="12"
                      fontSize="8"
                      borderWidth="2"
                      borderColor="rgba(193, 199, 214, 0.35);"
                      accessibilityLabel="Select Customer"
                      placeholder="Enter Free Value"
                      mt={1}
                      dropdownIcon={
                        <View mr="2">
                          <SvgXml xml={dropdown_icon} />
                        </View>
                      }
                    >
                      <Select.Item label="5 per page" value="5 per page" />
                      <Select.Item label="10 per page" value="10 per page" />
                    </Select>
                  </View>
                </View>
                <View mt="3">
                  <Text
                    fontSize="10"
                    fontFamily="Inter-Regular"
                    fontWeight="400"
                  >
                    Fee Frequency
                  </Text>
                  <Select
                    width="181"
                    height="40px"
                    borderRadius="12"
                    fontSize="8"
                    borderWidth="2"
                    borderColor="rgba(193, 199, 214, 0.35);"
                    accessibilityLabel="Select Customer"
                    placeholder="Enter Free Frequency"
                    mt={1}
                    dropdownIcon={
                      <View mr="2">
                        <SvgXml xml={dropdown_icon} />
                      </View>
                    }
                  >
                    <Select.Item label="5 per page" value="5 per page" />
                    <Select.Item label="10 per page" value="10 per page" />
                  </Select>
                </View>
              </View>
            )}
          </View>

          <View alignSelf="center" mb="100px">
            <View
              width="243"
              height="41px"
              borderRadius="19"
              justifyContent="center"
              alignItems="center"
              backgroundColor="#27C9A9"
            >
              <Text
                fontSize="13"
                fontFamily="Inter-Regular"
                fontWeight="400"
                color="white"
              >
                Create Location
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
