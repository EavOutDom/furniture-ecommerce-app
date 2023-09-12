import { View, Text } from "react-native";
import React from "react";
import styles from "./headings.style";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Headings = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={() => navigator.navigate("New Rivals")}>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
