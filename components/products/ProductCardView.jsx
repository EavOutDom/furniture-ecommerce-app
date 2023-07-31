import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = () => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigator.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require("../../assets/images/fn5.jpg")}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product itemsdfsdfdsfds
          </Text>
          <Text style={styles.supplier}>df</Text>
          <Text style={styles.price}>$2342</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
