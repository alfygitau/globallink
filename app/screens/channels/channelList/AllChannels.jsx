import { TouchableOpacity, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import { Swipeable } from "react-native-gesture-handler";
import {
  block_display_active_icon,
  block_display_icon,
  block_display_inactive_icon,
  close_channel_icon,
  delete_icon,
  inactive_link_channel_icon,
  link_channel_icon,
  list_display_active_icon,
  list_display_icon,
  list_display_inactive_icon,
} from "../channelsSvgs";
import { LinearGradient } from "expo-linear-gradient";
import mockData from "../../../static/channelData";
import LinkChannel from "./LinkChannel";
import { getAllChannels } from "../../../sdk/channels/channel";

export default function AllChannels() {
  const [list, setList] = useState(false);
  const [block, setBlock] = useState(true);
  const [inactiveList, setInactiveList] = useState(false);
  const [inactiveBlock, setInactiveBlock] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [channels, setChannels] = useState([]);

  const fetchChannels = async () => {
    const response = await getAllChannels();
    setChannels(response?.data);
  };

  useEffect(() => {
    fetchChannels();
  }, []);

  const handleBlockActive = () => {
    setBlock(true);
    setList(false);
  };
  const handleListActive = () => {
    setList(true);
    setBlock(false);
  };
  const handleInactiveBlockActive = () => {
    setInactiveBlock(true);
    setInactiveList(false);
  };
  const handleInactiveListActive = () => {
    setInactiveList(true);
    setInactiveBlock(false);
  };

  const rightAction = (itemId) => {
    return (
      <View
        backgroundColor="#FF0000"
        height="60px"
        width="60px"
        alignItems="center"
        justifyContent="center"
        ml="2"
      >
        <TouchableOpacity onPress={() => console.log(itemId)}>
          <SvgXml xml={delete_icon} />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <View>
            <Text fontSize="20" fontWeight="600" fontFamily="Inter-Regular">
              Channels
            </Text>
          </View>
          <View mb="4">
            <Text
              color="rgba(82, 82, 82, 0.50)"
              fontSize="8"
              fontWeight="500"
              fontFamily="Inter-Regular"
              width="95%"
            >
              The Channels modular will allow you to add new connections of
              either API, EDI, or manual. Once set up these will populate under
              all Product Channel dropdowns as well as push API and EDI orders
              to your Sales modular.
            </Text>
          </View>
          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="3"
          >
            <Text>Active Channels</Text>
            <View flexDir="row" alignItems="center">
              <>
                {block && (
                  <TouchableOpacity onPress={handleBlockActive}>
                    <View mr="2">
                      <SvgXml
                        xml={block_display_active_icon}
                        width={24}
                        height={24}
                      />
                    </View>
                  </TouchableOpacity>
                )}
                {!block && (
                  <TouchableOpacity onPress={handleBlockActive}>
                    <View mr="2">
                      <SvgXml
                        xml={block_display_inactive_icon}
                        width={24}
                        height={24}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </>
              <>
                {list && (
                  <TouchableOpacity onPress={handleListActive}>
                    <View mr="2">
                      <SvgXml
                        xml={list_display_active_icon}
                        width={24}
                        height={24}
                      />
                    </View>
                  </TouchableOpacity>
                )}
                {!list && (
                  <TouchableOpacity onPress={handleListActive}>
                    <View mr="2">
                      <SvgXml
                        xml={list_display_inactive_icon}
                        width={24}
                        height={24}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </>
            </View>
          </View>

          {/* active block */}
          {block && (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View flexDir="row" alignItems="center">
                {channels.map((channel) => (
                  <View
                    width="187"
                    height="123px"
                    borderWidth="1"
                    borderColor="rgba(193, 199, 214, 0.50)"
                    borderRadius="10"
                    justifyContent="space-around"
                    mr="4"
                    key={channel?.id}
                  >
                    <View width="187" height="103px" borderTopRadius="10">
                      <LinearGradient
                        style={{
                          flex: 1,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        colors={["rgba(193, 199, 214, 0.50)", "#EDEDED"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                      >
                        <View alignItems="center" justifyContent="center">
                          <Text
                            fontSize="30"
                            fontFamily="Inter-SemiBold"
                            color="rgb(186,186,186)"
                          >
                            CUSTOM
                          </Text>
                        </View>
                      </LinearGradient>
                    </View>
                    <View
                      flexDir="row"
                      alignItems="center"
                      justifyContent="space-between"
                      width="90%"
                      alignSelf="center"
                    >
                      <Text
                        color="rgba(82, 82, 82, 0.50)"
                        fontSize="8"
                        fontWeight="500"
                        fontFamily="Inter-Regular"
                      >
                        {channel?.name}
                      </Text>
                      <View>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                          <SvgXml xml={link_channel_icon} />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View position="absolute" top="0" right="0">
                      <SvgXml xml={close_channel_icon} />
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          )}

          {/* active list */}
          {list && (
            <View>
              <View
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
                borderBottomWidth="1"
                borderBottomColor="rgba(193, 199, 214, 0.50)"
              >
                <View flex={1}>
                  <Text
                    color="#525252"
                    fontFamily="Inter-Regular"
                    fontSize="8"
                    fontWeight="500"
                  >
                    Channel Name
                  </Text>
                </View>
                <View flex={1} alignItems="center">
                  <Text
                    color="#525252"
                    fontFamily="Inter-Regular"
                    fontSize="8"
                    fontWeight="500"
                  >
                    Date Added
                  </Text>
                </View>
                <View flex={1} alignItems="flex-end">
                  <Text
                    color="#525252"
                    fontFamily="Inter-Regular"
                    fontSize="8"
                    fontWeight="500"
                  >
                    Linked
                  </Text>
                </View>
              </View>
              {channels?.map((item) => (
                <Swipeable
                  key={item.id}
                  renderRightActions={() => rightAction(item.id)}
                >
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    borderBottomWidth="1"
                    borderBottomColor="rgba(193, 199, 214, 0.50)"
                    height="60px"
                  >
                    <View flex={1}>
                      <Text
                        color="#525252"
                        fontFamily="Inter-Regular"
                        fontSize="8"
                        fontWeight="500"
                      >
                        {item?.name}
                      </Text>
                    </View>
                    <View flex={1} alignItems="center">
                      <Text
                        color="#525252"
                        fontFamily="Inter-Regular"
                        fontSize="8"
                        fontWeight="500"
                      >
                        {item?.date}
                      </Text>
                    </View>
                    <View flex={1} alignItems="flex-end">
                      <View>
                        <SvgXml xml={link_channel_icon} />
                      </View>
                    </View>
                  </View>
                </Swipeable>
              ))}
            </View>
          )}

          <View
            flexDir="row"
            alignItems="center"
            justifyContent="space-between"
            mb="3"
            mt="6"
          >
            <Text>Inactive Channels</Text>
            <View flexDir="row" alignItems="center">
              <>
                {inactiveBlock && (
                  <TouchableOpacity onPress={handleInactiveBlockActive}>
                    <View mr="2">
                      <SvgXml
                        xml={block_display_active_icon}
                        width={24}
                        height={24}
                      />
                    </View>
                  </TouchableOpacity>
                )}
                {!inactiveBlock && (
                  <TouchableOpacity onPress={handleInactiveBlockActive}>
                    <View mr="2">
                      <SvgXml
                        xml={block_display_inactive_icon}
                        width={24}
                        height={24}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </>
              <>
                {inactiveList && (
                  <TouchableOpacity onPress={handleInactiveListActive}>
                    <View mr="2">
                      <SvgXml
                        xml={list_display_active_icon}
                        width={24}
                        height={24}
                      />
                    </View>
                  </TouchableOpacity>
                )}
                {!inactiveList && (
                  <TouchableOpacity onPress={handleInactiveListActive}>
                    <View mr="2">
                      <SvgXml
                        xml={list_display_inactive_icon}
                        width={24}
                        height={24}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </>
            </View>
          </View>

          {/* inactive bl;ock */}
          {inactiveBlock && (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View flexDir="row" alignItems="center">
                <View
                  width="187"
                  height="123px"
                  borderWidth="1"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  borderRadius="10"
                  justifyContent="space-around"
                  mr="4"
                >
                  <View width="187" height="103px" borderTopRadius="10">
                    <LinearGradient
                      style={{
                        flex: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      colors={["rgba(193, 199, 214, 0.50)", "#EDEDED"]}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 0, y: 0 }}
                    >
                      <View alignItems="center" justifyContent="center">
                        <Image
                          source={require("../../../../assets/amazon.png")}
                          alt="logo"
                        />
                      </View>
                    </LinearGradient>
                  </View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width="90%"
                    alignSelf="center"
                  >
                    <Text
                      color="rgba(82, 82, 82, 0.50)"
                      fontSize="8"
                      fontWeight="500"
                      fontFamily="Inter-Regular"
                    >
                      Amazon Seller Central
                    </Text>
                    <View>
                      <SvgXml xml={link_channel_icon} />
                    </View>
                  </View>
                  <View position="absolute" top="0" right="0">
                    <SvgXml xml={close_channel_icon} />
                  </View>
                </View>
                <View
                  width="187"
                  height="123px"
                  borderWidth="1"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  borderRadius="10"
                  justifyContent="space-around"
                  mr="4"
                >
                  <View width="187" height="103px" borderTopRadius="10">
                    <LinearGradient
                      style={{
                        flex: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      colors={["rgba(193, 199, 214, 0.50)", "#EDEDED"]}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 0, y: 0 }}
                    >
                      <View alignItems="center" justifyContent="center">
                        <Image
                          source={require("../../../../assets/etsy.png")}
                          alt="logo"
                          resizeMode="contain"
                        />
                      </View>
                    </LinearGradient>
                  </View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width="90%"
                    alignSelf="center"
                  >
                    <Text
                      color="rgba(82, 82, 82, 0.50)"
                      fontSize="8"
                      fontWeight="500"
                      fontFamily="Inter-Regular"
                    >
                      Amazon Seller Central
                    </Text>
                    <View>
                      <SvgXml xml={link_channel_icon} />
                    </View>
                  </View>
                  <View position="absolute" top="0" right="0">
                    <SvgXml xml={close_channel_icon} />
                  </View>
                </View>
                <View
                  width="187"
                  height="123px"
                  borderWidth="1"
                  borderColor="rgba(193, 199, 214, 0.50)"
                  borderRadius="10"
                  justifyContent="space-around"
                  mr="4"
                >
                  <View width="187" height="103px" borderTopRadius="10">
                    <LinearGradient
                      style={{
                        flex: 1,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      colors={["rgba(193, 199, 214, 0.50)", "#EDEDED"]}
                      start={{ x: 0, y: 1 }}
                      end={{ x: 0, y: 0 }}
                    >
                      <View alignItems="center" justifyContent="center">
                        <Image
                          source={require("../../../../assets/kroger.png")}
                          alt="logo"
                          resizeMode="contain"
                        />
                      </View>
                    </LinearGradient>
                  </View>
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    width="90%"
                    alignSelf="center"
                  >
                    <Text
                      color="rgba(82, 82, 82, 0.50)"
                      fontSize="8"
                      fontWeight="500"
                      fontFamily="Inter-Regular"
                    >
                      Amazon Seller Central
                    </Text>
                    <View>
                      <SvgXml xml={link_channel_icon} />
                    </View>
                  </View>
                  <View position="absolute" top="0" right="0">
                    <SvgXml xml={close_channel_icon} />
                  </View>
                </View>
              </View>
            </ScrollView>
          )}

          {/* inactive list */}
          {inactiveList && (
            <View>
              <View
                flexDir="row"
                alignItems="center"
                justifyContent="space-between"
                borderBottomWidth="1"
                borderBottomColor="rgba(193, 199, 214, 0.50)"
              >
                <View flex={1}>
                  <Text
                    color="#525252"
                    fontFamily="Inter-Regular"
                    fontSize="8"
                    fontWeight="500"
                  >
                    Channel Name
                  </Text>
                </View>
                <View flex={1} alignItems="center">
                  <Text
                    color="#525252"
                    fontFamily="Inter-Regular"
                    fontSize="8"
                    fontWeight="500"
                  >
                    Date Added
                  </Text>
                </View>
                <View flex={1} alignItems="flex-end">
                  <Text
                    color="#525252"
                    fontFamily="Inter-Regular"
                    fontSize="8"
                    fontWeight="500"
                  >
                    Linked
                  </Text>
                </View>
              </View>
              {mockData.map((item) => (
                <Swipeable
                  key={item.id}
                  renderRightActions={() => rightAction(item.id)}
                >
                  <View
                    flexDir="row"
                    alignItems="center"
                    justifyContent="space-between"
                    borderBottomWidth="1"
                    borderBottomColor="rgba(193, 199, 214, 0.50)"
                    height="60px"
                  >
                    <View flex={1}>
                      <Text
                        color="#525252"
                        fontFamily="Inter-Regular"
                        fontSize="8"
                        fontWeight="500"
                      >
                        {item.channelName}
                      </Text>
                    </View>
                    <View flex={1} alignItems="center">
                      <Text
                        color="#525252"
                        fontFamily="Inter-Regular"
                        fontSize="8"
                        fontWeight="500"
                      >
                        {item.dateAdded}
                      </Text>
                    </View>
                    <View flex={1} alignItems="flex-end">
                      <View>
                        <SvgXml xml={inactive_link_channel_icon} />
                      </View>
                    </View>
                  </View>
                </Swipeable>
              ))}
            </View>
          )}

          {modalVisible && (
            <LinkChannel
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}
