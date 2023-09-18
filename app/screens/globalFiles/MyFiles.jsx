import { Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input, Select, Text, View } from "native-base";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import {
  arrow_right_icon,
  charcoal_folder_icon,
  global_files_export_icon,
  green_folder_icon,
  pdf_icon,
  search_icon,
} from "./globalFilesSvgs";
import { initialFolders } from "../../static/globalFilesData";
import { dropdown_icon } from "../catalog/promotions/promotionsSvgs";
import { Dropdown } from "react-native-element-dropdown";
import { StyleSheet } from "react-native";

const FolderItem = ({ folder, onPress }) => (
  <Pressable onPress={() => onPress(folder.folder_id)}>
    <View flexDir="row" alignItems="center" py="2">
      <View flexDir="row" alignItems="center" width="30%">
        <View>
          <SvgXml xml={green_folder_icon} />
        </View>
        <Text
          textAlign="center"
          color="#525252"
          fontFamily="Inter-Regular"
          fontSize="8"
        >
          {folder.folder_name}
        </Text>
      </View>
      <View width="40%">
        <Text
          textAlign="center"
          color="#525252"
          fontFamily="Inter-Regular"
          fontSize="8"
        >
          {new Date().toLocaleString()}
        </Text>
      </View>
      <View width="30%">
        <Text
          textAlign="center"
          color="#525252"
          fontFamily="Inter-Regular"
          fontSize="8"
        >
          admin
        </Text>
      </View>
    </View>
  </Pressable>
);

const FileItem = ({ file }) => (
  <View flexDir="row" alignItems="center" py="1" key={file.name}>
    <View width="30%" flexDir="row" alignItems="center">
      <View ml="2" mr="1">
        <AntDesign name="pdffile1" size={20} color="black" />
      </View>
      <Text color="#525252" fontFamily="Inter-Regular" fontSize="8">
        {file.file_name}
      </Text>
    </View>
    <View width="40%">
      <Text
        textAlign="center"
        color="#525252"
        fontFamily="Inter-Regular"
        fontSize="8"
      >
        {new Date().toLocaleString()}
      </Text>
    </View>
    <View width="30%">
      <Text
        textAlign="center"
        color="#525252"
        fontFamily="Inter-Regular"
        fontSize="8"
      >
        admin
      </Text>
    </View>
  </View>
);

const renderFolderContents = (folder, selectedFolderIds, onFolderPress) => (
  <View key={folder.folder_id}>
    <FolderItem folder={folder} onPress={onFolderPress} />
    {selectedFolderIds.includes(folder.folder_id) && (
      <View borderBottomWidth="1" borderColor="rgba(193, 199, 214, 0.50)">
        {folder.files.map((file) => (
          <FileItem key={file.file_id} file={file} />
        ))}
        {folder.subfolders &&
          folder.subfolders.map((subfolder) =>
            renderFolderContents(subfolder, selectedFolderIds, onFolderPress)
          )}
      </View>
    )}
  </View>
);

