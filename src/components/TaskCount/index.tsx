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
        style={[
          styles.text,
          text === 'Criadas' && styles.createdTask,
          text === 'Concluídas' && styles.completedTask,
        ]}
      >
        {text}
      </Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
}
