import { Pressable, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Image, Input, ScrollView, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { export_icon, filter_icon } from "./inventorySvgs";
import { FlatList } from "react-native-gesture-handler";
import mockData from "../../../static/inventoryData";
import { search_icon } from "../../catalog/products/productsSvg";
import Pagination from "../../../components/pagination/Pagination";
import { DataContext } from "../../../context/DataContext";

export default function Dashboard() {
  const { data, setData } = useContext(DataContext);

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text
        style={{
          flex: 1,
          fontWeight: 700,
          textAlign: "left",
          fontSize: 9,
          fontFamily: "Inter-SemiBold",
          color: "#525252",
        }}
      >
        Image
      </Text>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>ONH</Text>
      <Text style={styles.headerText}>OO</Text>
      <Text style={styles.headerText}>L1</Text>
      <Text style={styles.headerText}>Allocated</Text>
      <Text style={styles.headerText}>Consigned</Text>
      <Text style={styles.headerText}>Value</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        alt="inventory"
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
          {item.name}
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
          {item.sku}
        </Text>
      </View>
      <Text style={styles.rowText}>{item.ONH}</Text>
      <Text style={styles.rowText}>{item.OO}</Text>
      <Text style={styles.rowText}>{item.L1}</Text>
      <Text style={styles.rowText}>{item.allocated}</Text>
      <Text style={styles.rowText}>{item.consigned}</Text>
      <Text style={styles.rowText}>${item.value.toFixed(2)}</Text>
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
          <View flexDir="row">
            <View
              width="94px"
              height="69px"
              alignItems="center"
              justifyContent="center"
              borderRadius="19"
              borderWidth="2"
              borderColor="rgba(207, 207, 207, 0.95)"
              style={styles.shadowContainer}
              mr="2"
              flexDir="row"
            >
              <View
                width="50%"
                borderRightWidth="1"
                borderColor="rgba(193, 199, 214, 0.50)"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="#525252" fontSize="22" fontFamily="Inter-SemiBold">
                  37
                </Text>
                <Text color="#525252" fontSize="9" fontFamily="Inter-SemiBold">
                  Active
                </Text>
              </View>
              <View width="50%" alignItems="center" justifyContent="center">
                <Text color="#FF0000" fontSize="22" fontFamily="Inter-SemiBold">
                  3
                </Text>
                <Text color="#525252" fontSize="9" fontFamily="Inter-SemiBold">
                  OOS
                </Text>
              </View>
            </View>
            <View
              width="90px"
              height="69px"
              alignItems="center"
              justifyContent="center"
              borderRadius="19"
              borderWidth="2"
              borderColor="rgba(207, 207, 207, 0.95)"
              style={styles.shadowContainer}
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
                fontSize="8"
                color="#525252"
                fontWeight="500"
                fontFamily="Inter-Regular"
              >
                In Stock Percentage
              </Text>
            </View>
            <View
              width="104px"
              height="69px"
              alignItems="center"
              justifyContent="center"
              borderRadius="19"
              borderWidth="2"
              borderColor="rgba(207, 207, 207, 0.95)"
              style={styles.shadowContainer}
              mr="2"
            >
              <View
                flexDir="row"
                width="95%"
                borderBottomWidth="1"
                borderColor="rgba(193, 199, 214, 0.50)"
              >
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  User
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  Type
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  Date
                </Text>
              </View>
              <View flexDir="row" width="95%">
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  John Doe
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  Bulk
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  1/23/23
                </Text>
              </View>
              <View flexDir="row" width="95%">
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  John Doe
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  Bulk
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  1/23/23
                </Text>
              </View>
              <View flexDir="row" width="95%">
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  John Doe
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  Bulk
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  1/23/23
                </Text>
              </View>
              <View flexDir="row" width="95%">
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  John Doe
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  Bulk
                </Text>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontSize="6"
                  fontFamily="Inter-Regular"
                  flex={1}
                >
                  1/23/23
                </Text>
              </View>
            </View>
            <View
              height="50px"
              justifyContent="space-between"
              alignSelf="center"
            >
              <View
                width="50"
                height="20px"
                borderRadius="10"
                backgroundColor="#F0D262"
                flexDir="row"
                alignItems="center"
                justifyContent="center"
              >
                <View mr="3px">
                  <SvgXml xml={export_icon} />
                </View>
                <Text
                  color="#525252"
                  fontSize="7"
                  fontWeight="400"
                  fontFamily="Inter-Regular"
                >
                  Export
                </Text>
              </View>
              <View
                width="50"
                height="20px"
                borderRadius="10"
                backgroundColor="#F0D262"
                flexDir="row"
                alignItems="center"
                justifyContent="center"
              >
                <View mr="3px">
                  <SvgXml xml={filter_icon} />
                </View>
                <Text
                  color="#525252"
                  fontSize="7"
                  fontWeight="400"
                  fontFamily="Inter-Regular"
                >
                  Filter
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.listContainer}>
            <View>
              <Input
                w="151"
                borderRadius="19"
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
            {renderTableHeader()}
            <FlatList
              data={mockData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.listContent}
            />
            <View mt="3">
              <Pagination />
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
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 4,
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
    color: "rgba(82, 82, 82, 0.75)",
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
    flex: 1,
    fontWeight: 700,
    textAlign: "center",
    fontSize: 8,
    fontFamily: "Inter-SemiBold",
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
    fontWeight: 700,
    color: "#525252",
  },
});
