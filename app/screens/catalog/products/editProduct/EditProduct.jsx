import {} from "react-native";
import React, { useEffect, useState } from "react";
import { getSingleProduct } from "../../../../sdk/catalog/products";
import { Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default function EditProduct({ navigation, route }) {
  const { productId } = route.params ?? {};
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await getSingleProduct(productId);
      setProduct(res?.data);
    };

    fetchProduct();
  }, [productId]);

  console.log(product);
  return (
    <View backgroundColor="#F9F9F9" flex={1} paddingTop="2">
      <ScrollView>
        <View
          width="95%"
          alignSelf="center"
          mt={Platform.OS === "ios" ? "4" : "0"}
          mb="3"
        >
          <Text>Edit Product</Text>
        </View>
      </ScrollView>
    </View>
  );
}
