import { View, Text, ActivityIndicator, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../constants/theme";
import styles from "./search.style";
import { TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import axios from "axios";
import { API } from "../connection";

const Search = () => {
  const [txtSearch, setTxtSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API + `products/search/${txtSearch}`);
      if (res) {
        setSearchResult(await res.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value={txtSearch}
            onChangeText={setTxtSearch}
            placeholder="what are you looking for"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Feather name="search" color={COLORS.offwhite} size={SIZES.xLarge} />
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator color={COLORS.primary} size={SIZES.xxLarge} />
      ) : searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImg}
          />
        </View>
      ) : (
        <View></View>
      )}
    </SafeAreaView>
  );
};

export default Search;
