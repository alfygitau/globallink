import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Modal, Text, View } from "native-base";
import { Platform } from "react-native";
import { SvgXml } from "react-native-svg";
import { cross_icon } from "./categoriesSvgs";

export default function CategoryModal({
  openModal,
  selectedCategory,
  subCategoriesOfCategory,
  closeModal,
}) {
  return (
    <Modal isOpen={openModal} onClose={closeModal}>
      <View
        flexDir="row"
        width="90%"
        height="282px"
        alignSelf="center"
        alignItems="center"
        flexWrap="wrap"
        backgroundColor="white"
        borderRadius="19"
        px="6"
        py="4"
      >
        <View alignSelf="center" width="90%" mb="4">
          <Text
            textAlign="center"
            color="#525252"
            fontSize="12"
            fontFamily="Inter-Regular"
          >
            {selectedCategory?.name}
          </Text>
        </View>
        {subCategoriesOfCategory?.map((category) => (
          <View key={category?.id} flexDir="row" mb="2" width="30%">
            <View
              flexDir="row"
              alignItems="center"
              justifyContent="space-between"
              width="90%"
            >
              <Text numberOfLines={1} fontSize="10">
                {category?.name}
              </Text>
              <SvgXml xml={cross_icon} />
            </View>
          </View>
        ))}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  shadowContainer: {
    width: 364,
    height: 282,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 19,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.05)",
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
});
