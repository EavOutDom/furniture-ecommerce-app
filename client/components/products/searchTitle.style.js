import { StyleSheet } from "react-native";
import { SIZES, SHADOWS, COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SIZES.small,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#fff',
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite
  },
  img: {
    width: 70,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignContent: 'center'
  },
  productImg: {
    width: '100%',
    height: 64,
    borderRadius: SIZES.small,
    resizeMode: 'cover'
  },
  txtContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium
  },
  productTitle: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.primary
  },
  supplier: {
    fontFamily: 'regular',
    fontSize: SIZES.small + 2,
    marginTop: 2,
    color: COLORS.gray
  }
});

export default styles;