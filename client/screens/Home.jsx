import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { ProductRow, Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";


const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={styles.location}>Shanghai China</Text>
          <View style={{ alignItem: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>4</Text>
            </View>
            <TouchableOpacity>
              <Fontisto size={24} name="shopping-bag" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{ marginBottom: 100 }}>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
