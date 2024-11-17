import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: -30,
    flexDirection: 'row',
    gap: 6,
  },
  inputContainer: {
    width: 271,
    borderRadius: 8,
    marginHorizontal: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  inputContainerOnFocus: {
    borderColor: colors.purple,
    borderWidth: 1,
  },
  input: {
    width: '100%',
    height: 54,
    padding: 16,
    backgroundColor: colors.gray500,
    borderRadius: 8,
    color: colors.gray200,
    fontSize: 16,
    borderWidth: 1,
  },
  inputFocused: {
    borderColor: 'red',
    borderStyle: 'dotted',
  },
  button: {
    width: 52,
    height: 54,
    backgroundColor: colors.blueDark,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
