import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  createdTask: {
    fontSize: 14,
    color: colors.blue,
  },
  completedTask: {
    color: colors.purple,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 999,
  },
  counter: {
    borderRadius: 999,
    backgroundColor: colors.gray400,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    color: colors.gray200,
    padding: 2,
  },
});
