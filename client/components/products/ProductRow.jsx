import { View, Text } from "react-native";
import React from "react";
// import styles from "./productRow.style";
import { SIZES } from "../../constants/theme";
import { FlatList } from "react-native";
import ProductCardView from "./ProductCardView";
import { StyleSheet } from "react-native";

const ProductRow = () => {
  const productList = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    marginHorizontal: 12,
    marginBottom: 20,
  },
});
