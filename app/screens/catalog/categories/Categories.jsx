import {
  Alert,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Image,
  Input,
  Pressable,
  Select,
  Text,
  View,
} from "native-base";
import { SvgXml } from "react-native-svg";
import { search_icon } from "../products/productsSvg";
import mockData from "../../../static/categoriesData";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryModal from "./CategoryModal";
import CategoryLists from "./CategoryLists";
import { tick_icon } from "../../Admin/useradmin/userAdminSvgs";
import { dropdown_icon } from "../promotions/promotionsSvgs";
import {
  createCategory,
  createSubCategory,
  getCategories,
  getSubCategories,
  getSubCategoriesOfCategory,
} from "../../../sdk/catalog/category";

export default function Categories({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [activeTab, setActiveTab] = useState("CreateCategory");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({});
  const [subCategoriesOfCategory, setSubCategoriesOfCategory] = useState([]);

  const fetchSubCategories = async (id) => {
    if (openModal) {
      const res = await getSubCategoriesOfCategory(id);
      setSubCategoriesOfCategory(res?.data);
    }
  };

  const handleOpenModal = (category) => {
    setOpenModal(true);
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchSubCategories(selectedCategory?.id);
  }, [selectedCategory, openModal]);

  const closeModal = () => {
    setOpenModal(false);
    setSelectedCategory({});
    setSubCategoriesOfCategory([]);
  };

  console.log(selectedCategory);
  console.log(subCategoriesOfCategory);

  const getAllCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  const getAllSubCategories = async () => {
    const res = await getSubCategories();
    setSubCategories(res.data);
  };

  useEffect(() => {
    getAllCategories();
    getAllSubCategories();
  }, []);

  const handleCreateCategory = async () => {
    try {
      const response = await createCategory({ name: categoryName });
      if (response.status === 200) {
        Alert.alert("Category created");
        setCategoryName("");
        getAllCategories();
        getAllSubCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateSubCategory = async () => {
    try {
      const response = await createSubCategory({
        name: subCategoryName,
        category: category,
      });
      if (response.status === 201) {
        Alert.alert("SubCategory created");
        setSubCategoryName("");
        getAllCategories();
        getAllSubCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text
        width="35%"
        textAlign="left"
        fontSize="9"
        fontFamily="Inter-Regular"
        color="#525252"
      >
        Image
      </Text>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>Type</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <View
        width="40%"
        alignItems="center"
        justifyContent="center"
        flexDir="row"
      >
        <View mr="2">
          <Checkbox
            size="sm"
            borderRadius="100"
            colorScheme="white"
            icon={<SvgXml xml={tick_icon} width={12} height={12} />}
            aria-label="check"
            style={{ transform: [{ scale: 0.7 }] }}
          />
        </View>
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          alt="category"
        />
      </View>
      <Text style={styles.rowText}>{item.name}</Text>
      <Text style={styles.rowText}>{item.type}</Text>
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
          <View mt="2" mb="3">
            <Text fontSize="20" fontWeight="600" fontFamily="Inter-Regular">
              Categories
            </Text>
          </View>
          <View flexDir="row" mt="2" mb="3">
            <TouchableOpacity onPress={() => setActiveTab("CreateCategory")}>
              <View
                width="107px"
                height="29px"
                borderRadius="19"
                borderWidth={activeTab === "CreateCategory" ? "0" : "1"}
                backgroundColor={
                  activeTab === "CreateCategory" ? "#27C9A9" : "#ffffff"
                }
                borderColor={
                  activeTab === "CreateCategory"
                    ? "none"
                    : "rgba(193, 199, 214, 0.35)"
                }
                justifyContent="center"
                alignItems="center"
                mr="4"
              >
                <Text
                  color={
                    activeTab === "CreateCategory"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  Create Category
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setActiveTab("ViewCategory")}>
              <View
                width="107px"
                height="29px"
                borderRadius="19"
                borderWidth="1"
                borderColor={
                  activeTab === "ViewCategory"
                    ? "none"
                    : "rgba(193, 199, 214, 0.35)"
                }
                backgroundColor={
                  activeTab === "ViewCategory" ? "#27C9A9" : "#ffffff"
                }
                justifyContent="center"
                alignItems="center"
              >
                <Text
                  color={
                    activeTab === "ViewCategory"
                      ? "#ffffff"
                      : "rgba(193, 199, 214, 0.50)"
                  }
                  fontSize="10"
                >
                  View Categories
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* activeTab === Create catgeory */}
          {activeTab === "CreateCategory" && (
            <View>
              <View
                mt="2"
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <View>
                  <View mb="1" ml="3px">
                    <Text fontSize="10" fontFamily="Inter-Regular">
                      Name
                    </Text>
                  </View>
                  <View>
                    <Input
                      width="140"
                      height="40px"
                      borderRadius="12"
                      placeholder="Enter Category Name"
                      value={categoryName}
                      onChangeText={(text) => setCategoryName(text)}
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                    />
                  </View>
                </View>
                <View alignSelf="flex-end">
                  <Pressable onPress={handleCreateCategory}>
                    <View
                      width="76"
                      height="40px"
                      backgroundColor="#27C9A9"
                      borderRadius="12"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text
                        color="white"
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        fontWeight="700"
                      >
                        Submit
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View
                mt="2"
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <View>
                  <View mb="1" ml="3px">
                    <Text fontSize="10" fontFamily="Inter-Regular">
                      Category
                    </Text>
                  </View>
                  <Select
                    width="125px"
                    height="40px"
                    borderRadius="12px"
                    fontSize="9"
                    accessibilityLabel="Sales Data"
                    placeholder="Select Category"
                    selectedValue={category}
                    onValueChange={(itemValue) => setCategory(itemValue)}
                    dropdownIcon={
                      <View mr="2">
                        <SvgXml xml={dropdown_icon} />
                      </View>
                    }
                  >
                    {categories.map((item) => (
                      <Select.Item
                        key={item?.id}
                        label={item?.name}
                        value={item?.id}
                      />
                    ))}
                  </Select>
                </View>
                <View>
                  <View mb="1" ml="3px">
                    <Text fontSize="10" fontFamily="Inter-Regular">
                      SubCategory
                    </Text>
                  </View>
                  <View>
                    <Input
                      width="140"
                      height="40px"
                      borderRadius="12"
                      placeholder="Enter SubCategory"
                      value={subCategoryName}
                      onChangeText={(text) => setSubCategoryName(text)}
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                    />
                  </View>
                </View>
                <View alignSelf="flex-end">
                  <Pressable onPress={handleCreateSubCategory}>
                    <View
                      width="76"
                      height="40px"
                      backgroundColor="#27C9A9"
                      borderRadius="12"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text
                        color="white"
                        fontSize="8"
                        fontFamily="Inter-Regular"
                        fontWeight="700"
                      >
                        Connect
                      </Text>
                    </View>
                  </Pressable>
                </View>
              </View>
              <View flexDir="row" mt="2">
                <Text
                  fontSize="8"
                  fontFamily="Inter-Regular"
                  fontStyle="normal"
                  color="#rgba(0, 0, 0, 0.50)"
                  fontWeight="400"
                >
                  Selected Sub-Categories:&nbsp;
                </Text>
                <Text
                  fontSize="8"
                  fontFamily="Inter-Regular"
                  fontStyle="italic"
                  color="#rgba(0, 0, 0, 0.50)"
                  fontWeight="300"
                  width="200"
                >
                  Bedroom, Kitchen, Bathroom, Living Room
                </Text>
              </View>
              <View
                mt="2"
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <View>
                  <View mb="1" ml="3px">
                    <Text fontSize="10" fontFamily="Inter-Regular">
                      Sub-Category
                    </Text>
                  </View>
                  <Select
                    width="125px"
                    height="40px"
                    borderRadius="12px"
                    fontSize="9"
                    accessibilityLabel="Sales Data"
                    placeholder="Select Sub-Category"
                    dropdownIcon={
                      <View mr="2">
                        <SvgXml xml={dropdown_icon} />
                      </View>
                    }
                  >
                    {subCategories.map((item) => (
                      <Select.Item label={item?.name} value={item?.id} />
                    ))}
                  </Select>
                </View>
                <View>
                  <View mb="1" ml="3px">
                    <Text fontSize="10" fontFamily="Inter-Regular">
                      Secondary Sub-Category
                    </Text>
                  </View>
                  <View>
                    <Input
                      width="140"
                      height="40px"
                      borderRadius="12"
                      placeholder="Enter Secondary SubCategory Name"
                      fontSize="10"
                      _focus={{
                        backgroundColor: "#ffffff",
                        borderColor: "rgba(193, 199, 214, 0.35)",
                      }}
                    />
                  </View>
                </View>
                <View alignSelf="flex-end">
                  <View
                    width="76"
                    height="40px"
                    backgroundColor="#27C9A9"
                    borderRadius="12"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text
                      color="white"
                      fontSize="8"
                      fontFamily="Inter-Regular"
                      fontWeight="700"
                    >
                      Connect
                    </Text>
                  </View>
                </View>
              </View>
              <View flexDir="row" mt="2" mb="4">
                <View>
                  <Text
                    fontSize="8"
                    fontFamily="Inter-Regular"
                    fontStyle="normal"
                    color="#rgba(0, 0, 0, 0.50)"
                    fontWeight="400"
                  >
                    Selected Secondary Sub-Categories:&nbsp;
                  </Text>
                </View>
                <View>
                  <Text
                    fontSize="8"
                    fontFamily="Inter-Regular"
                    fontStyle="italic"
                    color="#rgba(0, 0, 0, 0.50)"
                    fontWeight="300"
                    width="170"
                  >
                    Bedroom, Kitchen, Bathroom, Living Room
                  </Text>
                </View>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {categories.map((category) => (
                  <TouchableOpacity key={category?.id} onPress={() => handleOpenModal(category)}>
                    <View
                      width="111"
                      height="35px"
                      borderRadius="19"
                      backgroundColor={
                        selectedCategory.id === category.id
                          ? "#F0D262"
                          : "#27C9A9"
                      }
                      alignItems="center"
                      justifyContent="center"
                      mr="2"
                    >
                      <Text
                        color="white"
                        fontFamily="Inter-Regular"
                        fontSize="10"
                        fontWeight="400"
                      >
                        {category.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <View
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
                alignSelf="center"
                width="100%"
                mt="3"
              >
                <View alignItems="center">
                  <Input
                    w="126"
                    borderRadius="19"
                    height="30px"
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
                <View alignItems="center">
                  <Select
                    width="126"
                    height="30px"
                    borderRadius="19"
                    fontSize="10"
                    accessibilityLabel="Sales Data"
                    placeholder="Select Category"
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
                <View
                  width="87"
                  height="30px"
                  borderRadius="19"
                  backgroundColor="#27C9A9"
                  alignItems="center"
                  justifyContent="center"
                  mr="2"
                >
                  <Text
                    color="white"
                    fontFamily="Inter-Regular"
                    fontSize="10"
                    fontWeight="400"
                  >
                    Submit
                  </Text>
                </View>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.listContainer}>
                  {renderTableHeader()}
                  <FlatList
                    data={mockData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContent}
                  />
                </View>
                <View style={styles.listContainer}>
                  {renderTableHeader()}
                  <FlatList
                    data={mockData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContent}
                  />
                </View>
              </ScrollView>
            </View>
          )}
        </View>
        {/* activeTab === View Category */}
        {activeTab === "ViewCategory" && (
          <ScrollView>
            <View>
              <CategoryLists categories={categories} />
            </View>
          </ScrollView>
        )}
      </ScrollView>
      {openModal && (
        <CategoryModal
          openModal={openModal}
          selectedCategory={selectedCategory}
          subCategoriesOfCategory={subCategoriesOfCategory}
          closeModal={closeModal}
        />
      )}
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
    marginTop: 6,
  },
  productImage: {
    width: 40,
    height: 40,
    marginRight: 5,
    borderRadius: 5,
  },
  rowText: {
    width: "30%",
    textAlign: "center",
    fontSize: 8,
    fontFamily: "Inter-Regular",
    lineHeight: 10,
  },
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#ffffff",
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  headerText: {
    width: "30%",
    textAlign: "center",
    fontSize: 9,
    fontFamily: "Inter-Regular",
    color: "#525252",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderBottomEndRadius: 0,
    height: 60,
  },
  introText: {
    paddingHorizontal: 10,
    fontFamily: "Inter-Regular",
    fontSize: 12,
    fontWeight: 500,
    color: "#525252",
  },
});
