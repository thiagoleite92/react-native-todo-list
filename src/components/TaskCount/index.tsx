import { Text, View } from 'react-native';
import { styles } from './styles';

interface TaskCounterProps {
  text: 'Criadas' | 'Concluídas';
  counter: number;
}

export function TaskCounter({ text, counter }: TaskCounterProps) {
  return (
    <View style={styles.container}>
      <Text
        style={
          text === 'Criadas'
            ? { ...styles.createdTask, ...styles.text }
            : { ...styles.completedTask, ...styles.text }
        }
      >
        {text}
      </Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
}
