import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  SafeAreaView,
  Platform,
  Dimensions,
} from "react-native";
import Chart from "../../components/charts/chart";
import { mockData } from "../../static/data";
import { View } from "native-base";
import { getAsyncStorageItem } from "../../utils/storage";
import { shadowStyle } from "../../globalStyles/Styles";

const Dashboard = ({ navigation, route }) => {
  const screenWidth = Dimensions.get("window").width;
  const isIpad = screenWidth >= 768;
  const [token, setToken] = useState("");

  useEffect(() => {
    getAsyncStorageItem("token").then((token) => {
      setToken(token);
    });
  }, []);

  console.log("token", token);

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text
        style={{
          flex: 1,
          fontWeight: 700,
          textAlign: "left",
          fontSize: 9,
          fontFamily: "Inter-Regular",
          color: "#525252",
        }}
      >
        Image
      </Text>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>Type</Text>
      <Text style={styles.headerText}>Inventory</Text>
      <Text style={styles.headerText}>Price</Text>
      <Text style={styles.headerText}>Channel</Text>
      <Text style={styles.headerText}>Sales YTD</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
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
      <Text style={styles.rowText}>{item.type}</Text>
      <Text style={styles.rowText}>{item.inventory}</Text>
      <Text style={styles.rowText}>${item.price}</Text>
      <Text style={styles.rowText}>{item.channel}</Text>
      <Text style={styles.rowText}>{item.channel}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.contentContainer}>
            <View style={[styles.orders, shadowStyle]}>
              <Text style={styles.textContent}>8</Text>
              <Text style={styles.statement}>Orders</Text>
            </View>
            <View style={[styles.stock, shadowStyle]}>
              <Text style={styles.textContent}>3</Text>
              <Text style={styles.statement}>Out of Stock</Text>
            </View>
            <View style={[styles.alerts, shadowStyle]}>
              <Image
                resizeMode="contain"
                source={require("../../../assets/alert.png")}
                style={styles.alertImage}
              />
              <Text style={styles.statement}>Alerts(1)</Text>
            </View>
          </View>
          <View width="100%" height={isIpad ? "370" : "300"} marginBottom="8">
            <Chart />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.introText}>Top Sellers</Text>
            {renderTableHeader()}
            <FlatList
              data={mockData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.listContent}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F9F9F9",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "ios" ? 0 : 0,
  },
  contentContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
  },
  stock: {
    width: 103,
    height: 82,
    borderWidth: 1,
    borderColor: "rgba(207, 207, 207, 0.25)",
    backgroundColor: "#fff",
    borderRadius: 19,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statement: {
    fontWeight: 500,
    fontFamily: "Inter-Regular",
  },
  alerts: {
    width: 103,
    height: 82,
    borderWidth: 1,
    borderColor: "rgba(207, 207, 207, 0.25)",
    backgroundColor: "#fff",
    borderRadius: 19,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  orders: {
    width: 103,
    height: 82,
    borderWidth: 1,
    borderColor: "rgba(207, 207, 207, 0.25)",
    backgroundColor: "#fff",
    borderRadius: 19,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  alertImage: {
    width: 40,
    height: 40,
  },
  textContent: {
    fontSize: 36,
    fontFamily: "Inter-Regular",
  },
  listContainer: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    width: "95%",
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
    fontFamily: "Inter-Regular",
    fontSize: 12,
    fontWeight: 700,
    color: "#525252",
  },
});
