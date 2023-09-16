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
  label: {
    fontFamily: 'regular',
    fontSize: SIZES.xSmall,
    textAlign: 'right',
    marginBottom: 5,
    marginEnd: 5
  },
  inputWrapper: (borderColor) => ({
    borderWidth: 1,
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    height: 55,
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center'
  }),
  errorMessage: {
    color: COLORS.red,
    fontFamily: 'regular',
    marginTop: 5,
    marginLeft: 5,
    fontSize: SIZES.xSmall
  },
  registerTxt: {
    textAlign: "center",
    marginVertical: 10
  }
});

export default styles;