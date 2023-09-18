import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CompanyDetails from "../screens/Admin/companyDetails/CompanyDetails";
import Customize from "../screens/Admin/customization/Customize";
import UserAdmin from "../screens/Admin/useradmin/UserAdmin";
import HomeScreen from "../screens/homescreen/HomeScreen";
import UserList from "../screens/Admin/userlist/UserList";
import UserDetails from "../screens/Admin/userdetails/UserDetails";
import EditCompanyDetails from "../screens/Admin/companyDetails/EditCompanyDetails";
import Products from "../screens/catalog/products/Products";
import Categories from "../screens/catalog/categories/Categories";
import Collections from "../screens/catalog/collections/Collections";
import Promotions from "../screens/catalog/promotions/Promotions";
import Presentations from "../screens/catalog/presentations/Presentations";
import ProductBulkUpload from "../screens/catalog/products/bulkupload/ProductBulkUpload";
import ProductDetails from "../screens/catalog/products/addProducts/productDetails/ProductDetails";
import ProductVariations from "../screens/catalog/products/addProducts/productVariations/ProductVariations";
import ProductShipping from "../screens/catalog/products/addProducts/productShipping/ProductShipping";
import ProductPricing from "../screens/catalog/products/addProducts/productPricing/ProductPricing";
import ProductImages from "../screens/catalog/products/addProducts/productImages/ProductImages";
import ProductVideos from "../screens/catalog/products/addProducts/productVideos/ProductVideos";
import ProductFiles from "../screens/catalog/products/addProducts/productFiles/ProductFiles";
import ChannelReview from "../screens/catalog/products/addProducts/channelReview/ChannelReview";
import ProductReview from "../screens/catalog/products/addProducts/productReview/ProductReview";
import AllChannels from "../screens/channels/channelList/AllChannels";
import ChannelHome from "../screens/channels/Channeldashboard/ChannelsHome";
import CreateCustomer from "../screens/customer/createCustomer/CreateCustomer";
import Dashboard from "../screens/Logistics/inventory/Dashboard";
import Allocate from "../screens/Logistics/Allocate/Allocate";
import Consignment from "../screens/Logistics/Consignment/Consignment";
import CreateLocation from "../screens/Logistics/location/CreateLocation";
import ListLocation from "../screens/Logistics/location/ListLocation";
import ViewLocation from "../screens/Logistics/location/ViewLocation";
import MyFiles from "../screens/globalFiles/MyFiles";
import CreateOrder from "../screens/purchasing/createOrder/CreateOrder";
import POStatus from "../screens/purchasing/POStatus/POStatus";
import Sales from "../screens/sales/dashboard/Sales";
import SalesOrder from "../screens/sales/salesOrders/SalesOrder";
import CatalogProductDetails from "../screens/catalog/products/productDetails/ProductDetails";
import EditProduct from "../screens/catalog/products/editProduct/EditProduct";
import PartnerList from "../screens/partners/partnerList/PartnerList";
import CreatePartner from "../screens/partners/createPartner/CreatePartner";
import CreateGroup from "../screens/partners/partnersGroup/CreateGroup";
import CreatePartnerTypes from "../screens/partners/partnerTypes/CreatePartnerTypes";
import Customers from "../screens/customer/customerList/Customers";
import CustomerLocations from "../screens/customer/customerLocations/CustomerLocations";

export default function AllScreens() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dash" component={HomeScreen} />
      <Stack.Screen
        name="Edit Company Details"
        component={EditCompanyDetails}
      />
      <Stack.Screen name="Company Details" component={CompanyDetails} />
      <Stack.Screen name="Customize" component={Customize} />
      <Stack.Screen name="UserAdmin" component={UserAdmin} />
      <Stack.Screen name="UserList" component={UserList} />
      <Stack.Screen name="UserDetails" component={UserDetails} />

      {/* catalog screens */}
      <Stack.Screen name="CatalogProducts" component={Products} />
      <Stack.Screen name="CatalogCategories" component={Categories} />
      <Stack.Screen name="CatalogCollections" component={Collections} />
      <Stack.Screen name="CatalogPromotions" component={Promotions} />
      <Stack.Screen name="CatalogPresentations" component={Presentations} />
      <Stack.Screen name="CatalogBulkUpload" component={ProductBulkUpload} />

      {/* add product */}
      <Stack.Screen
        name="CatalogAddProductDetails"
        component={ProductDetails}
      />
      <Stack.Screen
        name="CatalogAddProductVariations"
        component={ProductVariations}
      />
      <Stack.Screen
        name="CatalogAddProductShipping"
        component={ProductShipping}
      />
      <Stack.Screen
        name="CatalogAddProductPricing"
        component={ProductPricing}
      />
      <Stack.Screen name="CatalogAddProductImages" component={ProductImages} />
      <Stack.Screen name="CatalogAddProductVideos" component={ProductVideos} />
      <Stack.Screen name="CatalogAddProductFiles" component={ProductFiles} />
      <Stack.Screen name="CatalogAddProductReview" component={ProductReview} />
      <Stack.Screen
        name="CatalogAddProductChannelReview"
        component={ChannelReview}
      />
      <Stack.Screen
        name="CatalogViewProductDetails"
        component={CatalogProductDetails}
      />
      <Stack.Screen name="CatalogEditProduct" component={EditProduct} />

      {/* channels */}
      <Stack.Screen name="AllChannels" component={AllChannels} />
      <Stack.Screen name="ChannelsHome" component={ChannelHome} />

      {/* customers */}
      <Stack.Screen name="CreateCustomer" component={CreateCustomer} />
      <Stack.Screen name="ViewCustomers" component={Customers} />
      <Stack.Screen name="CustomersLocation" component={CustomerLocations} />

      {/* Logistics */}
      <Stack.Screen name="Inventory" component={Dashboard} />
      <Stack.Screen name="Allocate" component={Allocate} />
      <Stack.Screen name="Consignment" component={Consignment} />
      <Stack.Screen name="Location" component={CreateLocation} />
      <Stack.Screen name="LocationList" component={ListLocation} />
      <Stack.Screen name="ViewLocation" component={ViewLocation} />

      {/* global files */}
      <Stack.Screen name="My Files" component={MyFiles} />

      {/* Purchasing */}
      <Stack.Screen name="Purchasing Order" component={CreateOrder} />
      <Stack.Screen name="Purchasing Order Status" component={POStatus} />

      {/* sales */}
      <Stack.Screen name="Dashboard Sales" component={Sales} />
      <Stack.Screen name="Sales Orders" component={SalesOrder} />

      {/* partners */}
      <Stack.Screen name="Create Partner" component={CreatePartner} />
      <Stack.Screen name="Partner Group" component={CreateGroup} />
      <Stack.Screen name="Partner Types" component={CreatePartnerTypes} />
      <Stack.Screen name="Partner List" component={PartnerList} />
    </Stack.Navigator>
  );
}
