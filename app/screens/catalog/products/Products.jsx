import { Image, ScrollView, StyleSheet, Animated } from "react-native";
import React, { useEffect, useState } from "react";
import { Input, Pressable, Select, Spinner, Text, View } from "native-base";
import mockData from "../../../static/catalogData";
import Pagination from "../../../components/pagination/Pagination";
import { SvgXml } from "react-native-svg";
import { contact_login_icon } from "../../login/loginSvgs";
import { delete_icon, new_edit_icon, search_icon } from "./productsSvg";
import { FlatList, Swipeable } from "react-native-gesture-handler";
import { edit_icon } from "../../Admin/companyDetails/companyDetailssvgs";
import { dropdown_icon } from "../promotions/promotionsSvgs";
import { shadowStyle } from "../../../globalStyles/Styles";
import {
  deleteProduct,
  getProducts,
  getProductsOfChannel,
} from "../../../sdk/catalog/products";
import { getChannels } from "../../../sdk/catalog/channel";

export default function Products({ navigation }) {
  const [products, setProducts] = useState([]);
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState("5");

  const handleEdit = async (id) => {
    navigation.navigate("CatalogEditProduct", { productId: id });
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / Number(productsPerPage));
  const indexOfLastProduct = currentPage * Number(productsPerPage);
  const indexOfFirstProduct = indexOfLastProduct - Number(productsPerPage);
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const fetchChannels = async () => {
    const res = await getChannels();
    const masterChannel = res.data.find((channel) => channel.name === "Master");
    if (masterChannel) {
      setSelectedChannel(masterChannel.id);
    }
    setChannels(res?.data);
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    if (!selectedChannel) {
      return;
    }
    const res = await getProductsOfChannel(selectedChannel);
    console.log(res);
    setProducts(res?.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedChannel]);

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={styles.headerText}>Image</Text>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>Type</Text>
      <Text style={styles.headerText}>Inventory</Text>
      <Text style={styles.headerText}>Price</Text>
      <Text style={styles.headerText}>Channels</Text>
      <Text style={styles.headerText}>Status</Text>
    </View>
  );
  const renderItem = ({ item }) => {
    const renderRightActions = (id, progress, dragX) => {
      const scale = dragX.interpolate({
        inputRange: [-110, 0],
        outputRange: [1, 0],
        extrapolate: "clamp",
      });
      return (
        <Animated.View style={{ transform: [{ scale }] }}>
          <View
            flexDir="row"
            justifyContent="center"
            alignItems="center"
            zIndex="10"
          >
            <Pressable onPress={() => handleEdit(id)}>
              <View
                backgroundColor="#27C9A9"
                height="65px"
                width="55px"
                alignItems="center"
                justifyContent="center"
                mr="1px"
              >
                <SvgXml xml={new_edit_icon} />
              </View>
            </Pressable>
            <Pressable onPress={() => handleDelete(id)}>
              <View
                backgroundColor="#FF0000"
                height="65px"
                width="55px"
                alignItems="center"
                justifyContent="center"
              >
                <SvgXml xml={delete_icon} />
              </View>
            </Pressable>
          </View>
        </Animated.View>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(item?.id, progress, dragX)
        }
      >
        <Pressable
          onPress={() =>
            navigation.navigate("CatalogViewProductDetails", {
              productId: item?.id,
            })
          }
        >
          <View style={styles.tableRow}>
            <Image
              source={{
                uri:
                  item?.images.length > 0
                    ? item?.images[0]?.image
                    : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
              }}
              style={styles.productImage}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 8,
                  fontFamily: "Inter-Regular",
                  lineHeight: 10,
                }}
              >
                {item?.name}
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 7,
                  fontFamily: "Inter-Regular",
                  lineHeight: 10,
                  color: "rgba(82, 82, 82, 0.50)",
                }}
              >
                {item?.sku}
              </Text>
            </View>
            <Text style={styles.rowText}>{item?.category_details?.name}</Text>
            <Text style={styles.rowText}>{item?.quantity}</Text>
            <Text style={styles.rowText}>${item?.cost}</Text>
            <Text style={styles.rowText}>7</Text>
            <Text style={styles.rowText}>Active</Text>
          </View>
        </Pressable>
      </Swipeable>
    );
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
          <View
            flexDir="row"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="center"
            width="100%"
            mt="3"
          >
            <View
              width="80px"
              height="64px"
              alignItems="center"
              justifyContent="center"
              borderRadius="19"
              borderWidth="2"
              borderColor="rgba(207, 207, 207, 0.25)"
              style={shadowStyle}
              backgroundColor="white"
              mr="2"
            >
              <Text
                fontSize="24"
                color="#525252"
                fontWeight="500"
                fontFamily="Inter-Regular"
              >
                37
              </Text>
              <Text
                fontSize="9"
                color="#525252"
                fontWeight="500"
                fontFamily="Inter-Regular"
              >
                Active
              </Text>
            </View>
            <View
              width="80px"
              height="64px"
              alignItems="center"
              justifyContent="center"
              borderRadius="19"
              borderWidth="1"
              backgroundColor="white"
              mr="2"
              borderColor="rgba(207, 207, 207, 0.25)"
              style={shadowStyle}
            >
              <Text
                fontSize="24"
                color="#F00"
                fontWeight="500"
                fontFamily="Inter-Regular"
              >
                3
              </Text>
              <Text
                fontSize="9"
                color="#525252"
                fontWeight="500"
                fontFamily="Inter-Regular"
              >
                Out of Stock
              </Text>
            </View>
            <View
              width="80px"
              height="64px"
              alignItems="center"
              justifyContent="center"
              borderRadius="19"
              borderWidth="1"
              borderColor="rgba(207, 207, 207, 0.25)"
              backgroundColor="white"
              style={[shadowStyle]}
              mr="2"
            >
              <Text
                fontSize="24"
                color="#27C9A9"
                fontWeight="500"
                fontFamily="Inter-Regular"
              >
                81%
              </Text>
              <Text
                fontSize="9"
                color="#525252"
                fontWeight="500"
                fontFamily="Inter-Regular"
              >
                In Stock %
              </Text>
            </View>
            <View justifyContent="space-between">
              <Pressable
                onPress={() => navigation.navigate("CatalogBulkUpload")}
              >
                <View
                  width="79px"
                  height="30px"
                  borderRadius="19"
                  backgroundColor="#525252"
                  justifyContent="center"
                  alignItems="center"
                  mb="1"
                >
                  <Text
                    fontSize="10"
                    color="#ffffff"
                    fontWeight="500"
                    fontFamily="Inter-Regular"
                  >
                    Bulk Upload
                  </Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("CatalogAddProductDetails")}
              >
                <View
                  width="79px"
                  height="30px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    fontSize="10"
                    color="#ffffff"
                    fontWeight="500"
                    fontFamily="Inter-Regular"
                  >
                    Add Product
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View>
            <View style={styles.listContainer}>
              <View
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
                alignSelf="center"
                width="100%"
              >
                <View alignItems="center" width="48%">
                  <Input
                    w="100%"
                    borderColor="rgba(193, 199, 214, 0.35)"
                    borderWidth="2"
                    borderRadius="12"
                    height="30px"
                    fontSize="10"
                    backgroundColor="#ffffff"
                    _focus={{
                      backgroundColor: "#ffffff",
                      borderColor: "rgba(193, 199, 214, 0.35)",
                    }}
                    InputRightElement={
                      <Pressable>
                        <View mr="2">
                          <SvgXml xml={search_icon} />
                        </View>
                      </Pressable>
                    }
                    placeholder="Search"
                  />
                </View>
                <View alignItems="center" width="48%">
                  <Select
                    width="100%"
                    borderColor="rgba(193, 199, 214, 0.35)"
                    borderWidth="2"
                    height="30px"
                    borderRadius="12"
                    fontSize="10"
                    accessibilityLabel="Sales Data"
                    placeholder="Select Product Channel"
                    selectedValue={selectedChannel}
                    onValueChange={(itemValue) => setSelectedChannel(itemValue)}
                    dropdownIcon={
                      <View mr="2">
                        <SvgXml xml={dropdown_icon} />
                      </View>
                    }
                  >
                    {channels.map((channel) => (
                      <Select.Item
                        key={channel?.id}
                        label={channel?.name}
                        value={channel?.id}
                      />
                    ))}
                  </Select>
                </View>
              </View>
              {renderTableHeader()}
              <View style={styles.flatlistContainer}>
                {loading ? (
                  <Spinner size="lg" color="#27C9A9" />
                ) : (
                  <>
                    {products?.length > 0 ? (
                      <FlatList
                        data={currentProducts}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={styles.listContent}
                      />
                    ) : (
                      <Text textAlign="center" my="2">
                        No record of products
                      </Text>
                    )}
                  </>
                )}
              </View>
              <View mt="2" mb="6">
                <Pagination
                  setCurrentPage={setCurrentPage}
                  handlePreviousPage={handlePreviousPage}
                  handleNextPage={handleNextPage}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setProductsPerPage={setProductsPerPage}
                  productsPerPage={productsPerPage}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: "rgba(0, 0, 0, 0.10)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  listContainer: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    width: "100%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#DFE3E6",
    borderRadius: 19,
    marginTop: 20,
    height: 600,
  },
  flatlistContainer: {
    height: 450,
  },
  productImage: {
    width: 40,
    height: 40,
    marginRight: 5,
    borderRadius: 5,
  },
  rowText: {
    flex: 1,
    textAlign: "center",
    fontSize: 8,
    fontFamily: "Inter-Regular",
    lineHeight: 10,
  },
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  headerText: {
    flex: 1,
    fontWeight: 700,
    textAlign: "center",
    fontSize: 9,
    fontFamily: "Inter-Regular",
    color: "#525252",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderBottomEndRadius: 0,
    height: 65,
  },
  introText: {
    paddingHorizontal: 10,
    fontFamily: "Inter-Regular",
    fontSize: 12,
    fontWeight: 500,
    color: "#525252",
  },
});
