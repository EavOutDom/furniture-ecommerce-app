import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
// import styles from "./productRow.style";
import { COLORS, SIZES } from "../../constants/theme";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import useFetch from "../../hook/useFetch";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const { data, isLoading, isError } = useFetch();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : isError ? (
        <Text>Something went wrong!</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
        />
      )}
    </View>
  );
};

export default ProductRow;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
