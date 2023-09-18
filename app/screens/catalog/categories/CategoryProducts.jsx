import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, Image, Text, View } from "native-base";
import mockData from "../../../static/catalogData";

export default function CategoryProducts() {
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
  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Image source={{ uri: item.image }} style={styles.productImage} alt="product" />
      <Text style={styles.rowText}>{item.name}</Text>
      <Text style={styles.rowText}>{item.type}</Text>
      <Text style={styles.rowText}>{item.inventory}</Text>
      <Text style={styles.rowText}>${item.price}</Text>
      <Text style={styles.rowText}>{item.channels}</Text>
      <Text style={styles.rowText}>{item.status}</Text>
    </View>
  );
  return (
    <View>
      <View style={styles.listContainer}>
        {renderTableHeader()}
        <FlatList
          data={mockData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
        />
        <View mt="2" mb="6"></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    width: "100%",
    alignSelf: "center",
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
  introText: {
    paddingHorizontal: 10,
    fontFamily: "Inter-Regular",
    fontSize: 12,
    fontWeight: 500,
    color: "#525252",
  },
});
