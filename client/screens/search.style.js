import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    height: 50,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.small
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondary
  },
  searchInput: {
    fontFamily: 'regular',
    height: '100%',
    width: '100%',
    paddingHorizontal: SIZES.small
  },
  searchBtn: {
    width: 50,
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchImg: {
    resizeMode: 'contain',
    height: SIZES.height - 300,
    width: SIZES.width - 100
  }
});

export default styles;