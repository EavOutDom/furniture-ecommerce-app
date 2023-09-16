import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/theme";

const Button = ({ txt, onPress, isValid }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btn(isValid ? COLORS.primary : COLORS.gray)}
    >
      <Text style={styles.btnTxt}>{txt}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: (backgroundColor) => ({
    height: 50,
    width: "100%",
    backgroundColor: backgroundColor,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  }),
  btnTxt: {
    fontFamily: "bold",
    color: COLORS.white,
    fontSize: 18,
  },
});
