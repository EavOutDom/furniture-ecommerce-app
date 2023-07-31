import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigator = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={styles.welcomeTxt(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            onPressIn={() => {}}
            placeholder="what are you looking for"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons
            name="camera-outline"
            color={COLORS.offwhite}
            size={SIZES.xLarge}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
