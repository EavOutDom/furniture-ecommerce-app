import { StyleSheet } from "react-native";
import { SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  welcomeTxt: (color, top) => ({
    fontFamily: 'bold',
    fontSize: SIZES.xxLarge - 5,
    marginTop: top,
    marginHorizontal: 12,
    color: color
  })
});

export default styles;