import { StyleSheet } from "react-native";
import { SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: SIZES.medium,
    // marginBottom: -SIZES.xSmall
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'semibold',
    fontSize: SIZES.xLarge - 2
  }
});

export default styles;