import { Pressable } from "react-native";
import React, { useContext } from "react";
import { Select, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import {
  back_arrow_icon,
  back_icon,
  front_arrow_icon,
  front_icon,
} from "../../screens/Admin/userlist/userlistSvgs";
import { dropdown_icon } from "../../screens/catalog/promotions/promotionsSvgs";

export default function Pagination({
  setCurrentPage,
  handlePreviousPage,
  handleNextPage,
  currentPage,
  totalPages,
  setProductsPerPage,
  productsPerPage,
}) {
  return (
    <View flexDir="row" alignItems="center" alignSelf="center">
      <View mr="1">
        <Pressable onPress={handlePreviousPage}>
          <SvgXml xml={back_icon} width={22} height={22} />
        </Pressable>
      </View>
      <View mr="1">
        <SvgXml xml={back_arrow_icon} width={22} height={22} />
      </View>
      <View
        width="14px"
        height="14"
        borderRadius="100"
        alignItems="center"
        justifyContent="center"
        borderWidth="1"
        backgroundColor="white"
        borderColor="rgba(82, 82, 82, 0.75)"
        mr="2"
      >
        <Text color="rgba(82, 82, 82, 0.75)" fontSize="8">
          {currentPage}
        </Text>
      </View>
      <View mr="2">
        <Text color="rgba(82, 82, 82, 0.75)" fontSize="10">
          of
        </Text>
      </View>
      <View mr="1">
        <Text color="rgba(82, 82, 82, 0.75)" fontSize="10">
          {totalPages}
        </Text>
      </View>
      <View mr="1">
        <Text color="rgba(82, 82, 82, 0.75)" fontSize="10">
          pages
        </Text>
      </View>
      <View mr="1">
        <SvgXml xml={front_arrow_icon} width={22} height={22} />
      </View>
      <View mr="1">
        <Pressable onPress={handleNextPage}>
          <SvgXml xml={front_icon} width={22} height={22} />
        </Pressable>
      </View>
      <View>
        <Select
          width="130"
          height="30px"
          borderRadius="12"
          borderWidth="2"
          borderColor="rgba(193, 199, 214, 0.35)"
          fontSize="8"
          accessibilityLabel="Choose Service"
          placeholder="Select Products per page"
          selectedValue={productsPerPage}
          onValueChange={(itemValue) => setProductsPerPage(itemValue)}
          mt={1}
          dropdownIcon={
            <View mr="2">
              <SvgXml xml={dropdown_icon} />
            </View>
          }
        >
          <Select.Item label="5 per page" value="5" />
          <Select.Item label="10 per page" value="10" />
          <Select.Item label="20 per page" value="20" />
        </Select>
      </View>
    </View>
  );
}
