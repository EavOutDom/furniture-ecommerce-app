import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import styles from "./productLists.style";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants/theme";
import ProductCardView from "./ProductCardView";

const ProductLists = () => {
  const { data, isLoading } = useFetch();
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        style={{ marginBottom: SIZES.small }}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
};

export default ProductLists;
