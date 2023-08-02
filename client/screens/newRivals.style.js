import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite
  },
  upperRow: {
    marginHorizontal: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    top: SIZES.large,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    width: SIZES.width - 50
  },
  heading: {
    fontFamily: 'semibold',
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginLeft: 5
  }
});

export default styles;