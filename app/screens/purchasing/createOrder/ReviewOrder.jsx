import {} from "react-native";
import React from "react";
import { Modal, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { logo_icon } from "../../login/loginSvgs";

export default function ReviewOrder({ modalOpen, setModalOpen }) {
  return (
    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      <View
        backgroundColor="white"
        width="90%"
        height="481"
        borderRadius="12"
        p="2"
      >
        <View flexDir="row" alignItems="center" justifyContent="center">
          <View>
            <SvgXml xml={logo_icon} width={180} height={30} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
