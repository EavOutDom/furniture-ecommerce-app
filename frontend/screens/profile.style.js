import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    marginBottom: 70
  },
  cover: {
    height: 290,
    width: '100%',
    resizeMode: 'cover'
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center'
  },
  profile: {
    height: 150,
    width: 150,
    borderRadius: 999,
    marginTop: -75,
    resizeMode: 'cover',
    borderColor: COLORS.primary,
    borderWidth: 2
  },
  name: {
    fontFamily: 'bold',
    marginVertical: 5,
    color: COLORS.primary
  },
  loginBtn: {
    backgroundColor: COLORS.secondary,
    padding: 2,
    borderColor: COLORS.primary,
    borderWidth: 0.4,
    borderRadius: SIZES.xxLarge
  },
  menuText: {
    fontFamily: 'regular',
    fontSize: 14,
    lineHeight: 26,
    fontWeight: "600",
    color: COLORS.gray,
    marginTop: 2,
    marginHorizontal: 20
  },
  menuWrapper: {
    marginTop: SIZES.xLarge,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12
  },
  menuItem: (borderBottomWidth) => ({
    borderBottomWidth: borderBottomWidth,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderColor: COLORS.gray
  })
});

export default styles;