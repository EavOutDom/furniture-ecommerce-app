import {
  View,
  Text,
  Image,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "./profile.style";
import { COLORS } from "../constants/theme";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", onPress: () => console.log("cancel") },
      { text: "Continue", onPress: () => console.log("logout") },
    ]);
  };

  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure you want to delete all saved data on your device?",
      [
        { text: "Cancel", onPress: () => console.log("cancel") },
        { text: "Continue", onPress: () => console.log("cache") },
      ]
    );
  };

  const deleteAcc = () => {
    Alert.alert("Delete Account", "Are you sure you want to your account?", [
      { text: "Cancel", onPress: () => console.log("cancel") },
      { text: "Continue", onPress: () => console.log("delete acc") },
    ]);
  };

  return (
    <ScrollView style={styles.fullHeight}>
      <View style={styles.container}>
        <View style={{ width: "100%" }}>
          <Image
            style={styles.cover}
            source={require("../assets/images/space.jpg")}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/profile.jpeg")}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userLogin ? userData.name : "Please log in into your account"}
          </Text>
          {userLogin ? (
            <View style={styles.loginBtn}>
              <Text style={styles.menuText}>{userData.email}</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuText}>LOG IN</Text>
              </View>
            </TouchableOpacity>
          )}
          {!userLogin ? (
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Favorites</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                <View style={styles.menuItem(0.2)}>
                  <SimpleLineIcons
                    name="bag"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={clearCache}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="cached"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Clear cache</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={deleteAcc}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign
                    name="deleteuser"
                    color={COLORS.primary}
                    size={24}
                  />
                  <Text style={styles.menuText}>Delete account</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={logout}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="logout" color={COLORS.primary} size={24} />
                  <Text style={styles.menuText}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
