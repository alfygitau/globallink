import { FlatList, ScrollView, StyleSheet } from "react-native";
import React from "react";
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
import { dropdown_icon } from "../promotions/promotionsSvgs";
import { tick_icon } from "../../Admin/useradmin/userAdminSvgs";
import { search_icon } from "../products/productsSvg";
import mockData from "../../../static/categoriesData";

export default function CreatePresentations() {
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
    <View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Template Name
          </Text>
          <Input
            width="181"
            height="40px"
            borderRadius="16"
            placeholder="Template Name"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Products Per Page
          </Text>
          <Select
            width="181"
            height="40px"
            borderRadius="19"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="Select Number"
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
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Template
          </Text>
          <Select
            width="181"
            height="40px"
            borderRadius="19"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="Select Template"
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
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Cover Image
          </Text>
          <Select
            width="181"
            height="40px"
            borderRadius="19"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="Select Cover Image"
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

      <View
        width="370"
        height="224px"
        backgroundColor="white"
        borderRadius="10"
        p="2"
        justifyContent="space-between"
      >
        <View>
          <View>
            <Text fontFamily="Inter-Regular" fontWeight="500" fontSize="10">
              Select Attributes
            </Text>
          </View>
          <View flexDir="row" alignItems="center" flexWrap="wrap">
            <View flexDir="row" alignItems="center" width="30%" mb="2">
              <Checkbox
                size="sm"
                borderRadius="100"
                colorScheme="white"
                icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                aria-label="check"
                mr="2"
              />
              <Text fontSize="8" fontWeight="500" fontFamily="Inter-Regular">
                SKU
              </Text>
            </View>
            <View flexDir="row" alignItems="center" width="30%" mb="2">
              <Checkbox
                size="sm"
                borderRadius="100"
                colorScheme="white"
                icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                aria-label="check"
                mr="2"
              />
              <Text fontSize="8" fontWeight="500" fontFamily="Inter-Regular">
                Product Name
              </Text>
            </View>
            <View flexDir="row" alignItems="center" width="30%" mb="2">
              <Checkbox
                size="sm"
                borderRadius="100"
                colorScheme="white"
                icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                aria-label="check"
                mr="2"
              />
              <Text fontSize="8" fontWeight="500" fontFamily="Inter-Regular">
                Description
              </Text>
            </View>
            <View flexDir="row" alignItems="center" width="30%" mb="2">
              <Checkbox
                size="sm"
                borderRadius="100"
                colorScheme="white"
                icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                aria-label="check"
                mr="2"
              />
              <Text fontSize="8" fontWeight="500" fontFamily="Inter-Regular">
                Dimensions
              </Text>
            </View>
            <View flexDir="row" alignItems="center" width="30%" mb="2">
              <Checkbox
                size="sm"
                borderRadius="100"
                colorScheme="white"
                icon={<SvgXml xml={tick_icon} width={12} height={12} />}
                aria-label="check"
                mr="2"
              />
              <Text fontSize="8" fontWeight="500" fontFamily="Inter-Regular">
                MCQ
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            textAlign="center"
            color="#525252"
            fontSize="8"
            fontFamily="Inter-Regular"
            fontWeight="300"
          >
            Select 7 More Attributes you want to be displayed{" "}
          </Text>
        </View>
      </View>
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
