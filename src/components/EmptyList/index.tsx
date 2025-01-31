import { StyleSheet, Text, View } from 'react-native';
import Svg from 'react-native-svg';
import { colors } from '../../theme/colors';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        <svg
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect x="0.5" width="56" height="56" fill="url(#pattern0_401_140)" />
          <defs>
            <pattern
              id="pattern0_401_140"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_401_140" transform="scale(0.01)" />
            </pattern>
            <image
              id="image0_401_140"
              width="100"
              height="100"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.subtitle}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 48,
    gap: 16,
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.gray300,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'regular',
    color: colors.gray300,
  },
  svg: {
    width: 56,
    height: 56,
  },
});
