import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    height: 240,
    width: 182,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary
  },
  imgContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: 'hidden'
  },
  img: {
    aspectRatio: 1,
    resizeMode: 'cover',
    height: 'auto',
    width: '100%'
  },
  details: {
    padding: SIZES.small
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    marginBottom: 2
  },
  supplier: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    color: COLORS.gray
  },
  price: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: 'absolute',
    bottom: SIZES.xSmall,
    right: SIZES.xSmall
  }
});

export default styles;