import {} from "react-native";
import React, { useEffect, useState } from "react";
import { Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { getSingleProduct } from "../../../../sdk/catalog/products";

export default function ProductDetails({ route, navigation }) {
  const { productId } = route.params ?? {};
  const [product, setProduct] = useState({});
  console.log(product);
  console.log(productId);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getSingleProduct(productId);
      setProduct(response?.data);
    };
    fetchProduct();
  }, [productId]);
  
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
        >
          <Text>Product Details</Text>
        </View>
      </ScrollView>
    </View>
  );
}
