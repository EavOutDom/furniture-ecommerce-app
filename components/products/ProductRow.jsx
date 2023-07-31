import { View, Text } from "react-native";
import React from "react";
import styles from "./productRow.style";
import { SIZES } from "../../constants/theme";
import { FlatList } from "react-native";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const productList = [1, 2, 3, 4];
  return (
    <View style={{ marginTop: SIZES.medium }}>
      <FlatList
        data={productList}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
      <Text>Hello world</Text>
    </View>
  );
};

export default ProductRow;
