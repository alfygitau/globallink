import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import { FlatList, Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import {
  arrow_left_icon,
  arrow_right_icon,
  info_icon,
  success_status_icon,
  upload_icon,
  upload_icon_two,
} from "../productsSvg";
import mockData from "../../../../static/fileLogData";
import Pagination from "../../../../components/pagination/Pagination";
import { dropdown_icon } from "../../promotions/promotionsSvgs";

const PAGE_WIDTH = Dimensions.get("window").width;

export default function ProductBulkUpload() {
  const [activeTab, setActiveTab] = useState("Products");

  const scrollViewRef = useRef(null);

  const scrollToPage = (page) => {
    scrollViewRef.current.scrollTo({
      x: page * PAGE_WIDTH,
      animated: true,
    });
  };
  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text style={styles.headerText}>Uploaded Date</Text>
      <Text style={styles.headerText}>Name</Text>
      <Text style={styles.headerText}>Industry</Text>
      <Text style={styles.headerText}>Status</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <View>
      <View style={styles.tableRow}>
        <Text style={styles.rowText}>{item.uploadedDate}</Text>
        <Text style={styles.rowText}>{item.name}</Text>
        <Text style={styles.rowText}>{item.industry}</Text>
        <View
          flexDir="row"
          alignItems="center"
          justifyContent="center"
          style={styles.rowText}
        >
          <View mr="2">
            <SvgXml xml={success_status_icon} />
          </View>
          <Text textAlign="center" fontSize="8" fontFamily="Inter-Regular">
            {item.status}
          </Text>
        </View>
      </View>
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
          <View
            flexDir="row"
            justifyContent="space-between"
            width="95%"
            alignSelf="center"
            alignItems="center"
          >
            <Text fontWeight="bold" fontSize="20" fontFamily="Inter-Regular">
              Bulk Upload
            </Text>
            <View>
              <SvgXml xml={info_icon} />
            </View>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View flexDir="row" mt="2" mb="3">
              <TouchableOpacity onPress={() => setActiveTab("Products")}>
                <View
                  width="107px"
                  height="29px"
                  borderRadius="19"
                  borderWidth={activeTab === "Products" ? "0" : "1"}
                  backgroundColor={
                    activeTab === "Products" ? "#27C9A9" : "#ffffff"
                  }
                  borderColor={
                    activeTab === "Products"
                      ? "none"
                      : "rgba(193, 199, 214, 0.35)"
                  }
                  justifyContent="center"
                  alignItems="center"
                  mr="4"
                >
                  <Text
                    color={
                      activeTab === "Products"
                        ? "#ffffff"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontSize="10"
                  >
                    Products
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveTab("Sales")}>
                <View
                  width="87px"
                  height="29px"
                  borderRadius="19"
                  borderWidth="1"
                  mr="4"
                  borderColor={
                    activeTab === "Sales" ? "none" : "rgba(193, 199, 214, 0.35)"
                  }
                  backgroundColor={
                    activeTab === "Sales" ? "#27C9A9" : "#ffffff"
                  }
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    color={
                      activeTab === "Sales"
                        ? "#ffffff"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontSize="10"
                  >
                    Sales
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveTab("Partners")}>
                <View
                  width="87px"
                  height="29px"
                  borderRadius="19"
                  borderWidth="1"
                  mr="4"
                  borderColor={
                    activeTab === "Partners"
                      ? "none"
                      : "rgba(193, 199, 214, 0.35)"
                  }
                  backgroundColor={
                    activeTab === "Partners" ? "#27C9A9" : "#ffffff"
                  }
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    color={
                      activeTab === "Partners"
                        ? "#ffffff"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontSize="10"
                  >
                    Partners
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setActiveTab("Purchasing")}>
                <View
                  width="87px"
                  height="29px"
                  borderRadius="19"
                  borderWidth="1"
                  mr="4"
                  borderColor={
                    activeTab === "Purchasing"
                      ? "none"
                      : "rgba(193, 199, 214, 0.35)"
                  }
                  backgroundColor={
                    activeTab === "Purchasing" ? "#27C9A9" : "#ffffff"
                  }
                  justifyContent="center"
                  alignItems="center"
                >
                  <Text
                    color={
                      activeTab === "Purchasing"
                        ? "#ffffff"
                        : "rgba(193, 199, 214, 0.50)"
                    }
                    fontSize="10"
                  >
                    Purchasing
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View alignSelf="center" mt="2" mb="4">
            <View
              width="321"
              height="176px"
              borderWidth="4"
              borderStyle="dashed"
              borderRadius="19"
              borderColor="rgba(193, 199, 214, 0.50)"
              backgroundColor="rgba(193, 199, 214, 0.15)"
              alignItems="center"
              justifyContent="center"
            >
              <View mb="4">
                <SvgXml xml={upload_icon} />
              </View>
              <View flexDir="row" alignItems="center">
                <View mr="2">
                  <SvgXml xml={upload_icon_two} />
                </View>
                <Text
                  color="rgba(0, 0, 0, 0.50)"
                  fontWeight="400"
                  fontFamily="Inter-Regular"
                  fontSize="10"
                >
                  Drop your template here. or <Text>Browse</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
            <View style={{ width: PAGE_WIDTH, backgroundColor: "white" }}>
              <View flexDir="row" width="95%" alignSelf="center">
                <View width="5%" alignItems="center" justifyContent="center">
                  <TouchableOpacity onPress={() => scrollToPage(0)}>
                    <SvgXml xml={arrow_left_icon} />
                  </TouchableOpacity>
                </View>
                <View backgroundColor="white" width="85%" py="2">
                  <View width="90%" alignSelf="center">
                    <Text
                      fontSize="12"
                      fontFamily="Inter-Regular"
                      fontWeight="bold"
                    >
                      File Log
                    </Text>
                  </View>
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
                <View width="5%" alignItems="center" justifyContent="center">
                  <TouchableOpacity onPress={() => scrollToPage(1)}>
                    <SvgXml xml={arrow_right_icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ width: PAGE_WIDTH, backgroundColor: "white" }}>
              <View
                flexDir="row"
                width="95%"
                alignSelf="center"
                height="430px"
                justifyContent="center"
                alignItems="center"
              >
                <View width="5%" alignItems="center" justifyContent="center">
                  <TouchableOpacity onPress={() => scrollToPage(0)}>
                    <SvgXml xml={arrow_left_icon} />
                  </TouchableOpacity>
                </View>
                <View backgroundColor="white" width="85%">
                  <View mb="10">
                    <Text
                      textAlign="center"
                      fontSize="20"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                    >
                      Template Download
                    </Text>
                  </View>
                  <View width="287" alignSelf="center">
                    <Text
                      textAlign="left"
                      fontSize="12"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                      mb="10"
                      color="rgba(0, 0, 0, 0.50)"
                    >
                      Your template is created based upon the fields you have
                      created within your product category and attribute pages.
                      You can find this by either going to the product,
                      category, attribute or your admin page.
                    </Text>
                    <Text
                      textAlign="left"
                      fontSize="12"
                      fontFamily="Inter-Regular"
                      fontWeight="400"
                      mb="10"
                      color="rgba(0, 0, 0, 0.50)"
                    >
                      You can then download either an excel or csv. form to fill
                      out your data.
                    </Text>
                  </View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Select
                      width="146"
                      height="30px"
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

                    <View
                      width="146"
                      height="30px"
                      borderRadius="19"
                      backgroundColor="#27C9A9"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text
                        color="white"
                        fontSize="13"
                        fontFamily="Inter-Regular"
                        fontWeight="400"
                      >
                        Download
                      </Text>
                    </View>
                  </View>
                </View>
                <View width="5%" alignItems="center" justifyContent="center">
                  <TouchableOpacity onPress={() => scrollToPage(1)}>
                    <SvgXml xml={arrow_right_icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
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
    // flex: 1,
    width: "25%",
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
  },
  headerText: {
    // flex: 1,
    width: "25%",
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
