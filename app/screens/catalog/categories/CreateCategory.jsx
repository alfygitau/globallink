import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList, Image, Input, Select, Text, View } from "native-base";
import mockData from "../../../static/categoriesData";

export default function CreateCategory() {
  const [openModal, setOpenModal] = useState(false);
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
        mt="2"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <View>
          <View mb="1" ml="3px">
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Create
            </Text>
          </View>
          <Select
            width="125px"
            height="40px"
            borderRadius="12"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="Select Type"
          >
            <Select.Item label="Weekly" value="weekly" />
            <Select.Item label="Monthly" value="monthly" />
            <Select.Item label="Annually" value="annually" />
          </Select>
        </View>
        <View>
          <View mb="1" ml="3px">
            <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
              Name
            </Text>
          </View>
          <View>
            <Input
              width="140"
              height="40px"
              borderRadius="12"
              placeholder="Enter Name"
              fontSize="10"
            />
          </View>
        </View>
        <View alignSelf="flex-end">
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
      </View>
      <View
        mt="2"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <View>
          <View mb="1" ml="3px">
            <Text fontSize="10" fontFamily="Inter-Regular">
              Category
            </Text>
          </View>
          <Select
            width="125px"
            height="40px"
            borderRadius="12"
            fontSize="9"
            accessibilityLabel="Sales Data"
            placeholder="Select Category"
          >
            <Select.Item label="Weekly" value="weekly" />
            <Select.Item label="Monthly" value="monthly" />
            <Select.Item label="Annually" value="annually" />
          </Select>
        </View>
        <View>
          <View mb="1" ml="3px">
            <Text fontSize="10" fontFamily="Inter-Regular">
              SubCategory
            </Text>
          </View>
          <View>
            <Input
              width="140"
              height="40px"
              borderRadius="12"
              placeholder="Enter Email Address"
              fontSize="10"
            />
          </View>
        </View>
        <View alignSelf="flex-end">
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
              Connect
            </Text>
          </View>
        </View>
      </View>
      <View flexDir="row" mt="2">
        <Text
          fontSize="8"
          fontFamily="Inter-Regular"
          fontStyle="normal"
          color="#rgba(0, 0, 0, 0.50)"
          fontWeight="400"
        >
          Selected Sub-Categories:&nbsp;
        </Text>
        <Text
          fontSize="8"
          fontFamily="Inter-Regular"
          fontStyle="italic"
          color="#rgba(0, 0, 0, 0.50)"
          fontWeight="300"
          width="200"
        >
          Bedroom, Kitchen, Bathroom, Living Room
        </Text>
      </View>
      <View
        mt="2"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <View>
          <View mb="1" ml="3px">
            <Text fontSize="10" fontFamily="Inter-Regular">
              Sub-Category
            </Text>
          </View>
          <Select
            width="125px"
            height="40px"
            borderRadius="12"
            fontSize="9"
            accessibilityLabel="Sales Data"
            placeholder="Select Sub-Category"
          >
            <Select.Item label="Weekly" value="weekly" />
            <Select.Item label="Monthly" value="monthly" />
            <Select.Item label="Annually" value="annually" />
          </Select>
        </View>
        <View>
          <View mb="1" ml="3px">
            <Text fontSize="10" fontFamily="Inter-Regular">
              Secondary Sub-Category
            </Text>
          </View>
          <View>
            <Input
              width="140"
              height="40px"
              borderRadius="12"
              placeholder="Enter Admin Name"
              fontSize="10"
            />
          </View>
        </View>
        <View alignSelf="flex-end">
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
              Connect
            </Text>
          </View>
        </View>
      </View>
      <View flexDir="row" mt="2" mb="4">
        <View>
          <Text
            fontSize="8"
            fontFamily="Inter-Regular"
            fontStyle="normal"
            color="#rgba(0, 0, 0, 0.50)"
            fontWeight="400"
          >
            Selected Secondary Sub-Categories:&nbsp;
          </Text>
        </View>
        <View>
          <Text
            fontSize="8"
            fontFamily="Inter-Regular"
            fontStyle="italic"
            color="#rgba(0, 0, 0, 0.50)"
            fontWeight="300"
            width="170"
          >
            Bedroom, Kitchen, Bathroom, Living Room
          </Text>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
          <View
            width="111"
            height="35px"
            borderRadius="19"
            backgroundColor={openModal ? "#F0D262" : "#27C9A9"}
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
              Furniture
            </Text>
          </View>
        </TouchableOpacity>
        <View
          width="111"
          height="35px"
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
            Drinks
          </Text>
        </View>
        <View
          width="111"
          height="35px"
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
            Electronics
          </Text>
        </View>
        <View
          width="111"
          height="35px"
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
            Wines
          </Text>
        </View>
      </ScrollView>
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
