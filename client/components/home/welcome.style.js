import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  welcomeTxt: (color, top) => ({
    fontFamily: 'bold',
    lineHeight: 50,
    fontSize: SIZES.xxLarge - 10,
    marginTop: top,
    marginHorizontal: SIZES.small,
    color: color
  }),
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
  }
});

export default styles;