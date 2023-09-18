import {} from "react-native";
import React from "react";
import { Input, Modal, Text, View } from "native-base";

export default function LinkChannel({ modalVisible, setModalVisible }) {
  return (
    <Modal isOpen={modalVisible} onClose={() => setModalVisible(!modalVisible)}>
      <View
        width="90%"
        height="352px"
        backgroundColor="white"
        borderRadius="8"
        padding="4"
      >
        <View>
          <Text
            color="#525252"
            fontSize="16"
            fontFamily="Inter-Regular"
            fontWeight="semibold"
          >
            Link Channel
          </Text>
        </View>
        <View mt="2" mb="2">
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Channel Name
          </Text>
          <Input
            w="282"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Channel Name"
          />
        </View>
        <View mt="2" mb="2">
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            Channel ID
          </Text>
          <Input
            w="282"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="Enter Channel ID"
          />
        </View>
        <View mt="2" mb="2">
          <Text fontSize="10" fontFamily="Inter-Regular" fontWeight="400">
            API Key
          </Text>
          <Input
            w="282"
            borderRadius="12"
            height="40px"
            backgroundColor="#ffffff"
            _focus={{
              backgroundColor: "#ffffff",
              borderColor: "rgba(193, 199, 214, 0.35)",
            }}
            placeholder="*************************"
          />
        </View>
        <View alignSelf="center" mt="4" mb="2">
          <View
            width="153"
            height="20px"
            backgroundColor="#27C9A9"
            borderRadius="12"
            alignItems="center"
            justifyContent="center"
          >
            <Text
              fontSize="10"
              fontFamily="Inter-Regular"
              fontWeight="400"
              color="white"
            >
              Link
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}
