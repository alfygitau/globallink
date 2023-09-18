import { Pressable } from "react-native";
import React, { useState } from "react";
import { Select, Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import RightDrawerModal from "../../../components/rightDrawer/RightDrawer";
import { SvgXml } from "react-native-svg";
import { arrow_back_icon, minus_icon, plus_icon } from "../purchaseSvgs";
import { dropdown_icon } from "../../catalog/promotions/promotionsSvgs";
import mockData from "../../../static/purchasingData";
import ReviewOrder from "./ReviewOrder";
import { PanGestureHandler, State } from "react-native-gesture-handler";

export default function CreateOrder() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("List");
  const [swiped, setSwiped] = useState(false);

  const onGestureEvent = (event) => {
    if (event.nativeEvent.translationX < -50) {
      setSwiped(true);
    }
  };

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      if (swiped) {
        setModalVisible(true);
        setSwiped(false);
      } else {
        setModalVisible(false);
      }
    }
  };

  const openReviewTab = () => {
    setActiveTab("Review Order");
    setModalOpen(true);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
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
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <View height="590px">
              <View>
                <View
                  justifyContent="flex-end"
                  flexDir="row"
                  alignItems="center"
                >
                  <View mr="2">
                    <SvgXml xml={arrow_back_icon} />
                  </View>
                  <Text fontFamily="Inter-Bold" fontSize="8">
                    Swipe to open options
                  </Text>
                </View>
              </View>
              <View flexDir="row" my="2">
                <View width="50%">
                  <Text fontFamily="Inter-SemiBold" fontSize="20">
                    Create Order
                  </Text>
                  <Text
                    color="#27C9A9"
                    fontSize="10"
                    fontFamily="Inter-Regular"
                  >
                    3 product below Minimum
                  </Text>
                </View>
                <View width="50%">
                  <View>
                    <Text fontFamily="Inter-Bold" fontSize="14">
                      Container Details
                    </Text>
                    <Text fontFamily="Inter-Regular" fontSize="8">
                      Container Size: 40ft (473.6” x 92.5” x 93.7”
                    </Text>
                  </View>
                  <View>
                    <View
                      width="165px"
                      height="18px"
                      backgroundColor="#ffffff"
                      borderRadius="19"
                      borderWidth="1"
                      borderColor="rgba(193, 199, 214, 0.50)"
                      flexDir="row"
                      alignItems="center"
                    >
                      <View
                        width="50%"
                        backgroundColor="#27C9A9"
                        justifyContent="center"
                        alignItems="center"
                        borderLeftRadius="19"
                        height="100%"
                      >
                        <Text
                          fontFamily="Inter-Regular"
                          fontSize="8"
                          color="white"
                        >
                          50% Completed
                        </Text>
                      </View>
                      <View
                        width="50%"
                        backgroundColor="#27C9A9"
                        justifyContent="center"
                        alignItems="center"
                      ></View>
                    </View>
                  </View>
                  <View flexDir="row" alignItems="center" my="1">
                    <Text fontFamily="Inter-Regular" fontSize="7">
                      Maximum Cube:
                    </Text>
                    <Text fontFamily="Inter-Regular" fontSize="7">
                      2560 Remaining Cube:
                    </Text>
                    <Text fontFamily="Inter-Regular" fontSize="7">
                      10000
                    </Text>
                  </View>
                  <View>
                    <View
                      width="165px"
                      height="18px"
                      backgroundColor="#ffffff"
                      borderRadius="19"
                      borderWidth="1"
                      borderColor="rgba(193, 199, 214, 0.50)"
                      flexDir="row"
                      alignItems="center"
                    >
                      <View
                        width="50%"
                        backgroundColor="#F0D262"
                        justifyContent="center"
                        alignItems="center"
                        borderLeftRadius="19"
                        height="100%"
                      >
                        <Text
                          fontFamily="Inter-Regular"
                          fontSize="8"
                          color="white"
                        >
                          50% Completed
                        </Text>
                      </View>
                      <View
                        width="50%"
                        backgroundColor="#fffff"
                        justifyContent="center"
                        alignItems="center"
                      ></View>
                    </View>
                  </View>
                  <View flexDir="row" alignItems="center" my="1">
                    <Text fontFamily="Inter-Regular" fontSize="7">
                      Maximum Cube:
                    </Text>
                    <Text fontFamily="Inter-Regular" fontSize="7">
                      2560 Remaining Cube:
                    </Text>
                    <Text fontFamily="Inter-Regular" fontSize="7">
                      10000
                    </Text>
                  </View>
                </View>
              </View>
              <View flexDir="row" alignItems="center" justifyContent="center">
                <View
                  width="70px"
                  height="28px"
                  borderRadius="19"
                  borderWidth="2"
                  borderColor="#27C9A9"
                  backgroundColor="white"
                  justifyContent="center"
                  alignItems="center"
                  mr="2"
                >
                  <Text color="#27C9A9" fontSize="8" fontFamily="Inter-Regular">
                    List
                  </Text>
                </View>
                <Pressable onPress={openReviewTab}>
                  <View
                    width="75px"
                    height="28px"
                    borderRadius="19"
                    borderWidth="2"
                    borderColor="rgba(193, 199, 214, 0.50)"
                    backgroundColor="white"
                    justifyContent="center"
                    alignItems="center"
                    mr="2"
                  >
                    <Text
                      color="rgba(193, 199, 214, 0.50)"
                      fontSize="8"
                      fontFamily="Inter-Regular"
                    >
                      Review PO
                    </Text>
                  </View>
                </Pressable>
                <View
                  width="80px"
                  height="28px"
                  borderRadius="19"
                  borderWidth="2"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  backgroundColor="white"
                  justifyContent="center"
                  alignItems="center"
                  mr="2"
                >
                  <Text
                    color="rgba(193, 199, 214, 0.50)"
                    fontSize="8"
                    fontFamily="Inter-Regular"
                  >
                    Customer View
                  </Text>
                </View>
                <View>
                  <Select
                    width="100px"
                    height="28px"
                    borderRadius="12"
                    fontSize="8"
                    borderWidth="2"
                    borderColor="rgba(193, 199, 214, 0.35);"
                    accessibilityLabel="Create Location"
                    placeholder="Select PO Template"
                    mt={1}
                    dropdownIcon={
                      <View mr="2">
                        <SvgXml xml={dropdown_icon} />
                      </View>
                    }
                  >
                    <Select.Item label="5 per page" value="5 per page" />
                    <Select.Item label="10 per page" value="10 per page" />
                  </Select>
                </View>
              </View>
              <View
                flexDir="row"
                borderBottomWidth="1"
                borderColor="rgba(193, 199, 214, 0.50)"
                mt="2"
              >
                <View width="20%">
                  <Text color="#525252" fontSize="10">
                    Quantity
                  </Text>
                </View>
                <View width="20%">
                  <Text color="#525252" fontSize="10" textAlign="center">
                    Product
                  </Text>
                </View>
                <View width="20%">
                  <Text color="#525252" fontSize="10" textAlign="center">
                    Partners
                  </Text>
                </View>
                <View width="20%">
                  <Text color="#525252" fontSize="10" textAlign="center">
                    Location
                  </Text>
                </View>
                <View width="20%">
                  <Text color="#525252" fontSize="10" textAlign="center">
                    Price
                  </Text>
                </View>
              </View>
              <View>
                {mockData.map((item) => (
                  <View
                    flexDir="row"
                    borderBottomWidth="1"
                    borderColor="rgba(193, 199, 214, 0.50)"
                    key={item.id}
                    py="4"
                  >
                    <View width="20%" flexDir="row">
                      <View width="33%">
                        <SvgXml xml={minus_icon} />
                      </View>
                      <Text color="#525252" fontSize="8" width="33%">
                        {item.quantity}
                      </Text>
                      <View width="33%">
                        <SvgXml xml={plus_icon} />
                      </View>
                    </View>
                    <View width="20%">
                      <Text color="#525252" fontSize="8" textAlign="center">
                        {item.productName}
                      </Text>
                    </View>
                    <View width="20%">
                      <Text color="#525252" fontSize="8" textAlign="center">
                        {item.partners}
                      </Text>
                    </View>
                    <View width="20%">
                      <Text color="#525252" fontSize="8" textAlign="center">
                        {item.location}
                      </Text>
                    </View>
                    <View width="20%">
                      <Text color="#525252" fontSize="8" textAlign="center">
                        {item.price}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </PanGestureHandler>

          {modalVisible && (
            <RightDrawerModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          )}

          {modalOpen && (
            <ReviewOrder modalOpen={modalOpen} setModalOpen={setModalOpen} />
          )}

          <View
            width="265px"
            height="30px"
            borderRadius="19"
            backgroundColor="#27C9A9"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
          >
            <Text color="white" fontSize="13" fontFamily="Inter-Regular">
              Finalize
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
