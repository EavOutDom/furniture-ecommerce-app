import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  contain: {
    height: SIZES.height / 2.4,
    width: SIZES.width - 64,
    resizeMode: 'contain',
    marginBottom: SIZES.xxLarge
  },
  title: {
    fontFamily: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    fontSize: SIZES.xLarge,
    marginBottom: SIZES.xxLarge
  },
});

export default styles;