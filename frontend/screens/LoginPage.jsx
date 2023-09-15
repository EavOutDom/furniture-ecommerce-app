import { View, Text, ScrollView, SafeAreaView, Image } from "react-native";
import React from "react";
import styles from "./loginPage.style";
import { BackBtn, Button } from "../components";

const LoginPage = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require("../assets/images/bk.png")}
            style={styles.contain}
          />
          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
          <Button txt="LOGIN" onPress={() => {}} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginPage;
