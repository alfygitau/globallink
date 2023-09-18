import { FlatList, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "native-base";
import Pagination from "../../../components/pagination/Pagination";
import mockData from "../../../static/presentationData";
import { SvgXml } from "react-native-svg";
import { download_icon, email_icon } from "./presentationSvgs";

export default function ViewPresentations() {
  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>Date Created</Text>
      <Text style={styles.headerText}>Template</Text>
      <Text style={styles.headerText}>Download/Email</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.tableRow}>
        <Text style={styles.rowText}>{item.name}</Text>
        <Text style={styles.rowText}>{item.dateCreated}</Text>
        <Text style={styles.rowText}>{item.template}</Text>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="center"
          style={styles.rowText}
        >
          <View mr="2">
            <SvgXml xml={download_icon} />
          </View>
          <View>
            <SvgXml xml={email_icon} />
          </View>
        </View>
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
