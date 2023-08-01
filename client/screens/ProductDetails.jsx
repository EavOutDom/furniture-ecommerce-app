import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styles from "./productDetails.style";
import { TouchableOpacity } from "react-native";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";

const ProductDetails = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((pre) => pre + 1);
  };

  const handleDecrement = () => {
    setCount((pre) => pre - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image style={styles.img} source={require("../assets/images/fn1.jpg")} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$665.64</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Ionicons name="star" color="gold" size={24} key={star} />
            ))}
            <Text style={styles.ratingText}>{"  "}(4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={handleDecrement}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}>
              {"   "}
              {count}
              {"   "}
            </Text>
            <TouchableOpacity onPress={handleIncrement}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
            nesciunt deserunt perspiciatis id nemo modi inventore rem, velit
            quod. Fuga deleniti soluta ea rerum voluptatem voluptas recusandae
            sit, explicabo est!
          </Text>
        </View>
        <View
          style={{ marginBottom: SIZES.small, marginHorizontal: SIZES.large }}
        >
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={20} />
              <Text>{"  "}Phnom Penh, Cambodia</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Free Delivery </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
