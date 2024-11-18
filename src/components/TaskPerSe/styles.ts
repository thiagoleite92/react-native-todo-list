import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 327,
    minHeight: 64,
    marginHorizontal: 'auto',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray500,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  taskText: {
    fontSize: 14,
    fontWeight: 'regular',
    color: colors.gray100,
    flexWrap: 'nowrap',
    flex: 1,
  },
  taskTextDone: { textDecorationLine: 'line-through', color: colors.gray300 },
  radioCircle: {
    width: 17,
    height: 17,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
