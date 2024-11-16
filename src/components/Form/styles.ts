import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  form: {
    width: 327,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: -30,
    flexDirection: 'row',
    gap: 4,
  },
  input: {
    width: 327,
    height: 54,
    borderWidth: 1,
    padding: 16,
    backgroundColor: colors.gray500,
    borderRadius: 8,
  },
  button: {
    width: 52,
    height: 54,
    backgroundColor: colors.blue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
