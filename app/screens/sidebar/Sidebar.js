import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, View } from "native-base";
import { SvgXml } from "react-native-svg";
import {
  catalog_active_icon,
  catalog_icon,
  categories_icon,
  channelexports_icon,
  channels_icon,
  collections_icon,
  container_load_icon,
  create_container_icon,
  customers_icon,
  dash_active_icon,
  dash_icon,
  forecasting_icon,
  global_files_active_icon,
  global_files_icon,
  globalfiles_icon,
  globalstore_icon,
  links_icon,
  logistics_icon,
  marketing_icon,
  partner_group_icon,
  partners_active_icon,
  partners_icon,
  po_settings_icon,
  po_status_icon,
  presentations_icon,
  products_active_icon,
  products_icon,
  profile_image_icon,
  promotions_icon,
  prototype_icon,
  purchasing_active_icon,
  purchasing_icon,
  recurring_order_icon,
  report_icon,
  sales_icon,
  settings_icon,
  support_icon,
} from "./sidebarSvgs";
import Hexagon from "../../common/hexagon";
import NewHexagon from "../../common/hexagon2";
import { DataContext } from "../../context/DataContext";

const CustomSidebarMenu = (props) => {
  const screenWidth = Dimensions.get("window").width;
  const isIpad = screenWidth >= 768;
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState(null);
  const [selectedThirdSubmenu, setSelectedThirdSubmenu] = useState(null);
  let str = "Channels Exports";
  let str2 = "Company Details";
  const { data } = useContext(DataContext);

  let loggedInUser = data?.userInfo;

  const toggleSubmenu = (item) => {
    setSelectedItem(selectedItem === item ? null : item);
    setSelectedSubmenu(null);
    setSelectedThirdSubmenu(null);
  };

  const toggleSecondSubMenu = (item) => {
    setSelectedSubmenu(selectedSubmenu === item ? null : item);
  };

  const toggleThirdSubMenu = (item) => {
    setSelectedThirdSubmenu(selectedThirdSubmenu === item ? null : item);
  };

  useEffect(() => {
    if (props.state && !props.state.isOpen) {
      setSelectedItem(null);
    }
  }, [props.state]);

  return (
    <LinearGradient
      colors={["rgba(47, 127, 132, 1) 2.60%", "rgba(39, 201, 169, 1) 43.23%)"]}
      style={styles.gradientContainer}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
    >
      <DrawerContentScrollView {...props}>
        <View style={isIpad ? styles.containerIpad : styles.container}>
          <TouchableOpacity onPress={() => toggleSubmenu("Admin")}>
            <View style={styles.profileContainer}>
              <View
                width="90px"
                height="90px"
                borderRadius="100"
                backgroundColor="white"
                justifyContent="center"
                alignItems="center"
                mr="3"
              >
                <SvgXml xml={profile_image_icon} />
              </View>
              <View>
                <Text style={styles.profileText}>
                  {loggedInUser?.first_name} {loggedInUser?.last_name}
                </Text>
                <Text color="white" fontSize="15" fontFamily="Inter-Regular">
                  {loggedInUser?.role}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View paddingX="5" height="800" mt="4">
            <View width="30%" height="100%">
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => props.navigation.navigate("Dash")}>
                    <SvgXml xml={dash_icon} height={18} width={18} />
                  </Pressable>
                  {selectedItem === "Dashboard" && (
                    <View style={styles.centeredContent}>
                      <Pressable
                        onPress={() => props.navigation.navigate("Dash")}
                      >
                        <NewHexagon>
                          <SvgXml
                            xml={dash_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "dashboard" ? (
                    <Pressable
                      onPress={() => props.navigation.navigate("MainStack")}
                    >
                      <Text color="white">Dashboard</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => toggleSubmenu("Admin")}>
                    <SvgXml xml={products_icon} />
                  </Pressable>
                  {selectedItem === "Admin" && (
                    <View position="absolute" left="-50%" top="-50%">
                      <Pressable onPress={() => toggleSubmenu("Admin")}>
                        <NewHexagon>
                          <SvgXml
                            xml={products_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "admin" ? (
                    <Pressable onPress={() => toggleSubmenu("Admin")}>
                      <Text color="white">Admin</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => toggleSubmenu("Channel")}>
                    <SvgXml xml={products_icon} />
                  </Pressable>
                  {selectedItem === "Channel" && (
                    <View position="absolute" left="-50%" top="-50%">
                      <Pressable onPress={() => toggleSubmenu("Channel")}>
                        <NewHexagon>
                          <SvgXml
                            xml={products_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "channel" ? (
                    <Pressable onPress={() => toggleSubmenu("Channel")}>
                      <Text color="white">Channel</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => toggleSubmenu("Partner")}>
                    <SvgXml xml={partners_icon} />
                  </Pressable>
                  {selectedItem === "Partner" && (
                    <View position="absolute" left="-50%" top="-50%">
                      <Pressable onPress={() => toggleSubmenu("Partner")}>
                        <NewHexagon>
                          <SvgXml
                            xml={products_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "partner" ? (
                    <Pressable onPress={() => toggleSubmenu("Partner")}>
                      <Text color="white">Partner</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => toggleSubmenu("Customers")}>
                    <SvgXml xml={customers_icon} />
                  </Pressable>
                  {selectedItem === "Customers" && (
                    <View position="absolute" left="-50%" top="-50%">
                      <Pressable onPress={() => toggleSubmenu("Customers")}>
                        <NewHexagon>
                          <SvgXml
                            xml={products_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "customers" ? (
                    <Pressable onPress={() => toggleSubmenu("Customers")}>
                      <Text color="white">Customers</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => toggleSubmenu("Logistics")}>
                    <SvgXml xml={logistics_icon} />
                  </Pressable>
                  {selectedItem === "Logistics" && (
                    <View position="absolute" left="-50%" top="-50%">
                      <Pressable onPress={() => toggleSubmenu("Logistics")}>
                        <NewHexagon>
                          <SvgXml
                            xml={products_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "logistics" ? (
                    <Pressable onPress={() => toggleSubmenu("Logistics")}>
                      <Text color="white">Logistics</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => toggleSubmenu("Purchasing")}>
                    <SvgXml xml={purchasing_icon} />
                  </Pressable>
                  {selectedItem === "Purchasing" && (
                    <View position="absolute" left="-50%" top="-50%">
                      <Pressable onPress={() => toggleSubmenu("Purchasing")}>
                        <NewHexagon>
                          <SvgXml
                            xml={purchasing_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "purchasing" ? (
                    <Pressable onPress={() => toggleSubmenu("Purchasing")}>
                      <Text color="white">Purchasing</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => toggleSubmenu("Catalogs")}>
                    <SvgXml xml={catalog_icon} />
                  </Pressable>
                  {selectedItem === "Catalogs" && (
                    <View position="absolute" left="-50%" top="-50%">
                      <Pressable onPress={() => toggleSubmenu("Catalogs")}>
                        <NewHexagon>
                          <SvgXml
                            xml={catalog_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "catalogs" ? (
                    <Pressable onPress={() => toggleSubmenu("Catalogs")}>
                      <Text color="white">Catalog</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => toggleSubmenu("Catalog")}>
                    <SvgXml xml={catalog_icon} />
                  </Pressable>
                  {selectedItem === "Catalog" && (
                    <View position="absolute" left="-50%" top="-50%">
                      <Pressable onPress={() => toggleSubmenu("Catalog")}>
                        <NewHexagon>
                          <SvgXml
                            xml={products_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "catalog" ? (
                    <Pressable onPress={() => toggleSubmenu("Catalog")}>
                      <Text color="white">template</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => toggleSubmenu("Sales")}>
                    <SvgXml xml={sales_icon} />
                  </Pressable>
                  {selectedItem === "Sales" && (
                    <View position="absolute" left="-50%" top="-50%">
                      <Pressable onPress={() => toggleSubmenu("Sales")}>
                        <NewHexagon>
                          <SvgXml
                            xml={products_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "sales" ? (
                    <Pressable onPress={() => toggleSubmenu("Sales")}>
                      <Text color="white">Sales</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
              <View flexDir="row" alignItems="center" mb="6">
                <View mr="2">
                  <Pressable onPress={() => toggleSubmenu("Global Files")}>
                    <SvgXml xml={global_files_icon} />
                  </Pressable>
                  {selectedItem === "Global Files" && (
                    <View position="absolute" left="-50%" top="-50%">
                      <Pressable onPress={() => toggleSubmenu("Global Files")}>
                        <NewHexagon>
                          <SvgXml
                            xml={global_files_active_icon}
                            height={18}
                            width={18}
                          />
                        </NewHexagon>
                      </Pressable>
                    </View>
                  )}
                </View>
                <View>
                  {!selectedItem || selectedItem === "global files" ? (
                    <Pressable onPress={() => toggleSubmenu("Global Files")}>
                      <Text color="white">Global Files</Text>
                    </Pressable>
                  ) : null}
                </View>
              </View>
            </View>
            {selectedItem === "Catalog" && (
              <View
                position="absolute"
                top="0"
                left="32%"
                width="100px"
                height="100%"
              >
                <View height="100%">
                  <View flexDir="row" alignItems="center" mb="6">
                    <View mr="2">
                      <Pressable onPress={() => toggleSecondSubMenu("Orders")}>
                        <SvgXml xml={products_icon} />
                      </Pressable>
                      {selectedSubmenu === "Orders" && (
                        <View position="absolute" left="-50%" top="-80%">
                          <Pressable
                            onPress={() => toggleSecondSubMenu("Orders")}
                          >
                            <NewHexagon>
                              <SvgXml
                                xml={products_active_icon}
                                height={18}
                                width={18}
                              />
                            </NewHexagon>
                          </Pressable>
                        </View>
                      )}
                    </View>
                    <View>
                      {!selectedSubmenu || selectedSubmenu === "orders" ? (
                        <Text color="white">Orders</Text>
                      ) : null}
                    </View>
                  </View>
                  <View flexDir="row" alignItems="center">
                    <View mr="2">
                      <Pressable onPress={() => toggleSecondSubMenu("Pos")}>
                        <SvgXml xml={products_icon} width={26} />
                      </Pressable>
                      {selectedSubmenu === "Pos" && (
                        <View position="absolute" left="-50%" top="-73%">
                          <Pressable onPress={() => toggleSecondSubMenu("Pos")}>
                            <NewHexagon>
                              <SvgXml
                                xml={products_active_icon}
                                height={18}
                                width={18}
                              />
                            </NewHexagon>
                          </Pressable>
                        </View>
                      )}
                    </View>
                    {!selectedSubmenu || selectedSubmenu === "pos" ? (
                      <Text color="white">Pos</Text>
                    ) : null}
                  </View>
                  {selectedSubmenu === "Orders" && (
                    <View
                      position="absolute"
                      top="0"
                      left="65%"
                      width="100px"
                      height="100%"
                    >
                      <View>
                        <View mb="6">
                          <View flexDir="row" alignItems="center">
                            <View
                              mr={selectedThirdSubmenu?.length > 0 ? "6" : "2"}
                              alignItems="center"
                            >
                              <Pressable
                                onPress={() => toggleThirdSubMenu("Create")}
                              >
                                <SvgXml xml={products_icon} />
                              </Pressable>
                              {selectedThirdSubmenu === "Create" && (
                                <View
                                  position="absolute"
                                  left="-50%"
                                  top="-80%"
                                >
                                  <Pressable
                                    onPress={() => toggleThirdSubMenu("Create")}
                                  >
                                    <NewHexagon>
                                      <SvgXml
                                        xml={products_active_icon}
                                        height={18}
                                        width={18}
                                      />
                                    </NewHexagon>
                                  </Pressable>
                                </View>
                              )}
                            </View>
                            <View>
                              <Text color="white">Create</Text>
                            </View>
                          </View>
                        </View>
                        <View mb="6">
                          <View flexDir="row" alignItems="center">
                            <View
                              mr={selectedThirdSubmenu?.length > 0 ? "6" : "2"}
                            >
                              <Pressable
                                onPress={() => toggleThirdSubMenu("New")}
                              >
                                <SvgXml xml={products_icon} />
                              </Pressable>
                              {selectedThirdSubmenu === "New" && (
                                <View
                                  position="absolute"
                                  left="-50%"
                                  top="-77%"
                                >
                                  <Pressable
                                    onPress={() => toggleThirdSubMenu("New")}
                                  >
                                    <NewHexagon>
                                      <SvgXml
                                        xml={products_active_icon}
                                        height={18}
                                        width={18}
                                      />
                                    </NewHexagon>
                                  </Pressable>
                                </View>
                              )}
                            </View>
                            <View>
                              <Text color="white">New</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}
                  {selectedSubmenu === "Pos" && (
                    <View
                      position="absolute"
                      top="0"
                      left="65%"
                      width="100px"
                      height="100%"
                    >
                      <View>
                        <View mb="6">
                          <View flexDir="row" alignItems="center">
                            <View mr="2">
                              <Pressable>
                                <SvgXml xml={products_icon} />
                              </Pressable>
                            </View>
                            <View>
                              <Text color="white">Deb</Text>
                            </View>
                          </View>
                        </View>
                        <View mb="6">
                          <View flexDir="row" alignItems="center">
                            <View mr="2">
                              <Pressable>
                                <SvgXml xml={products_icon} />
                              </Pressable>
                            </View>
                            <View>
                              <Text color="white">Top</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}
                </View>
              </View>
            )}
            {selectedItem === "Sales" && (
              <View
                position="absolute"
                top="0"
                left="32%"
                width="100px"
                height="100%"
              >
                <View>
                  <View flexDir="row" alignItems="center" mb="6">
                    <View mr="2">
                      <Pressable
                        onPress={() =>
                          props.navigation.navigate("Dashboard Sales")
                        }
                      >
                        <SvgXml xml={products_icon} />
                      </Pressable>
                    </View>
                    <View>
                      <Pressable
                        onPress={() =>
                          props.navigation.navigate("Dashboard Sales")
                        }
                      >
                        <Text color="white">Sales</Text>
                      </Pressable>
                    </View>
                  </View>
                  <View flexDir="row" alignItems="center">
                    <View mr="2">
                      <Pressable
                        onPress={() =>
                          props.navigation.navigate("Sales Orders")
                        }
                      >
                        <SvgXml xml={categories_icon} />
                      </Pressable>
                    </View>
                    <Pressable
                      onPress={() => props.navigation.navigate("Sales Orders")}
                    >
                      <Text color="white">Sales Order</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
            {selectedItem === "Admin" && (
              <View
                position="absolute"
                top="0"
                left="32%"
                width="100px"
                height="100%"
              >
                <View>
                  <View flexDir="row" mb="6">
                    <Pressable
                      onPress={() =>
                        props.navigation.navigate("Company Details")
                      }
                    >
                      <Text color="white">{`${str2.substring(0, 8)}...`}</Text>
                    </Pressable>
                  </View>
                  <View flexDir="row" mb="6">
                    <Pressable
                      onPress={() => props.navigation.navigate("Customize")}
                    >
                      <Text color="white">Customization</Text>
                    </Pressable>
                  </View>
                  <View flexDir="row" mb="6">
                    <View>
                      <Pressable
                        onPress={() => props.navigation.navigate("UserAdmin")}
                      >
                        <Text color="white">User Admin</Text>
                      </Pressable>
                    </View>
                  </View>
                  <View flexDir="row" mb="6">
                    <Pressable
                      onPress={() => props.navigation.navigate("UserList")}
                    >
                      <Text color="white">View Users</Text>
                    </Pressable>
                  </View>
                  <View flexDir="row" mb="6">
                    <Pressable>
                      <Text color="white">Accounting</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            )}
            {selectedItem === "Catalogs" && (
              <View
                position="absolute"
                top="0"
                left="32%"
                width="100px"
                height="100%"
              >
                <View>
                  <View flexDir="row" alignItems="center" mb="6">
                    <View mr="2">
                      <SvgXml xml={products_icon} />
                    </View>
                    <View>
                      <Pressable
                        onPress={() =>
                          props.navigation.navigate("CatalogProducts")
                        }
                      >
                        <Text color="white">Products</Text>
                      </Pressable>
                    </View>
                  </View>
                  <View flexDir="row" alignItems="center" mb="6">
                    <View mr="2">
                      <SvgXml xml={categories_icon} />
                    </View>
                    <View>
                      <Pressable
                        onPress={() =>
                          props.navigation.navigate("CatalogCategories")
                        }
                      >
                        <Text color="white">Categories</Text>
                      </Pressable>
                    </View>
                  </View>
                  <View flexDir="row" alignItems="center" mb="6">
                    <View mr="2">
                      <SvgXml xml={collections_icon} />
                    </View>
                    <View>
                      <Pressable
                        onPress={() =>
                          props.navigation.navigate("CatalogCollections")
                        }
                      >
                        <Text color="white">Collections</Text>
                      </Pressable>
                    </View>
                  </View>
                  <View flexDir="row" alignItems="center" mb="6">
                    <View mr="2">
                      <SvgXml xml={promotions_icon} />
                    </View>
                    <Pressable
                      onPress={() =>
                        props.navigation.navigate("CatalogPromotions")
                      }
                    >
                      <Text color="white">Promotions</Text>
                    </Pressable>
                  </View>
                  <View flexDir="row" alignItems="center" mb="6">
                    <View mr="2">
                      <SvgXml xml={channelexports_icon} />
                    </View>
                    <View>
                      <Text color="white">{`${str.substring(0, 8)}...`}</Text>
                    </View>
                  </View>
                  <View flexDir="row" alignItems="center" mb="6">
                    <View mr="2">
                      <SvgXml xml={presentations_icon} />
                    </View>
                    <Pressable
                      onPress={() =>
                        props.navigation.navigate("CatalogPresentations")
                      }
                    >
                      <Text color="white">Presentations</Text>
                    </Pressable>
                  </View>
                  <View flexDir="row" alignItems="center" mb="6">
                    <View mr="2">
                      <SvgXml xml={prototype_icon} />
                    </View>
                    <Text color="white">Prototypes</Text>
                  </View>
                </View>
              </View>
            )}
            {selectedItem === "Channel" && (
              <View
                position="absolute"
                top="0"
                left="32%"
                width="100px"
                height="100%"
              >
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("AllChannels")}
                  >
                    <Text color="white">Channels</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("ChannelsHome")}
                  >
                    <Text color="white">Dashboard Channels</Text>
                  </Pressable>
                </View>
              </View>
            )}
            {selectedItem === "Partner" && (
              <View
                position="absolute"
                top="0"
                left="32%"
                width="100px"
                height="100%"
              >
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("Create Partner")}
                  >
                    <Text color="white">Create Partner</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("Partner Group")}
                  >
                    <Text color="white">Partner Group</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("Partner Types")}
                  >
                    <Text color="white">Partner Types</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("Partner List")}
                  >
                    <Text color="white">Partner List</Text>
                  </Pressable>
                </View>
              </View>
            )}
            {selectedItem === "Customers" && (
              <View
                position="absolute"
                top="0"
                left="32%"
                width="100px"
                height="100%"
              >
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("CreateCustomer")}
                  >
                    <Text color="white">Create Customer</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("ViewCustomers")}
                  >
                    <Text color="white">View Customers</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() =>
                      props.navigation.navigate("CustomersLocation")
                    }
                  >
                    <Text color="white">Customers Location</Text>
                  </Pressable>
                </View>
              </View>
            )}
            {selectedItem === "Logistics" && (
              <View
                position="absolute"
                top="0"
                left="32%"
                width="100px"
                height="100%"
              >
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("Inventory")}
                  >
                    <Text color="white">Inventory</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("Location")}
                  >
                    <Text color="white">Location</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("LocationList")}
                  >
                    <Text color="white">List of Locations</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("Allocate")}
                  >
                    <Text color="white">Allocate</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("Consignment")}
                  >
                    <Text color="white">Consignment</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("Update Log")}
                  >
                    <Text color="white">Update Log</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("Warehousing")}
                  >
                    <Text color="white">Warehousing</Text>
                  </Pressable>
                </View>
              </View>
            )}
            {selectedItem === "Purchasing" && (
              <View
                position="absolute"
                top="0"
                left="32%"
                width="100px"
                height="100%"
              >
                <View flexDir="row" mb="6" alignItems="center">
                  <Pressable>
                    <View>
                      <SvgXml xml={customers_icon} />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      props.navigation.navigate("Purchasing Order")
                    }
                  >
                    <Text color="white">Create P.O</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6" alignItems="center">
                  <Pressable>
                    <View mr="2">
                      <SvgXml xml={po_status_icon} />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      props.navigation.navigate("Purchasing Order Status")
                    }
                  >
                    <Text color="white">P.O. Status</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable>
                    <View mr="2">
                      <SvgXml xml={forecasting_icon} />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => props.navigation.navigate("Forecasting")}
                  >
                    <Text color="white">Forecasting</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable>
                    <View mr="2">
                      <SvgXml xml={create_container_icon} />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      props.navigation.navigate("Create Container")
                    }
                  >
                    <Text color="white">Create Container</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable>
                    <View mr="2">
                      <SvgXml xml={create_container_icon} />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => props.navigation.navigate("Container Load")}
                  >
                    <Text color="white">Container Load</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable>
                    <View mr="2">
                      <SvgXml xml={recurring_order_icon} />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() =>
                      props.navigation.navigate("Recurring Orders")
                    }
                  >
                    <Text color="white">Recurring Orders</Text>
                  </Pressable>
                </View>
                <View flexDir="row" mb="6">
                  <Pressable>
                    <View mr="2">
                      <SvgXml xml={settings_icon} />
                    </View>
                  </Pressable>
                  <Pressable
                    onPress={() => props.navigation.navigate("Settings")}
                  >
                    <Text color="white">Settings</Text>
                  </Pressable>
                </View>
              </View>
            )}
            {selectedItem === "Global Files" && (
              <View
                position="absolute"
                top="0"
                left="32%"
                width="100px"
                height="100%"
              >
                <View flexDir="row" mb="6">
                  <Pressable
                    onPress={() => props.navigation.navigate("My Files")}
                  >
                    <Text color="white">My Files</Text>
                  </Pressable>
                </View>
              </View>
            )}
          </View>
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  iconText: {
    fontSize: 24,
    color: "white",
  },
  gradientContainer: {
    flex: 1,
  },
  containerIpad: {
    flex: 1,
    flexDirection: "column",
    marginTop: 15,
    width: "70%",
  },
  iconContainer: {
    marginRight: 2,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 5,
  },
  sideMenuProfileIcon: {
    resizeMode: "contain",
    width: 60,
    height: 60,
    marginRight: 10,
  },
  profileText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Inter-Bold",
    fontWeight: 800,
  },
  customItem: {},
  drawerItemIcon: {
    width: 24,
    height: 24,
  },
  drawerLabel: {
    color: "white",
    paddingHorizontal: 0,
  },
  submenuToggle: {
    flexDirection: "row",
    marginLeft: 20,
  },
  submenuToggleText: {
    color: "#fff",
    fontFamily: "Inter-Regular",
  },
  submenuItem: {
    marginLeft: 50,
    marginVertical: 0,
    height: 40,
    padding: 0,
    justifyContent: "center",
  },
  submenuContainer: {},
  drawerItem: {
    marginVertical: 0,
    height: 40,
    padding: 0,
    justifyContent: "center",
  },
  centeredContent: {
    position: "absolute",
    top: "-50%",
    left: "-50%",
  },
});

export default CustomSidebarMenu;
