import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../theme/colors';
import { PlusSign } from '../PlusSign';
import { styles } from './styles';

export function Form() {
  const [text, setText] = useState<string>('');

  return (
    <View style={styles.form}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray300}
      />
      <Pressable style={styles.button}>
        <PlusSign />
      </Pressable>
    </View>
  );
}
