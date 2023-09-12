import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./searchTitle.style";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchTitle = ({ item }) => {
  const navigator = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigator.navigate("ProductDetails", { item })}
      >
        <View style={styles.img}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImg} />
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.supplier}>{item.supplier}</Text>
          <Text style={styles.supplier}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchTitle;
