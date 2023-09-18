import { ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input, Pressable, Select, Text, TextArea, View } from "native-base";
import { dropdown_icon } from "../../../promotions/promotionsSvgs";
import { SvgXml } from "react-native-svg";
import GeneralDetails from "./GeneralDetails";
import ProductAttributes from "./ProductAttributes";
import ProductCustoms from "./ProductCustoms";

export default function ProductDetails({ navigation }) {
  const [activeTab, setActiveTab] = useState("General");
  const [sku, setSku] = useState("");
  const [upc, setUpc] = useState("");
  const [productName, setProductName] = useState("");
  const [asin, setAsin] = useState("");
  const [category, setCategory] = useState("");
  const [serial, setSerial] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [modelId, setModelId] = useState("");
  const [brand, setBrand] = useState("");
  const [collection, setCollection] = useState("");
  const [description, setDescription] = useState("");
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [feature3, setFeature3] = useState("");
  const [feature4, setFeature4] = useState("");
  const [feature5, setFeature5] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [partner, setPartner] = useState("");
  const [minimumOrderQuality, setMinimumOrderQuality] = useState("");
  const [assemblyRequired, setAssemblyRequired] = useState("");
  const [assemblyRequiredLevel, setAssemblyRequiredLevel] = useState("");
  
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <View>
            <Text fontSize="20" fontFamily="Inter-Regular" fontWeight="bold">
              Add Product: General Details
            </Text>
          </View>
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
                  activeTab === "General" ? "none" : "rgba(193, 199, 214, 0.35)"
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
            <TouchableOpacity onPress={() => setActiveTab("Attributes")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth={activeTab === "Attributes" ? "0" : "2"}
                borderColor={
                  activeTab === "Attributes"
                    ? "none"
                    : "rgba(193, 199, 214, 0.35)"
                }
                backgroundColor={
                  activeTab === "Attributes" ? "#27C9A9" : "#ffffff"
                }
                justifyContent="center"
                alignItems="center"
                mr="4"
              >
                <Text
                  color={
                    activeTab === "Attributes"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Attributes
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Custom")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth={activeTab === "Custom" ? "0" : "2"}
                borderColor={
                  activeTab === "Custom" ? "none" : "rgba(193, 199, 214, 0.35)"
                }
                backgroundColor={activeTab === "Custom" ? "#27C9A9" : "#ffffff"}
                justifyContent="center"
                alignItems="center"
                mr="4"
              >
                <Text
                  color={
                    activeTab === "Custom"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Custom
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* general */}
          {activeTab === "General" && <GeneralDetails />}

          {/* attributes */}
          {activeTab === "Attributes" && <ProductAttributes />}

          {/* product customs */}
          {activeTab === "Custom" && <ProductCustoms navigation={navigation} />}
        </View>
      </ScrollView>
    </View>
  );
}