export default function MyFiles() {
  const [value, setValue] = useState(null);
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState([]);
  const data = [
    { label: "file", value: "file" },
    { label: "folder", value: "folder" },
  ];
  const data1 = [
    { label: "file", value: "file" },
    { label: "folder", value: "folder" },
  ];
  const data2 = [
    { label: "file", value: "file" },
    { label: "folder", value: "folder" },
  ];

  const [selectedFolderIds, setSelectedFolderIds] = useState([]);

  const handleFolderPress = (folderId) => {
    if (selectedFolderIds.includes(folderId)) {
      setSelectedFolderIds(selectedFolderIds.filter((id) => id !== folderId));
    } else {
      setSelectedFolderIds([...selectedFolderIds, folderId]);
    }
  };

  const handleSelectFolder = (item) => {
    setSelectedFolder(item);
    console.log(item);
  };

  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <View>
            <Text fontSize="20" fontFamily="Inter-Bold">
              Global Files
            </Text>
          </View>

          <View flexDir="row" my="2">
            <View
              width="170px"
              height="122px"
              borderRadius="16"
              borderWidth="1"
              borderColor="rgba(193, 199, 214, 0.50)"
              py="2"
              px="2"
              mr="2"
            >
              <ScrollView>
                {initialFolders.map((item) => (
                  <Pressable onPress={() => handleSelectFolder(item)}>
                    <View
                      key={item.folder_id}
                      flexDir="row"
                      alignItems="center"
                    >
                      <View mr="2">
                        <SvgXml xml={arrow_right_icon} />
                      </View>
                      <View mr="2">
                        <SvgXml xml={charcoal_folder_icon} />
                      </View>
                      <Text>{item.folder_name}</Text>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            </View>
            <View
              width="170px"
              height="122px"
              borderRadius="16"
              borderWidth="1"
              borderColor="rgba(193, 199, 214, 0.50)"
              py="2"
              px="2"
            >
              <ScrollView>
                {initialFolders.map((item) => (
                  <View key={item.folder_id} flexDir="row" alignItems="center">
                    <View mr="2">
                      <SvgXml xml={arrow_right_icon} />
                    </View>
                    <View mr="2">
                      <SvgXml xml={charcoal_folder_icon} />
                    </View>
                    <Text>{item.folder_name}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
          <View flexDir="row" alignItems="center" my="3">
            <View mr="3">
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "#27C9A9" }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Upload" : "..."}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
                renderRightIcon={() => (
                  <View mr="2">
                    <SvgXml xml={dropdown_icon} />
                  </View>
                )}
              />
            </View>
            <View mr="3">
              <Dropdown
                style={[styles.dropdown2, isFocus && { borderColor: "gray" }]}
                placeholderStyle={styles.placeholderStyle2}
                selectedTextStyle={styles.selectedTextStyle2}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data1}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Create" : "..."}
                value={value1}
                onFocus={() => setIsFocus1(true)}
                onBlur={() => setIsFocus1(false)}
                onChange={(item) => {
                  setValue1(item.value);
                  setIsFocus1(false);
                }}
                renderRightIcon={() => (
                  <View mr="2">
                    <SvgXml xml={dropdown_icon} />
                  </View>
                )}
              />
            </View>
            <View mr="3">
              <Dropdown
                style={[styles.dropdown2, isFocus && { borderColor: "gray" }]}
                placeholderStyle={styles.placeholderStyle2}
                selectedTextStyle={styles.selectedTextStyle2}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data2}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Organize" : "..."}
                value={value2}
                onFocus={() => setIsFocus2(true)}
                onBlur={() => setIsFocus2(false)}
                onChange={(item) => {
                  setValue2(item.value);
                  setIsFocus2(false);
                }}
                renderRightIcon={() => (
                  <View mr="2">
                    <SvgXml xml={dropdown_icon} />
                  </View>
                )}
              />
            </View>
            <View>
              <SvgXml xml={global_files_export_icon} />
            </View>
          </View>
          <View flexDir="row" justifyContent="space-between" width="95%" my="1">
            <View>
              <Input
                w="155"
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
            <View
              width="66px"
              height="30px"
              borderRadius="19"
              backgroundColor="#27C9A9"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="white" fontSize="8" fontFamily="Inter-SemiBold">
                Select
              </Text>
            </View>
          </View>
          <View
            flexDir="row"
            borderBottomWidth="1"
            borderColor="rgba(193, 199, 214, 0.50)"
            mt="3"
          >
            <Text
              color="#525252"
              fontSize="8"
              fontFamily="Inter-SemiBold"
              width="30%"
              textAlign="left"
            >
              Name
            </Text>
            <Text
              color="#525252"
              fontSize="8"
              fontFamily="Inter-SemiBold"
              width="40%"
              textAlign="center"
            >
              Modified
            </Text>
            <Text
              color="#525252"
              fontSize="8"
              fontFamily="Inter-SemiBold"
              width="30%"
              textAlign="center"
            >
              Who Has Access
            </Text>
          </View>
          <View>
            {initialFolders.map((folder) =>
              renderFolderContents(folder, selectedFolderIds, handleFolderPress)
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    height: 30,
    width: 90,
    borderColor: "#27C9A9",
    borderWidth: 1,
    borderRadius: 19,
    paddingHorizontal: 8,
    backgroundColor: "#27C9A9",
  },
  dropdown2: {
    height: 30,
    width: 90,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 19,
    paddingHorizontal: 8,
    backgroundColor: "#EAEAEA",
  },
  icon: {
    marginRight: 3,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 10,
  },
  placeholderStyle: {
    fontSize: 10,
    color: "white",
  },
  selectedTextStyle: {
    fontSize: 10,
    color: "white",
  },
  placeholderStyle2: {
    fontSize: 10,
    color: "#525252",
  },
  selectedTextStyle2: {
    fontSize: 10,
    color: "#525252",
  },
  iconStyle: {
    width: 10,
    height: 10,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 10,
  },
});
