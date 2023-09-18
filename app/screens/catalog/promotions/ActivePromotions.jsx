import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "native-base";
import Pagination from "../../../components/pagination/Pagination";
import mockData from "../../../static/promotionData";

export default function ActivePromotions() {
  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={styles.headerText}>Promotion</Text>
      <Text style={styles.headerText}>Channel</Text>
      <Text style={styles.headerText}>Start Date</Text>
      <Text style={styles.headerText}>End Date</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.tableRow}>
        <Text style={styles.rowText}>{item.promotion}</Text>
        <Text style={styles.rowText}>{item.channel}</Text>
        <Text style={styles.rowText}>{item.startDate}</Text>
        <Text style={styles.rowText}>{item.endDate}</Text>
      </View>
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
