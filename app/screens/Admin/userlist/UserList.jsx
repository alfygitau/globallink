import { Platform, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  CheckIcon,
  FlatList,
  ScrollView,
  Select,
  Spinner,
  Text,
  View,
} from "native-base";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { profile_icon } from "./userlistSvgs";
import Pagination from "../../../components/pagination/Pagination";
import { viewAdminUsers } from "../../../sdk/admin/users";

export default function UserList({ navigation }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const response = await viewAdminUsers();
      setUsers(response.data);
      setLoading(false);
    };

    getUsers();
  }, []);

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      <Text flex={0.7} style={styles.headerText}>
        Profile
      </Text>
      <Text flex={1} style={styles.headerText}>
        Name
      </Text>
      <Text flex={1.2} style={styles.headerText}>
        Phone
      </Text>
      <Text flex={1.5} style={styles.headerText}>
        Email
      </Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("UserDetails", { userId: item.id })}
    >
      <View style={styles.tableRow}>
        <View flex={0.7}>
          <SvgXml xml={profile_icon} width={40} height={40} />
        </View>
        <View flex={1} style={styles.rowText}>
          <Text fontSize="8">
            {item.first_name} {item.last_name}
          </Text>
          <Text fontSize="6" color="rgba(82, 82, 82, 0.75)">
            Employee
          </Text>
        </View>
        <Text flex={1.2} style={styles.rowText}>
          {item.phone}
        </Text>
        <Text flex={1.5} style={styles.rowText}>
          {item.email}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="100%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <View width="90%" alignSelf="center" mt="1">
            <Text fontSize="20" fontFamily="Inter-Bold" fontWeight="600">
              User List
            </Text>
          </View>
          <View width="95%" alignSelf="center">
            <View style={styles.listContainer}>
              {renderTableHeader()}
              {loading ? (
                <Spinner size="lg" color="#27C9A9" />
              ) : (
                <>
                  {users.length > 0 ? (
                    <FlatList
                      data={users}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.id.toString()}
                      contentContainerStyle={styles.listContent}
                    />
                  ) : (
                    <Text textAlign="center" fontSize="12">
                      No user data available
                    </Text>
                  )}
                </>
              )}
            </View>
          </View>
          <View width="90%" alignSelf="center" my="4">
            <Pagination />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginTop: 4,
  },
  headerText: {
    fontWeight: 700,
    textAlign: "left",
    fontSize: 10,
    fontFamily: "Inter-Bold",
    color: "#525252",
  },
  listContainer: {
    backgroundColor: "#F9F9F9",
    flex: 1,
    padding: 10,
    width: "95%",
    height: 500,
    alignSelf: "center",
    marginTop: 0,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderBottomEndRadius: 0,
  },
  rowText: {
    textAlign: "left",
    fontSize: 8,
    fontFamily: "Inter-Regular",
    color: "rgba(82, 82, 82, 0.75)",
  },
});
