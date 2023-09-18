import { ScrollView } from "react-native";
import React from "react";
import {
  Checkbox,
  FlatList,
  Image,
  Input,
  Pressable,
  Select,
  Text,
  View,
} from "native-base";
import { search_icon } from "../products/productsSvg";
import { SvgXml } from "react-native-svg";
import { StyleSheet } from "react-native";
import mockData from "../../../static/categoriesData";
import { tick_icon } from "../../Admin/useradmin/userAdminSvgs";
import { dropdown_icon } from "../promotions/promotionsSvgs";

export default function CreateCollection() {
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
    <View backgroundColor="white">
      <View mb="2">
        <Text>Create</Text>
      </View>
      <View flexDir="row" justifyContent="space-between" alignItems="center">
        <Input
          width="268"
          height="40px"
          borderRadius="12"
          placeholder="Insert Collection Name"
          fontSize="10"
          _focus={{
            backgroundColor: "#ffffff",
            borderColor: "rgba(193, 199, 214, 0.35)",
          }}
        />
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
      </View>
      <View
        mt="4"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
      >
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
        <Select
          width="126"
          height="30px"
          borderRadius="19"
          fontSize="10"
          accessibilityLabel="Sales Data"
          placeholder="Products"
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
