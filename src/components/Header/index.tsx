import { StyleSheet, View } from 'react-native';
import { Logo } from '../Logo';
import { colors } from '../../theme/colors';
import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.header}>
      <Logo />
    </View>
  );
}
