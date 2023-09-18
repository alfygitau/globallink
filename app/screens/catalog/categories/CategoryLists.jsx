import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { FlatList, Text, View } from "native-base";
import mockData from "../../../static/categoryList";
import Pagination from "../../../components/pagination/Pagination";
import { TouchableOpacity } from "react-native-gesture-handler";
import CategoryProducts from "./CategoryProducts";

export default function CategoryLists({categories}) {
  const [openRow, setOpenRow] = useState(null);

  const toggleRow = (itemId) => {
    setOpenRow((prevOpenRow) => (prevOpenRow === itemId ? null : itemId));
  };

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={styles.headerText}>Category</Text>
      <Text style={styles.headerText}># of Products</Text>
      <Text style={styles.headerText}>% of Revenue</Text>
      <Text style={styles.headerText}>Inventory #</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => toggleRow(item.id)}>
        <View style={styles.tableRow}>
          <Text style={styles.rowText}>{item.category}</Text>
          <Text style={styles.rowText}>{item.numOfProducts}</Text>
          <Text style={styles.rowText}>{item.revenuePercentage}</Text>
          <Text style={styles.rowText}>${item.inventoryCount}</Text>
        </View>
      </TouchableOpacity>
      {openRow === item.id && <CategoryProducts />}
    </View>
  );
  return (
    <ScrollView>
      <View backgroundColor="white">
        <View style={styles.listContainer}>
          {renderTableHeader()}
          <FlatList
            data={mockData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
        <Pagination />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#fff",
    // flex: 1,
    padding: 10,
    width: "95%",
    alignSelf: "center",
    borderColor: "#DFE3E6",
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
    marginBottom: 5,
    backgroundColor: "#ffffff",
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  headerText: {
    flex: 1,
    fontWeight: 500,
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
});
