import { StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export const styles = StyleSheet.create({
  taskCountContainer: {
    display: 'flex',
    width: 327,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 0,
    paddingBottom: 16,
    marginTop: 33,
    margin: 'auto',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.gray400,
  },
});
