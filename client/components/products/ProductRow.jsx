import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
// import styles from "./productRow.style";
import { COLORS, SIZES } from "../../constants/theme";
import { FlatList } from "react-native";
import ProductCardView from "./ProductCardView";
import { StyleSheet } from "react-native";
import useFetch from "../../hook/useFetch";

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
          renderItem={({ item }) => <ProductCardView item={item}/>}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
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
