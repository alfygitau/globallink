import { View, Text } from "react-native";
import React from "react";

export default function hexafiles() {
  return (
    <View>
      <View flexDir="row" mb="12" alignItems="center">
        {selectedItem === "Catalog" ? (
          <View mr="2" position="relative">
            <TouchableOpacity onPress={() => toggleSubmenu("Catalog")}>
              <View position="absolute" top="0" left="0" zIndex="10">
                <NewHexagon>
                  <SvgXml xml={catalog_active_icon} width={18} height={18} />
                </NewHexagon>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View ml="5" mr="2" position="relative">
            <TouchableOpacity onPress={() => toggleSubmenu("Catalog")}>
              <SvgXml xml={catalog_icon} />
            </TouchableOpacity>
          </View>
        )}
        {!selectedItem || selectedItem === "catalog" ? (
          <TouchableOpacity onPress={() => toggleSubmenu("Catalog")}>
            <Text color="#ffffff" fontSize="12">
              Catalog
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {selectedItem === "Catalog" && (
        <View position="absolute" left="6" top="4" ml="12">
          <View flexDir="row" mb="6" alignItems="center">
            {selectedSubmenu === "Products" ? (
              <View mr="2" mt="-4">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Products")}
                >
                  <NewHexagon>
                    <SvgXml xml={products_active_icon} width={18} height={18} />
                  </NewHexagon>
                </TouchableOpacity>
              </View>
            ) : (
              <View mr="2" ml="4">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Products")}
                >
                  <SvgXml xml={products_icon} />
                </TouchableOpacity>
              </View>
            )}
            {!selectedSubmenu || selectedSubmenu === "products" ? (
              <TouchableOpacity onPress={() => toggleSecondSubMenu("Products")}>
                <Text color="#ffffff" fontSize="12">
                  Products
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
          {selectedSubmenu === "Products" && (
            <View position="absolute" left="10" top="0" ml="7" width="80px">
              <View flexDir="row" mb="4" zIndex="2" alignItems="center">
                {selectedThirdSubmenu === "Menu 1" ? (
                  <View mr="2" mt="-4">
                    <TouchableOpacity
                      onPress={() => toggleThirdSubMenu("Menu 1")}
                    >
                      <NewHexagon>
                        <SvgXml
                          xml={products_active_icon}
                          width={18}
                          height={18}
                        />
                      </NewHexagon>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View mr="6" ml="4">
                    <TouchableOpacity
                      onPress={() => toggleThirdSubMenu("Menu 1")}
                    >
                      <SvgXml xml={products_icon} />
                    </TouchableOpacity>
                  </View>
                )}
                {/* {!selectedThirdSubmenu || selectedThirdSubmenu === "menu 1" ? ( */}
                <TouchableOpacity onPress={() => toggleThirdSubMenu("Menu 1")}>
                  <Text color="#ffffff" fontSize="12">
                    Menu 1
                  </Text>
                </TouchableOpacity>
                {/* ) : null} */}
              </View>
              <View flexDir="row" mb="4" zIndex="2" alignItems="center">
                {selectedThirdSubmenu === "Menu 2" ? (
                  <View mr="2">
                    <TouchableOpacity
                      onPress={() => toggleThirdSubMenu("Menu 2")}
                    >
                      <NewHexagon>
                        <SvgXml
                          xml={products_active_icon}
                          width={18}
                          height={18}
                        />
                      </NewHexagon>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View mr="6" ml="4">
                    <TouchableOpacity
                      onPress={() => toggleThirdSubMenu("Menu 2")}
                    >
                      <SvgXml xml={products_icon} />
                    </TouchableOpacity>
                  </View>
                )}
                {/* {!selectedThirdSubmenu || selectedThirdSubmenu === "menu 1" ? ( */}
                <TouchableOpacity onPress={() => toggleThirdSubMenu("Menu 2")}>
                  <Text color="#ffffff" fontSize="12">
                    Menu 2
                  </Text>
                </TouchableOpacity>
                {/* ) : null} */}
              </View>
              <View flexDir="row" mb="4" zIndex="2" alignItems="center">
                {selectedThirdSubmenu === "Menu 3" ? (
                  <View mr="2">
                    <TouchableOpacity
                      onPress={() => toggleThirdSubMenu("Menu 3")}
                    >
                      <NewHexagon>
                        <SvgXml
                          xml={products_active_icon}
                          width={18}
                          height={18}
                        />
                      </NewHexagon>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View mr="6" ml="4">
                    <TouchableOpacity
                      onPress={() => toggleThirdSubMenu("Menu 3")}
                    >
                      <SvgXml xml={products_icon} />
                    </TouchableOpacity>
                  </View>
                )}
                {/* {!selectedThirdSubmenu || selectedThirdSubmenu === "menu 1" ? ( */}
                <TouchableOpacity onPress={() => toggleThirdSubMenu("Menu 3")}>
                  <Text color="#ffffff" fontSize="12">
                    Menu 3
                  </Text>
                </TouchableOpacity>
                {/* ) : null} */}
              </View>
            </View>
          )}

          {/* next menu */}
          <View flexDir="row" mb="6" alignItems="center">
            {selectedSubmenu === "Categories" ? (
              <View mr="2" mt="-2">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Categories")}
                >
                  <NewHexagon>
                    <SvgXml xml={products_active_icon} width={18} height={18} />
                  </NewHexagon>
                </TouchableOpacity>
              </View>
            ) : (
              <View mr="2" ml="4">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Categories")}
                >
                  <SvgXml xml={categories_icon} />
                </TouchableOpacity>
              </View>
            )}
            {!selectedSubmenu || selectedSubmenu === "categories" ? (
              <TouchableOpacity
                onPress={() => toggleSecondSubMenu("Categories")}
              >
                <Text color="#ffffff" fontSize="12">
                  Categories
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
          {selectedSubmenu === "Categories" && (
            <View position="absolute" left="10" top="0" ml="8" width="80px">
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu x
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 2
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 3
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          <View flexDir="row" mb="6" alignItems="center">
            {selectedSubmenu === "Collections" ? (
              <View mr="2" mt="-2">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Collections")}
                >
                  <NewHexagon>
                    <SvgXml xml={products_active_icon} width={18} height={18} />
                  </NewHexagon>
                </TouchableOpacity>
              </View>
            ) : (
              <View mr="2" ml="4">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Collections")}
                >
                  <SvgXml xml={collections_icon} />
                </TouchableOpacity>
              </View>
            )}
            {!selectedSubmenu || selectedSubmenu === "collections" ? (
              <TouchableOpacity
                onPress={() => toggleSecondSubMenu("Collections")}
              >
                <Text color="#ffffff" fontSize="12">
                  Collections
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>

          {/* next menu */}
          {selectedSubmenu === "Collections" && (
            <View position="absolute" left="10" top="0" ml="8" width="80px">
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 1
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 2
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 3
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          <View flexDir="row" mb="6" alignItems="center">
            {selectedSubmenu === "Promotions" ? (
              <View mr="2" mt="-2">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Promotions")}
                >
                  <NewHexagon>
                    <SvgXml xml={products_active_icon} width={18} height={18} />
                  </NewHexagon>
                </TouchableOpacity>
              </View>
            ) : (
              <View mr="2" ml="4">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Promotions")}
                >
                  <SvgXml xml={promotions_icon} />
                </TouchableOpacity>
              </View>
            )}
            {!selectedSubmenu || selectedSubmenu === "promotions" ? (
              <TouchableOpacity
                onPress={() => toggleSecondSubMenu("Promotions")}
              >
                <Text color="#ffffff" fontSize="12">
                  Promotions
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>

          {/* next menu */}
          {selectedSubmenu === "Promotions" && (
            <View position="absolute" left="10" top="0" ml="8" width="80px">
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 1
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 2
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 3
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          <View flexDir="row" mb="6" alignItems="center">
            {selectedSubmenu === "Channel Exports" ? (
              <View mr="2" mt="-2">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Channel Exports")}
                >
                  <NewHexagon>
                    <SvgXml xml={products_active_icon} width={18} height={18} />
                  </NewHexagon>
                </TouchableOpacity>
              </View>
            ) : (
              <View mr="2" ml="4">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Channel Exports")}
                >
                  <SvgXml xml={channels_icon} />
                </TouchableOpacity>
              </View>
            )}
            {!selectedSubmenu || selectedSubmenu === "channel exports" ? (
              <TouchableOpacity
                onPress={() => toggleSecondSubMenu("Channel Exports")}
              >
                <Text color="#ffffff" fontSize="12">
                  Channel Exports
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>

          {/* next menu */}
          {selectedSubmenu === "Channel Exports" && (
            <View position="absolute" left="10" top="0" ml="8" width="80px">
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 1
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 2
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 3
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          <View flexDir="row" mb="6" alignItems="center">
            {selectedSubmenu === "Presentations" ? (
              <View mr="2" mt="-2">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Presentations")}
                >
                  <NewHexagon>
                    <SvgXml xml={products_active_icon} width={18} height={18} />
                  </NewHexagon>
                </TouchableOpacity>
              </View>
            ) : (
              <View mr="2" ml="4">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Presentations")}
                >
                  <SvgXml xml={presentations_icon} />
                </TouchableOpacity>
              </View>
            )}
            {!selectedSubmenu || selectedSubmenu === "presentations" ? (
              <TouchableOpacity
                onPress={() => toggleSecondSubMenu("Presentations")}
              >
                <Text color="#ffffff" fontSize="12">
                  Presentations
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>

          {/* next menu */}
          {selectedSubmenu === "Presentations" && (
            <View position="absolute" left="10" top="0" ml="8" width="80px">
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 1
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 2
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 3
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          <View flexDir="row" mb="6" alignItems="center">
            {selectedSubmenu === "Prototypes" ? (
              <View mr="2" mt="-2">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Prototypes")}
                >
                  <NewHexagon>
                    <SvgXml xml={products_active_icon} width={18} height={18} />
                  </NewHexagon>
                </TouchableOpacity>
              </View>
            ) : (
              <View mr="2" ml="4">
                <TouchableOpacity
                  onPress={() => toggleSecondSubMenu("Prototypes")}
                >
                  <SvgXml xml={prototype_icon} />
                </TouchableOpacity>
              </View>
            )}
            {!selectedSubmenu || selectedSubmenu === "prototypes" ? (
              <TouchableOpacity
                onPress={() => toggleSecondSubMenu("Prototypes")}
              >
                <Text color="#ffffff" fontSize="12">
                  Prototypes
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
          {selectedSubmenu === "Prototypes" && (
            <View position="absolute" left="10" top="0" ml="8" width="80px">
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 1
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 2
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" mb="6" zIndex="2">
                  <TouchableOpacity>
                    <SvgXml xml={products_icon} />
                  </TouchableOpacity>
                  <Text ml="2" color="#ffffff" fontSize="12">
                    Submenu 3
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      <View flexDir="row" mb="6" alignItems="center">
        {selectedItem === "Partners" ? (
          <View mr="2" position="relative">
            <TouchableOpacity onPress={() => toggleSubmenu("Partners")}>
              <NewHexagon>
                <SvgXml xml={partners_active_icon} width={18} height={18} />
              </NewHexagon>
            </TouchableOpacity>
          </View>
        ) : (
          <View ml="5" mr="2" position="relative">
            <TouchableOpacity onPress={() => toggleSubmenu("Partners")}>
              <SvgXml xml={partners_icon} />
            </TouchableOpacity>
          </View>
        )}
        {!selectedItem || selectedItem === "partners" ? (
          <TouchableOpacity onPress={() => toggleSubmenu("Partners")}>
            <Text color="#ffffff" fontSize="12">
              Partners
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {selectedItem === "Partners" && (
        <View position="absolute" left="10" top="4" ml="12">
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={products_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                Partner List
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={products_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                Create Partner Types
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={products_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                Create Partner
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={products_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                Create Group
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={partner_group_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                View Groups
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={() => toggleSubmenu("Logistics")}>
        <View flexDir="row" mb="6" alignItems="center">
          <View ml="3" mr="2">
            <SvgXml xml={logistics_icon} />
          </View>
          {!selectedItem || selectedItem === "logistics" ? (
            <Text color="#ffffff" fontSize="12">
              Logistics
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
      <View flexDir="row" mb="6" alignItems="center">
        {selectedItem === "Purchasing" ? (
          <View mr="2" position="relative">
            <TouchableOpacity onPress={() => toggleSubmenu("Purchasing")}>
              <NewHexagon>
                <SvgXml xml={purchasing_active_icon} width={18} height={18} />
              </NewHexagon>
            </TouchableOpacity>
          </View>
        ) : (
          <View ml="5" mr="2" position="relative">
            <TouchableOpacity onPress={() => toggleSubmenu("Purchasing")}>
              <SvgXml xml={purchasing_icon} />
            </TouchableOpacity>
          </View>
        )}
        {!selectedItem || selectedItem === "purchasing" ? (
          <TouchableOpacity onPress={() => toggleSubmenu("Purchasing")}>
            <Text color="#ffffff" fontSize="12">
              Purchasing
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {selectedItem === "Purchasing" && (
        <View position="absolute" left="10" top="4" ml="12">
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={products_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                Create P.O
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={po_status_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                P.O Status
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={forecasting_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                Forecasting
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={create_container_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                Create Container
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={container_load_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                Container Load
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={recurring_order_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                Recurring Orders
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View flexDir="row" mb="6" zIndex="2">
              <View mr="4">
                <SvgXml xml={po_settings_icon} />
              </View>
              <Text color="#ffffff" fontSize="12">
                Settings
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={() => toggleSubmenu("Customers")}>
        <View flexDir="row" mb="6" alignItems="center">
          <View ml="3" mr="2">
            <SvgXml xml={customers_icon} />
          </View>
          {!selectedItem || selectedItem === "customers" ? (
            <Text color="#ffffff" fontSize="12">
              Customers
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleSubmenu("Channels")}>
        <View flexDir="row" mb="6" alignItems="center">
          <View ml="3" mr="2">
            <SvgXml xml={channels_icon} />
          </View>
          {!selectedItem || selectedItem === "channels" ? (
            <Text color="#ffffff" fontSize="12">
              Channels
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleSubmenu("Reports")}>
        <View flexDir="row" mb="6" alignItems="center">
          <View ml="3" mr="2">
            <SvgXml xml={report_icon} />
          </View>
          {!selectedItem || selectedItem === "reports" ? (
            <Text color="#ffffff" fontSize="12">
              Reports
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleSubmenu("Marketing")}>
        <View flexDir="row" mb="6" alignItems="center">
          <View ml="3" mr="2">
            <SvgXml xml={marketing_icon} />
          </View>
          {!selectedItem || selectedItem === "marketing" ? (
            <Text color="#ffffff" fontSize="12">
              Marketing
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleSubmenu("Globalfiles")}>
        <View flexDir="row" mb="6" alignItems="center">
          <View ml="3" mr="2">
            <SvgXml xml={globalfiles_icon} />
          </View>
          {!selectedItem || selectedItem === "globalfiles" ? (
            <Text color="#ffffff" fontSize="12">
              Global files
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleSubmenu("Links")}>
        <View flexDir="row" mb="6" alignItems="center">
          <View ml="3" mr="2">
            <SvgXml xml={links_icon} />
          </View>
          {!selectedItem || selectedItem === "links" ? (
            <Text color="#ffffff" fontSize="12">
              Links
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleSubmenu("Globalstore")}>
        <View flexDir="row" mb="6" alignItems="center">
          {selectedItem === "Globalstore" ? (
            <View mr="2">
              <Hexagon>
                <SvgXml xml={dash_active_icon} />
              </Hexagon>
            </View>
          ) : (
            <View ml="3" mr="2">
              <SvgXml xml={globalstore_icon} />
            </View>
          )}
          {!selectedItem || selectedItem === "globalstore" ? (
            <Text color="#ffffff" fontSize="12">
              Global store
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
}

{
  /* <View flexDir="row" paddingX="2" mb="6">
              <TouchableOpacity>
                <View flexDir="row" mr="4" alignItems="center">
                  <View mr="2">
                    <SvgXml xml={support_icon} />
                  </View>
                  <Text color="#ffffff" fontSize="12">
                    Support
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View flexDir="row" alignItems="center">
                  <View mr="2">
                    <SvgXml xml={settings_icon} />
                  </View>
                  <Text color="#ffffff" fontSize="12">
                    Settings
                  </Text>
                </View>
              </TouchableOpacity>
            </View> */

  <View paddingX="2" height="800" mt="8">
    <View flexDir="row" alignItems="center" mb="8" ml="6">
      <View mr="2">
        <Pressable onPress={() => toggleSubmenu("Dashboard")}>
          <SvgXml xml={dash_icon} />
        </Pressable>
        {selectedItem === "Dashboard" && (
          <View position="absolute" top="-60%" left="-60%" flexDir="row">
            <View flexDir="row" alignItems="center">
              <View mr="4">
                <Pressable onPress={() => toggleSubmenu("Dashboard")}>
                  <NewHexagon>
                    <SvgXml xml={dash_active_icon} width={18} height={18} />
                  </NewHexagon>
                </Pressable>
              </View>
              <View flexDir="row" alignItems="center">
                <View mr="2">
                  <Pressable onPress={() => toggleSecondSubMenu("Products")}>
                    <SvgXml xml={products_icon} />
                  </Pressable>
                  {selectedSubmenu === "Products" && (
                    <View
                      position="absolute"
                      top="-30%"
                      left="-20%"
                      flexDir="row"
                    >
                      <View flexDir="row" alignItems="center">
                        <View mr="4">
                          <Pressable
                            onPress={() => toggleSecondSubMenu("Products")}
                          >
                            <NewHexagon>
                              <SvgXml
                                xml={dash_active_icon}
                                width={18}
                                height={18}
                              />
                            </NewHexagon>
                          </Pressable>
                        </View>
                        <View flexDir="row" alignItems="center">
                          <View mr="2">
                            <Pressable
                              onPress={() => toggleThirdSubMenu("Orders")}
                            >
                              <SvgXml xml={products_icon} />
                            </Pressable>
                            {selectedThirdSubmenu === "Orders" && (
                              <View
                                position="absolute"
                                top="-30%"
                                left="-20%"
                                flexDir="row"
                                zIndex="20"
                              >
                                <View flexDir="row" alignItems="center">
                                  <View mr="2">
                                    <Pressable
                                      onPress={() =>
                                        toggleThirdSubMenu("Orders")
                                      }
                                    >
                                      <NewHexagon>
                                        <SvgXml
                                          xml={products_active_icon}
                                          width={18}
                                          height={18}
                                        />
                                      </NewHexagon>
                                    </Pressable>
                                  </View>
                                  <View>
                                    <Text color="white">Order</Text>
                                  </View>
                                </View>
                              </View>
                            )}
                          </View>
                          <View>
                            <Pressable
                              onPress={() => toggleThirdSubMenu("Orders")}
                            >
                              <View>
                                {!selectedThirdSubmenu ||
                                selectedThirdSubmenu === "orders" ? (
                                  <Text color="white">Orders</Text>
                                ) : null}
                              </View>
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    </View>
                  )}
                </View>

                <Pressable onPress={() => toggleSecondSubMenu("Products")}>
                  <View>
                    {!selectedSubmenu || selectedSubmenu === "products" ? (
                      <Text color="white">Products</Text>
                    ) : null}
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>

      <Pressable onPress={() => toggleSubmenu("Dashboard")}>
        <View>
          {!selectedItem || selectedItem === "dashboard" ? (
            <Text color="white">Dashboard</Text>
          ) : null}
        </View>
      </Pressable>
    </View>
    <View flexDir="row" alignItems="center" mb="8" ml="6">
      <Pressable onPress={() => toggleSubmenu("Catalog")}>
        <View mr="2">
          <SvgXml xml={catalog_icon} />
          {selectedItem === "Catalog" && (
            <View position="absolute" top="-60%" left="-60%">
              <NewHexagon>
                <SvgXml xml={catalog_active_icon} width={18} height={18} />
              </NewHexagon>
            </View>
          )}
        </View>
      </Pressable>
      <Pressable onPress={() => toggleSubmenu("Catalog")}>
        <View>
          {!selectedItem || selectedItem === "catalog" ? (
            <Text color="white">Catalog</Text>
          ) : null}
        </View>
      </Pressable>
    </View>
    <View flexDir="row" alignItems="center" mb="8" ml="6">
      <Pressable onPress={() => toggleSubmenu("Purchasing")}>
        <View mr="2">
          <SvgXml xml={purchasing_icon} />
          {selectedItem === "Purchasing" && (
            <View position="absolute" top="-60%" left="-60%">
              <NewHexagon>
                <SvgXml xml={purchasing_active_icon} width={18} height={18} />
              </NewHexagon>
            </View>
          )}
        </View>
      </Pressable>
      <Pressable onPress={() => toggleSubmenu("Purchasing")}>
        <View>
          {!selectedItem || selectedItem === "purchasing" ? (
            <Text color="white">Purchasing</Text>
          ) : null}
        </View>
      </Pressable>
    </View>
  </View>;

  //   second
  <View>
    <View flexDir="row" mb="8" alignItems="center">
      <View mr="6">
        <Pressable onPress={() => toggleSubmenu("Dashboard")}>
          <SvgXml xml={dash_icon} />
        </Pressable>
        {selectedItem === "Dashboard" && (
          <View position="absolute" top="-50%" left="-50%">
            <View>
              <Pressable onPress={() => toggleSubmenu("Dashboard")}>
                <NewHexagon>
                  <SvgXml xml={dash_active_icon} width={18} height={18} />
                </NewHexagon>
              </Pressable>
              <View position="absolute" left="82" top="17px" width="100">
                <View mb="32px" flexDir="row" alignItems="center">
                  <View mr="2">
                    <Pressable onPress={() => toggleSecondSubMenu("Products")}>
                      <SvgXml xml={products_icon} />
                    </Pressable>
                    {selectedSubmenu === "Products" && (
                      <View position="absolute" top="-80%" left="-50%">
                        <View>
                          <Pressable
                            onPress={() => toggleSecondSubMenu("Products")}
                          >
                            <NewHexagon>
                              <SvgXml
                                xml={products_active_icon}
                                height={18}
                                width={18}
                              />
                            </NewHexagon>
                          </Pressable>
                          <View
                            position="absolute"
                            left="82"
                            top="17px"
                            width="100"
                          >
                            <View flexDir="row" alignItems="center" mb="24px">
                              <View mr="6">
                                <Pressable
                                  onPress={() => toggleThirdSubMenu("Partners")}
                                >
                                  <SvgXml xml={partners_icon} />
                                </Pressable>
                                {selectedThirdSubmenu === "Partners" && (
                                  <View
                                    position="absolute"
                                    top="-70%"
                                    left="-50%"
                                  >
                                    <Pressable
                                      onPress={() =>
                                        toggleThirdSubMenu("Partners")
                                      }
                                    >
                                      <NewHexagon>
                                        <SvgXml
                                          xml={products_active_icon}
                                          width={18}
                                          height={18}
                                        />
                                      </NewHexagon>
                                    </Pressable>
                                  </View>
                                )}
                              </View>
                              <View>
                                <Pressable
                                  onPress={() => toggleThirdSubMenu("Partners")}
                                >
                                  <Text color="white">Partners</Text>
                                </Pressable>
                              </View>
                            </View>
                            <View flexDir="row" alignItems="center" mb="20px">
                              <View mr="6">
                                <Pressable
                                  onPress={() =>
                                    toggleThirdSubMenu("Collections")
                                  }
                                >
                                  <SvgXml xml={collections_icon} />
                                </Pressable>
                                {selectedThirdSubmenu === "Collections" && (
                                  <View
                                    position="absolute"
                                    top="-50%"
                                    left="-50%"
                                  >
                                    <Pressable
                                      onPress={() =>
                                        toggleThirdSubMenu("Collections")
                                      }
                                    >
                                      <NewHexagon>
                                        <SvgXml
                                          xml={products_active_icon}
                                          width={18}
                                          height={18}
                                        />
                                      </NewHexagon>
                                    </Pressable>
                                  </View>
                                )}
                              </View>
                              <Pressable
                                onPress={() =>
                                  toggleThirdSubMenu("Collections")
                                }
                              >
                                <View>
                                  <Text color="white">Collections</Text>
                                </View>
                              </Pressable>
                            </View>
                          </View>
                        </View>
                      </View>
                    )}
                  </View>
                  {!selectedSubmenu || selectedSubmenu === "products" ? (
                    <Pressable onPress={() => toggleSecondSubMenu("Products")}>
                      <Text color="white">Products</Text>
                    </Pressable>
                  ) : null}
                </View>
                <View mb="34px" flexDir="row" alignItems="center">
                  <View mr="2">
                    <Pressable onPress={() => toggleSecondSubMenu("Orders")}>
                      <SvgXml xml={products_icon} />
                    </Pressable>
                    {selectedSubmenu === "Orders" && (
                      <View position="absolute" top="-80%" left="-50%">
                        <View>
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
                      </View>
                    )}
                  </View>
                  {!selectedSubmenu || selectedSubmenu === "orders" ? (
                    <Pressable onPress={() => toggleSecondSubMenu("Orders")}>
                      <Text color="white">Orders</Text>
                    </Pressable>
                  ) : null}
                </View>
                <View mb="8" flexDir="row" alignItems="center">
                  <View mr="2">
                    <Pressable onPress={() => toggleSecondSubMenu("Services")}>
                      <SvgXml xml={products_icon} />
                    </Pressable>
                    {selectedSubmenu === "Services" && (
                      <View position="absolute" top="-80%" left="-50%">
                        <Pressable
                          onPress={() => toggleSecondSubMenu("Services")}
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
                  {!selectedSubmenu || selectedSubmenu === "services" ? (
                    <Pressable onPress={() => toggleSecondSubMenu("Services")}>
                      <Text color="white">Services</Text>
                    </Pressable>
                  ) : null}
                </View>
                {/* add */}
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        <Pressable onPress={() => toggleSubmenu("Dashboard")}>
          {!selectedItem || selectedItem === "dashboard" ? (
            <Text color="white">Dashboard</Text>
          ) : null}
        </Pressable>
      </View>
    </View>
    <View flexDir="row" mb="8" alignItems="center" width="60">
      <View mr="6">
        <Pressable onPress={() => toggleSubmenu("Catalog")}>
          <SvgXml xml={catalog_icon} />
        </Pressable>
        {selectedItem === "Catalog" && (
          <View position="absolute" top="-50%" left="-50%">
            <Pressable onPress={() => toggleSubmenu("Catalog")}>
              <NewHexagon>
                <SvgXml xml={catalog_active_icon} width={18} height={18} />
              </NewHexagon>
            </Pressable>
          </View>
        )}
      </View>
      <View>
        <Pressable onPress={() => toggleSubmenu("Catalog")}>
          {!selectedItem || selectedItem === "catalog" ? (
            <Text color="white">Catalog</Text>
          ) : null}
        </Pressable>
      </View>
    </View>
    <View flexDir="row" mb="8" alignItems="center" width="60">
      <View mr="6">
        <Pressable onPress={() => toggleSubmenu("Sales")}>
          <SvgXml xml={sales_icon} />
        </Pressable>
        {selectedItem === "Sales" && (
          <View position="absolute" top="-50%" left="-50%">
            <Pressable onPress={() => toggleSubmenu("Sales")}>
              <NewHexagon>
                <SvgXml xml={products_active_icon} width={18} height={18} />
              </NewHexagon>
            </Pressable>
          </View>
        )}
      </View>
      <View>
        <Pressable onPress={() => toggleSubmenu("Sales")}>
          {!selectedItem || selectedItem === "sales" ? (
            <Text color="white">Sales</Text>
          ) : null}
        </Pressable>
      </View>
    </View>
    <View flexDir="row" mb="8" alignItems="center">
      <View mr="6">
        <Pressable onPress={() => toggleSubmenu("Presentations")}>
          <SvgXml xml={dash_icon} />
        </Pressable>
        {selectedItem === "Presentations" && (
          <View position="absolute" top="-50%" left="-50%">
            <View>
              <Pressable onPress={() => toggleSubmenu("Presentations")}>
                <NewHexagon>
                  <SvgXml xml={dash_active_icon} width={18} height={18} />
                </NewHexagon>
              </Pressable>
              <View position="absolute" left="82" top="17px" width="100">
                <View mb="32px" flexDir="row" alignItems="center">
                  <View mr="2">
                    <Pressable onPress={() => toggleSecondSubMenu("Best")}>
                      <SvgXml xml={products_icon} />
                    </Pressable>
                    {selectedSubmenu === "Best" && (
                      <View position="absolute" top="-80%" left="-50%">
                        <View>
                          <Pressable
                            onPress={() => toggleSecondSubMenu("Best")}
                          >
                            <NewHexagon>
                              <SvgXml
                                xml={products_active_icon}
                                height={18}
                                width={18}
                              />
                            </NewHexagon>
                          </Pressable>
                          <View
                            position="absolute"
                            left="82"
                            top="17px"
                            width="100"
                          >
                            <View flexDir="row" alignItems="center" mb="25px">
                              <View mr="6">
                                <Pressable
                                  onPress={() => toggleThirdSubMenu("Partners")}
                                >
                                  <SvgXml xml={partners_icon} />
                                </Pressable>
                                {selectedThirdSubmenu === "Partners" && (
                                  <View
                                    position="absolute"
                                    top="-70%"
                                    left="-50%"
                                  >
                                    <Pressable
                                      onPress={() =>
                                        toggleThirdSubMenu("Partners")
                                      }
                                    >
                                      <NewHexagon>
                                        <SvgXml
                                          xml={products_active_icon}
                                          width={18}
                                          height={18}
                                        />
                                      </NewHexagon>
                                    </Pressable>
                                  </View>
                                )}
                              </View>
                              <View>
                                <Pressable
                                  onPress={() => toggleThirdSubMenu("Partners")}
                                >
                                  <Text color="white">Partners</Text>
                                </Pressable>
                              </View>
                            </View>
                            <View flexDir="row" alignItems="center" mb="20px">
                              <View mr="6">
                                <Pressable
                                  onPress={() =>
                                    toggleThirdSubMenu("Collections")
                                  }
                                >
                                  <SvgXml xml={collections_icon} />
                                </Pressable>
                                {selectedThirdSubmenu === "Collections" && (
                                  <View
                                    position="absolute"
                                    top="-50%"
                                    left="-50%"
                                  >
                                    <Pressable
                                      onPress={() =>
                                        toggleThirdSubMenu("Collections")
                                      }
                                    >
                                      <NewHexagon>
                                        <SvgXml
                                          xml={products_active_icon}
                                          width={18}
                                          height={18}
                                        />
                                      </NewHexagon>
                                    </Pressable>
                                  </View>
                                )}
                              </View>
                              <Pressable
                                onPress={() =>
                                  toggleThirdSubMenu("Collections")
                                }
                              >
                                <View>
                                  <Text color="white">Collections</Text>
                                </View>
                              </Pressable>
                            </View>
                          </View>
                        </View>
                      </View>
                    )}
                  </View>
                  {!selectedSubmenu || selectedSubmenu === "best" ? (
                    <Pressable onPress={() => toggleSecondSubMenu("Best")}>
                      <Text color="white">Best</Text>
                    </Pressable>
                  ) : null}
                </View>
                <View mb="34px" flexDir="row" alignItems="center">
                  <View mr="2">
                    <Pressable onPress={() => toggleSecondSubMenu("Unique")}>
                      <SvgXml xml={products_icon} />
                    </Pressable>
                    {selectedSubmenu === "Unique" && (
                      <View position="absolute" top="-80%" left="-50%">
                        <View>
                          <Pressable
                            onPress={() => toggleSecondSubMenu("Unique")}
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
                      </View>
                    )}
                  </View>
                  {!selectedSubmenu || selectedSubmenu === "unique" ? (
                    <Pressable onPress={() => toggleSecondSubMenu("Unique")}>
                      <Text color="white">Unique</Text>
                    </Pressable>
                  ) : null}
                </View>
                <View mb="8" flexDir="row" alignItems="center">
                  <View mr="2">
                    <Pressable onPress={() => toggleSecondSubMenu("Worst")}>
                      <SvgXml xml={products_icon} />
                    </Pressable>
                    {selectedSubmenu === "Worst" && (
                      <View position="absolute" top="-80%" left="-50%">
                        <Pressable onPress={() => toggleSecondSubMenu("Worst")}>
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
                  {!selectedSubmenu || selectedSubmenu === "worst" ? (
                    <Pressable onPress={() => toggleSecondSubMenu("Worst")}>
                      <Text color="white">Worst</Text>
                    </Pressable>
                  ) : null}
                </View>
                {/* add */}
              </View>
            </View>
          </View>
        )}
      </View>
      <View>
        <Pressable onPress={() => toggleSubmenu("Presentations")}>
          {!selectedItem || selectedItem === "presentations" ? (
            <Text color="white">Presentations</Text>
          ) : null}
        </Pressable>
      </View>
    </View>
  </View>;
}

// second option
