import { Alert, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import CustomerGeneralDetails from "./CustomerGeneralDetails";
import CustomerContacts from "./CustomerContacts";
import CustomerBanking from "./CustomerBanking";
import CustomerShipping from "./CustomerShipping";
import CustomerLocation from "./CustomerLocation";
import * as ImagePicker from "expo-image-picker";
import { createCustomer } from "../../../sdk/customer/customer";

export default function CreateCustomer({ navigation }) {
  const [activeTab, setActiveTab] = useState("General");
  const [file, setFile] = useState({});

  const browseLogo = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result?.cancelled) {
        console.log(result?.assets[0]);
        setFile(result?.assets[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const screenHeight = Dimensions.get("window").height;
  const iosHeight = Number(screenHeight) - 184;
  const androidHeight = Number(screenHeight) - 124;

  const [shippingDetails, setShippingDetails] = useState({
    address_1: "",
    address_2: "",
    region: "",
    dropship: "",
    city: "",
    preferred_carrier: "",
    zip_code: "",
    country: "",
    ship_discount: "",
    ship_allowance: 0,
  });

  const [contactDetails, setContactDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    wechat: "",
    whatsapp: "",
    primary_language: "",
    secondary_language: "",
    phone: "",
  });

  const [generalInfo, setGeneralInfo] = useState({
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",
    company: "",
  });

  const [bankingDetails, setBankingDetails] = useState({
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
    state: "",
  });

  const [locationDetails, setLocationDetails] = useState({
    title: "",
    city: "",
    address_1: "",
    state: "",
    address_2: "",
    country: "",
    contact: "",
    phone: "",
    email: "",
    postal_code: "",
    inventory_minimum: 0,
    inventory_maximum: 0,
  });

  const [allowances, setAllowances] = useState({
    shipment_parameter: "",
    preferred_carrier: "",
  });

  const formData = {
    address_1: generalInfo.address_1,
    address_2: generalInfo.address_2,
    city: generalInfo.city,
    state: generalInfo.state,
    postal_code: generalInfo.postal_code,
    country: generalInfo.country,
    company: generalInfo.company,
    contacts: {
      first_name: contactDetails.first_name,
      last_name: contactDetails.last_name,
      email: contactDetails.email,
      wechat: contactDetails.wechat,
      whatsapp: contactDetails.whatsapp,
      primary_language: contactDetails.primary_language,
      secondary_language: contactDetails.secondary_language,
      phone: contactDetails.phone,
    },
    shipping: {
      address_1: shippingDetails.address_1,
      address_2: shippingDetails.address_2,
      region: shippingDetails.region,
      dropship: shippingDetails.dropship,
      city: shippingDetails.city,
      preferred_carrier: shippingDetails.preferred_carrier,
      zip_code: shippingDetails.zip_code,
      country: shippingDetails.country,
      ship_discount: shippingDetails.ship_discount,
      ship_allowance: shippingDetails.ship_allowance,
    },
    banking: {
      payment_type: bankingDetails.payment_type,
      bank_address: shippingDetails.address_1,
      secondary_bank_address: shippingDetails.address_2,
      account_no: bankingDetails.account_no,
      routing_no: bankingDetails.routing_no,
      account_type: bankingDetails.account_type,
      card_number: bankingDetails.card_number,
      expiry_month: bankingDetails.expiry_month,
      expiry_year: bankingDetails.expiry_year,
      zip_code: bankingDetails.zip_code,
      cvc_code: bankingDetails.cvc_code,
      card_holder: bankingDetails.card_holder,
      custom_payment_terms: bankingDetails.custom_payment_terms,
      payment_terms: bankingDetails.payment_terms,
    },
    location: {
      title: locationDetails.title,
      city: locationDetails.city,
      address: locationDetails.address_1,
      state: locationDetails.state,
      address_2: locationDetails.address_2,
      country: locationDetails.country,
      contact: locationDetails.contact,
      phone: locationDetails.phone,
      email: locationDetails.email,
      postal_code: locationDetails.postal_code,
      inventory_minimum: locationDetails.inventory_minimum,
      inventory_maximum: locationDetails.inventory_maximum,
    },
    allowances: [
      {
        shipment_parameter: allowances.shipment_parameter,
        preferred_carrier: allowances.preferred_carrier,
      },
    ],
  };

  const handleCreateCustomer = async () => {
    try {
      let res = await createCustomer(file, JSON.stringify(formData));
      console.log(res?.data);
      if (res?.status === 201 || res?.status === 200) {
        Alert.alert("Customer created");
      }
      setGeneralInfo({
        address_1: "",
        address_2: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
        company: "",
      });
      setLocationDetails({
        title: "",
        city: "",
        address_1: "",
        state: "",
        address_2: "",
        country: "",
        contact: "",
        phone: "",
        email: "",
        postal_code: "",
        inventory_minimum: 0,
        inventory_maximum: 0,
      });
      setBankingDetails({
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
        state: "",
      });
      setShippingDetails({
        address_1: "",
        address_2: "",
        region: "",
        dropship: "",
        city: "",
        preferred_carrier: "",
        zip_code: "",
        country: "",
        ship_discount: "",
        ship_allowance: 0,
      });

      setContactDetails({
        first_name: "",
        last_name: "",
        email: "",
        wechat: "",
        whatsapp: "",
        primary_language: "",
        secondary_language: "",
        phone: "",
      });
      setFile("");
    } catch (error) {
      console.log("error", error);
      Alert.alert(error?.detail || error?.error);
    }
  };

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
            <View>
              <Text fontFamily="Inter-Bold" fontSize="20">
                Create Customer
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View flexDir="row" mt="2" mb="3">
                <TouchableOpacity onPress={() => setActiveTab("General")}>
                  <View
                    width="107px"
                    height="29px"
                    borderRadius="19"
                    borderWidth={activeTab === "General" ? "0" : "2"}
                    backgroundColor={
                      activeTab === "General" ? "#27C9A9" : "#ffffff"
                    }
                    borderColor={
                      activeTab === "General"
                        ? "none"
                        : "rgba(193, 199, 214, 0.35)"
                    }
                    justifyContent="center"
                    alignItems="center"
                    mr="4"
                  >
                    <Text
                      color={
                        activeTab === "General"
                          ? "#ffffff"
                          : "rgba(193, 199, 214, 0.50)"
                      }
                      fontSize="10"
                    >
                      General
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab("Contact Info")}>
                  <View
                    width="87px"
                    height="29px"
                    borderRadius="19"
                    borderWidth={activeTab === "Contact Info" ? "0" : "2"}
                    borderColor={
                      activeTab === "Contact Info"
                        ? "none"
                        : "rgba(193, 199, 214, 0.35)"
                    }
                    backgroundColor={
                      activeTab === "Contact Info" ? "#27C9A9" : "#ffffff"
                    }
                    justifyContent="center"
                    alignItems="center"
                    mr="4"
                  >
                    <Text
                      color={
                        activeTab === "Contact Info"
                          ? "#ffffff"
                          : "rgba(193, 199, 214, 0.50)"
                      }
                      fontSize="10"
                    >
                      Contact Info
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab("Banking")}>
                  <View
                    width="87px"
                    height="29px"
                    borderRadius="19"
                    borderWidth={activeTab === "Banking" ? "0" : "2"}
                    borderColor={
                      activeTab === "Banking"
                        ? "none"
                        : "rgba(193, 199, 214, 0.35)"
                    }
                    backgroundColor={
                      activeTab === "Banking" ? "#27C9A9" : "#ffffff"
                    }
                    justifyContent="center"
                    alignItems="center"
                    mr="4"
                  >
                    <Text
                      color={
                        activeTab === "Banking"
                          ? "#ffffff"
                          : "rgba(193, 199, 214, 0.50)"
                      }
                      fontSize="10"
                    >
                      Banking
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab("Shipping")}>
                  <View
                    width="87px"
                    height="29px"
                    borderRadius="19"
                    borderWidth={activeTab === "Shipping" ? "0" : "2"}
                    borderColor={
                      activeTab === "Shipping"
                        ? "none"
                        : "rgba(193, 199, 214, 0.35)"
                    }
                    backgroundColor={
                      activeTab === "Shipping" ? "#27C9A9" : "#ffffff"
                    }
                    justifyContent="center"
                    alignItems="center"
                    mr="4"
                  >
                    <Text
                      color={
                        activeTab === "Shipping"
                          ? "#ffffff"
                          : "rgba(193, 199, 214, 0.50)"
                      }
                      fontSize="10"
                    >
                      Shipping
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab("Location")}>
                  <View
                    width="87px"
                    height="29px"
                    borderRadius="19"
                    borderWidth={activeTab === "Location" ? "0" : "2"}
                    borderColor={
                      activeTab === "Location"
                        ? "none"
                        : "rgba(193, 199, 214, 0.35)"
                    }
                    backgroundColor={
                      activeTab === "Location" ? "#27C9A9" : "#ffffff"
                    }
                    justifyContent="center"
                    alignItems="center"
                    mr="4"
                  >
                    <Text
                      color={
                        activeTab === "Location"
                          ? "#ffffff"
                          : "rgba(193, 199, 214, 0.50)"
                      }
                      fontSize="10"
                    >
                      Location Info.
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>

            {activeTab === "General" && (
              <CustomerGeneralDetails
                generalInfo={generalInfo}
                setGeneralInfo={setGeneralInfo}
                browseLogo={browseLogo}
                file={file}
                navigation={navigation}
                setActiveTab={setActiveTab}
              />
            )}

            {activeTab === "Contact Info" && (
              <CustomerContacts
                contactDetails={contactDetails}
                setContactDetails={setContactDetails}
                navigation={navigation}
                setActiveTab={setActiveTab}
              />
            )}

            {activeTab === "Banking" && (
              <CustomerBanking
                bankingDetails={bankingDetails}
                setBankingDetails={setBankingDetails}
                navigation={navigation}
                setActiveTab={setActiveTab}
              />
            )}

            {activeTab === "Shipping" && (
              <CustomerShipping
                shippingDetails={shippingDetails}
                allowances={allowances}
                setShippingDetails={setShippingDetails}
                setAllowances={setAllowances}
                navigation={navigation}
                setActiveTab={setActiveTab}
              />
            )}

            {activeTab === "Location" && (
              <CustomerLocation
                locationDetails={locationDetails}
                setLocationDetails={setLocationDetails}
                navigation={navigation}
                setActiveTab={setActiveTab}
                handleCreateCustomer={handleCreateCustomer}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
