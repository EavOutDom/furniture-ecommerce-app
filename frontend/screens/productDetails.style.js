import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 999,
    position: 'absolute',
    top: SIZES.xxLarge,
    width: SIZES.width - 44
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  details: {
    marginTop: -SIZES.small,
    backgroundColor: COLORS.lightWhite,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 20,
    width: SIZES.width - 44
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 5,
    width: SIZES.width - 10
  },
  rating: {
    top: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large,
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  price: {
    paddingHorizontal: 10,
    paddingTop: 4,
    fontFamily: 'semibold',
    fontSize: SIZES.large
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: 'medium',
    marginBottom: -4,
    paddingHorizontal: SIZES.xSmall
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large
  },
  description: {
    fontFamily: 'medium',
    fontSize: SIZES.large - 2
  },
  descText: {
    fontSize: SIZES.small,
    fontFamily: 'regular',
    textAlign: 'justify',
    marginBottom: SIZES.small
  },
  location: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  cartRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 10
  },
  cartBtn: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small / 2,
    borderRadius: SIZES.large,
    marginLeft: 20,
  },
  cartTitle: {
    marginLeft: SIZES.small,
    color: COLORS.lightWhite,
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
    paddingTop: 4,
  },
  addCart: {
    margin: SIZES.small,
    width: 38,
    height: 38,
    borderRadius: 38,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;