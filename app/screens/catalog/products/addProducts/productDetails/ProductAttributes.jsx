import {} from "react-native";
import React from "react";
import { Input, Select, Text, TextArea, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { dropdown_icon } from "../../../promotions/promotionsSvgs";

export default function ProductAttributes() {
  return (
    <View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Color
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Color"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Material
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Material"
          />
        </View>
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Secondary Color
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Secondary Color"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Secondary Material
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            fontSize="10"
            height="40px"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Secondary Material"
          />
        </View>
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Finish
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Finish"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Pattern
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            fontSize="10"
            height="40px"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Pattern"
          />
        </View>
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Size
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Size"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Home Decor Style
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            fontSize="10"
            height="40px"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Home Decor Style"
          />
        </View>
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Theme
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Theme"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Shape
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            fontSize="10"
            height="40px"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Shape"
          />
        </View>
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Fabric Material
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Fabric Material"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Fabric Material %
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            fontSize="10"
            height="40px"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Fabric Material %"
          />
        </View>
      </View>
      <View mb="2">
        <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
          Care Instructions
        </Text>
        <TextArea
          h={20}
          placeholder="Enter Care Instructions"
          w="100%"
          borderColor="rgba(193, 199, 214, 0.35)"
          borderWidth="2"
          borderRadius="12"
          fontSize="10"
          _focus={{
            backgroundColor: "#ffffff",
            borderColor: "rgba(193, 199, 214, 0.35)",
          }}
        />
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Fabric Color
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Fabric Color"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Seat Back Style
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            fontSize="10"
            height="40px"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Seat Back Style"
          />
        </View>
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Number of Pieces
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Number of Pieces"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Is Powered
          </Text>
          <Select
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            height="40px"
            borderRadius="12"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="Yes or No"
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
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Recommended Room
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Room"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Bed Size
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Bed Size"
          />
        </View>
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Matress Firmness
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Matress Firmness"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Matress Thickness
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Matress Thickness"
          />
        </View>
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Number of Drawers
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Number of Drawers"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Number of Shelves
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            fontSize="10"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Number of Shelves"
          />
        </View>
      </View>
      <View
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Base Material
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            fontSize="10"
            height="40px"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Base Material"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Drawer Length
          </Text>
          <Input
            w="108"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Drawer Length"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Metric
          </Text>
          <Select
            width="60"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            height="40px"
            borderRadius="12"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="In"
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
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Base Color
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Base Color"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Drawer Width
          </Text>
          <Input
            w="108"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Drawer Width"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Metric
          </Text>
          <Select
            width="60"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            height="40px"
            borderRadius="12"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="In"
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
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Base Finish
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Base Finish"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Drawer Height
          </Text>
          <Input
            w="108"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Drawer Height"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Metric
          </Text>
          <Select
            width="60"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            height="40px"
            borderRadius="12"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="In"
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
        alignItems="center"
        justifyContent="space-between"
        mb="2"
      >
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Type of Drawer
          </Text>
          <Input
            w="177"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Base Finish"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Drawer Weight
          </Text>
          <Input
            w="108"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            borderRadius="12"
            height="40px"
            fontSize="10"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Weight"
          />
        </View>
        <View>
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Metric
          </Text>
          <Select
            width="60"
            borderColor="rgba(193, 199, 214, 0.35)"
            borderWidth="2"
            height="40px"
            borderRadius="12"
            fontSize="10"
            accessibilityLabel="Sales Data"
            placeholder="Ibs"
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
      <View flexDir="row" alignItems="center" alignSelf="center" mt="4" mb="6">
        <View
          width="146"
          height="31px"
          borderRadius="19"
          backgroundColor="#27C9A9"
          justifyContent="center"
          alignItems="center"
          mr="4"
        >
          <Text color="white" fontSize="13" fontWeight="400">
            Save
          </Text>
        </View>
        <View
          width="146"
          height="31px"
          borderRadius="19"
          backgroundColor="#27C9A9"
          justifyContent="center"
          alignItems="center"
        >
          <Text color="white" fontSize="13" fontWeight="400">
            Next
          </Text>
        </View>
      </View>
    </View>
  );
}
