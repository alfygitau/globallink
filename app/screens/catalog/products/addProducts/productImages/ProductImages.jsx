import { Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Image, Input, ScrollView, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../../promotions/promotionsSvgs";
import {
  arrow_left_icon,
  arrow_right_icon,
  delete_inactive_icon,
  heavy_plus_sign,
  photo_image,
  product_tick_icon,
  upload_icon,
  upload_icon_two,
} from "../../productsSvg";
import mockData from "../../../../../static/catalogImageData";
import { FlatList } from "react-native-gesture-handler";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker";
import { useQuery } from "react-query";
import { getChannels } from "../../../../../sdk/catalog/channel";

export default function ProductImages({ navigation }) {
  const [activeTab, setActiveTab] = useState("Add");
  const [imageUrl, setImageUrl] = useState("");
  const [channels, setChannels] = useState([]);
  const [imageDimensions, setImageDimensions] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchChannels = async () => {
      const res = await getChannels();
      setChannels(res?.data);
    };
    fetchChannels();
  }, []);

  async function browseFiles() {
    try {
      let output = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });

      if (!output?.canceled) {
        const fileSize = output?.base64.length * (3 / 4) - 2;
        setImageSize(fileSize);
        setImageUrl(output?.assets[0]?.uri);
        setImages((prev) => ({
          ...prev,
          url: output?.assets[0]?.uri,
          imageType: "Primary Image",
          height: imageDimensions?.height,
          width: imageDimensions?.width,
        }));
      }
    } catch (error) {
      console.error("Error picking video:", error);
    }
  }

  console.log(images);

  useEffect(() => {
    if (imageUrl) {
      Image.getSize(imageUrl, (width, height) => {
        setImageDimensions({ width, height });
      });
    }
  }, [imageUrl]);

  const renderImageCard = ({ item }) => (
    <View>
      <View width="340" alignSelf="center">
        <Text fontSize="12" fontFamily="Inter-Regular" fontWeight="400">
          Primary Image
        </Text>
      </View>
      <View
        width="340"
        height="70px"
        borderWidth="2"
        borderColor="rgba(193, 199, 214, 0.35)"
        borderRadius="12"
        alignSelf="center"
        backgroundColor="white"
        flexDir="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <View
          width="46px"
          height="46px"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            source={require("../../../../../../assets/dinning.png")}
            resizeMode="cover"
            alt="product"
          />
        </View>
        <View>
          <Text fontSize="15" fontFamily="Inter-Regular" fontWeight="400">
            G22785.WB.jpg
          </Text>
          <View flexDir="row" alignSelf="center">
            <Text
              color="rgba(0, 0, 0, 0.50)"
              fontSize="12"
              fontFamily="Inter-Regular"
              fontWeight="400"
              mr="2"
            >
              500 KB
            </Text>
            <Text
              mr="2"
              color="rgba(0, 0, 0, 0.50)"
              fontSize="12"
              fontFamily="Inter-Regular"
              fontWeight="400"
            >
              1000 x 1000
            </Text>
          </View>
        </View>
        <View>
          <SvgXml xml={delete_inactive_icon} />
        </View>
      </View>
    </View>
  );
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <View mb="2">
            <Text fontSize="20" fontWeight="bold" fontFamily="Inter-Regular">
              Add Product: Images
            </Text>
          </View>
          <View flexDir="row" mb="3" justifyContent="space-between">
            <TouchableOpacity onPress={() => setActiveTab("Add")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth={activeTab === "Add" ? "0" : "2"}
                backgroundColor={activeTab === "Add" ? "#27C9A9" : "#ffffff"}
                borderColor={
                  activeTab === "Add" ? "none" : "rgba(193, 199, 214, 0.35)"
                }
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  color={
                    activeTab === "Add"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Add
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("Preview")}>
              <View
                width="87px"
                height="29px"
                borderRadius="19"
                borderWidth="2"
                borderColor={
                  activeTab === "Preview" ? "none" : "rgba(193, 199, 214, 0.35)"
                }
                backgroundColor={
                  activeTab === "Preview" ? "#27C9A9" : "#ffffff"
                }
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  color={
                    activeTab === "Preview"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Preview
                </Text>
              </View>
            </TouchableOpacity>
            <View>
              <Select
                width="171"
                borderColor="rgba(193, 199, 214, 0.35)"
                borderWidth="2"
                height="30px"
                borderRadius="12"
                fontSize="10"
                accessibilityLabel="Sales Data"
                placeholder="Select Product Channel"
                dropdownIcon={
                  <View mr="2">
                    <SvgXml xml={dropdown_icon} />
                  </View>
                }
              >
                {channels?.map((channel) => (
                  <Select.Item
                    key={channel?.id}
                    label={channel?.name}
                    value={channel?.id}
                  />
                ))}
              </Select>
            </View>
          </View>

          {activeTab === "Add" && (
            <>
              <View alignSelf="center" mt="2" mb="1">
                <Pressable onPress={browseFiles}>
                  <View
                    width="358"
                    height="176px"
                    borderWidth="4"
                    borderStyle="dashed"
                    borderRadius="19"
                    borderColor="rgba(193, 199, 214, 0.50)"
                    backgroundColor="rgba(193, 199, 214, 0.15)"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {imageUrl.length > 0 ? (
                      <Image
                        alt="product"
                        source={{ uri: imageUrl }}
                        resizeMode="contain"
                        width="90%"
                        height="80%"
                        borderRadius="19"
                      />
                    ) : (
                      <Image
                        alt="product"
                        source={require("../../../../../../assets/table.png")}
                        resizeMode="cover"
                        width="109px"
                        height="69px"
                      />
                    )}
                    {!imageUrl.length && (
                      <View flexDir="row" alignItems="center">
                        <View mr="2">
                          <SvgXml xml={upload_icon_two} />
                        </View>
                        <Text
                          color="rgba(0, 0, 0, 0.50)"
                          fontWeight="400"
                          fontFamily="Inter-Regular"
                          fontSize="10"
                        >
                          Add your template here. or <Text>Browse</Text>
                        </Text>
                      </View>
                    )}
                  </View>
                </Pressable>
              </View>

              <View flexDir="row" width="95%" alignSelf="center" mb="1">
                <Text
                  mr="2"
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="8"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                >
                  {imageDimensions?.height
                    ? `${imageDimensions?.height} x ${imageDimensions?.width}`
                    : "0 x 0"}
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="8"
                  fontFamily="Inter-Regular"
                  fontWeight="400"
                >
                  {imageSize ? `${imageSize} KB` : `0 KB`}
                </Text>
              </View>
              <View flexDir="row" mb="2" justifyContent="space-between">
                <Select
                  width="143"
                  borderWidth="2"
                  height="34px"
                  borderRadius="12"
                  fontSize="10"
                  accessibilityLabel="Sales Data"
                  placeholder="Select Image Type"
                  dropdownIcon={
                    <View mr="2">
                      <SvgXml xml={dropdown_icon} />
                    </View>
                  }
                >
                  <Select.Item label="White Background | WB" value="WB" />
                  <Select.Item label="Room Scene | RS" value="RS" />
                  <Select.Item label="Product Dimension | PD" value="PD" />
                  <Select.Item label="Swatch | SWATCH" value="SWATCH" />
                  <Select.Item label="Alternate | ALT" value="ALT" />
                  <Select.Item label="Raw Image | RAW" value="RAW" />
                </Select>
                <View
                  width="41"
                  height="34px"
                  backgroundColor="#27C9A9"
                  borderRadius="12"
                  justifyContent="center"
                  alignItems="center"
                >
                  <SvgXml xml={product_tick_icon} />
                </View>
                <View
                  width="75"
                  height="34px"
                  backgroundColor="#F0D262"
                  borderRadius="12"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text color="white" fontFamily="Inter-Regular" fontSize="10">
                    Assign
                  </Text>
                </View>
                <View
                  width="75"
                  height="34px"
                  backgroundColor="#27C9A9"
                  borderRadius="12"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text color="white" fontFamily="Inter-Regular" fontSize="10">
                    Resize Image
                  </Text>
                </View>
              </View>
            </>
          )}

          {activeTab === "Preview" && (
            <View alignSelf="center">
              <View width="356" height="206px" borderRadius="16">
                <Image
                  alt="product"
                  source={require("../../../../../../assets/table.png")}
                  resizeMode="contain"
                />
              </View>
              <View flexDir="row" mt="3" mb="3" alignSelf="center">
                <View alignItems="center" justifyContent="center" mr="3">
                  <SvgXml xml={arrow_left_icon} />
                </View>
                <View width="80%" alignSelf="center">
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <View
                      width="53px"
                      height="49px"
                      borderRadius="12"
                      borderWidth="1"
                      borderColor="rgba(193, 199, 214, 0.50)"
                      mr="3"
                    >
                      <Image
                        alt="product"
                        source={require("../../../../../../assets/dinning.png")}
                        style={{ width: 53, height: 49, borderRadius: 12 }}
                      />
                    </View>
                    <View
                      width="53px"
                      height="49px"
                      borderRadius="12"
                      borderWidth="4"
                      borderColor="rgba(193, 199, 214, 0.50)"
                      borderStyle="dashed"
                      alignItems="center"
                      justifyContent="center"
                      mr="3"
                    >
                      <SvgXml xml={heavy_plus_sign} />
                    </View>
                    <View
                      width="53px"
                      height="49px"
                      borderRadius="12"
                      borderWidth="4"
                      borderColor="rgba(193, 199, 214, 0.50)"
                      borderStyle="dashed"
                      alignItems="center"
                      justifyContent="center"
                      mr="3"
                    >
                      <SvgXml xml={heavy_plus_sign} />
                    </View>
                    <View
                      width="53px"
                      height="49px"
                      borderRadius="12"
                      borderWidth="4"
                      borderColor="rgba(193, 199, 214, 0.50)"
                      borderStyle="dashed"
                      alignItems="center"
                      justifyContent="center"
                      mr="3"
                    >
                      <SvgXml xml={heavy_plus_sign} />
                    </View>
                    <View
                      width="53px"
                      height="49px"
                      borderRadius="12"
                      borderWidth="4"
                      borderColor="rgba(193, 199, 214, 0.50)"
                      borderStyle="dashed"
                      alignItems="center"
                      justifyContent="center"
                      mr="3"
                    >
                      <SvgXml xml={heavy_plus_sign} />
                    </View>
                    <View
                      width="53px"
                      height="49px"
                      borderRadius="12"
                      borderWidth="4"
                      borderColor="rgba(193, 199, 214, 0.50)"
                      borderStyle="dashed"
                      alignItems="center"
                      justifyContent="center"
                      mr="3"
                    >
                      <SvgXml xml={heavy_plus_sign} />
                    </View>
                  </ScrollView>
                </View>
                <View alignItems="center" justifyContent="center" ml="3">
                  <SvgXml xml={arrow_right_icon} />
                </View>
              </View>
            </View>
          )}

          <View
            borderBottomWidth="2"
            borderColor="rgba(193, 199, 214, 0.50)"
            mt="4"
            mb="4"
          />

          {/* image lists */}
          <View height="230px">
            <FlatList
              data={mockData}
              renderItem={renderImageCard}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>

          <View
            flexDir="row"
            alignItems="center"
            alignSelf="center"
            mt="8"
            mb="6"
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
            <Pressable
              onPress={() => navigation.navigate("CatalogAddProductVideos")}
            >
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
      </ScrollView>
    </View>
  );
}
