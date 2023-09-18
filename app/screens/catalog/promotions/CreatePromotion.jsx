import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
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
import { calendar_icon, dropdown_icon } from "./promotionsSvgs";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";
import { ScrollView } from "react-native";
import mockData from "../../../static/categoriesData";
import { tick_icon } from "../../Admin/useradmin/userAdminSvgs";

export default function CreatePromotion() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const onChangeStartDate = (event, selectedDate) => {
    console.log(selectedDate);
    if (selectedDate) {
      setShowStartDatePicker(false);
      setStartDate(selectedDate);
    }
  };
  const onChangeEndDate = (event, selectedDate) => {
    console.log(selectedDate);
    if (selectedDate) {
      setShowEndDatePicker(false);
      setEndDate(selectedDate);
    }
  };

  const toggleStartPicker = () => {
    setShowStartDatePicker(true);
  };
  const toggleEndPicker = () => {
    setShowEndDatePicker(true);
  };

  const formattedStartDate = startDate
    ? dayjs(startDate).format("YYYY-MM-DD")
    : "Start Date";
  const formattedEndDate = endDate
    ? dayjs(endDate).format("YYYY-MM-DD")
    : "End Date";

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text
        width="35%"
        textAlign="left"
        fontSize="9"
        fontFamily="Inter-Regular"
        color="#525252"
        fontWeight="bold"
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
        justifyContent="space-between"
        alignItems="center"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Promotion Type
          </Text>
          <Select
            width="181px"
            height="40px"
            borderRadius="12px"
            fontSize="9"
            accessibilityLabel="Sales Data"
            placeholder="Select Promotion Type"
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
            Percentage
          </Text>
          <Input
            width="181"
            height="40px"
            borderRadius="12"
            placeholder="Insert Percentage"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
          />
        </View>
      </View>
      <View
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Flat Currency
          </Text>
          <Input
            width="181"
            height="40px"
            borderRadius="12"
            placeholder="Enter Phone Number"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Channel
          </Text>
          <Select
            width="181px"
            height="40px"
            borderRadius="12px"
            fontSize="9"
            accessibilityLabel="Sales Data"
            placeholder="Select Channel"
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
        justifyContent="space-between"
        alignItems="center"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Start Date
          </Text>
          <TouchableOpacity onPress={toggleStartPicker}>
            <View
              width="181px"
              height="40px"
              borderWidth="2"
              borderRadius="12"
              borderColor="rgba(193, 199, 214, 0.35)"
              justifyContent="center"
              alignItems="flex-start"
              padding="2"
            >
              <Text
                color="rgba(82, 82, 82, 0.50)"
                fontSize="10"
                fontFamily="Inter-Regular"
                fontWeight="400"
              >
                {formattedStartDate}
              </Text>
              <View position="absolute" right="10px">
                <SvgXml xml={calendar_icon} />
              </View>
              {showStartDatePicker && (
                <DateTimePicker
                  value={startDate}
                  mode="date"
                  display="default"
                  onChange={onChangeStartDate}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            End Date
          </Text>
          <TouchableOpacity onPress={toggleEndPicker}>
            <View
              width="181px"
              height="40px"
              borderWidth="2"
              borderRadius="12"
              borderColor="rgba(193, 199, 214, 0.35)"
              justifyContent="center"
              alignItems="flex-start"
              padding="2"
            >
              <Text
                color="rgba(82, 82, 82, 0.50)"
                fontSize="10"
                fontFamily="Inter-Regular"
                fontWeight="400"
              >
                {formattedEndDate}
              </Text>
              <View position="absolute" right="10px">
                <SvgXml xml={calendar_icon} />
              </View>
              {showEndDatePicker && (
                <DateTimePicker
                  value={endDate}
                  mode="date"
                  display="default"
                  onChange={onChangeEndDate}
                />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Code
          </Text>
          <Input
            width="181"
            height="40px"
            borderRadius="12"
            placeholder="Enter City"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Partners
          </Text>
          <Select
            width="181px"
            height="40px"
            borderRadius="12px"
            fontSize="9"
            accessibilityLabel="Sales Data"
            placeholder="Select Partner"
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
        justifyContent="space-between"
        alignItems="center"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Promotion Name
          </Text>
          <Input
            width="181"
            height="40px"
            borderRadius="12"
            placeholder="Promotion Name"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Quantity
          </Text>
          <Input
            width="181"
            height="40px"
            borderRadius="12"
            placeholder="Enter Quantity"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
          />
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
    fontWeight: 700,
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
