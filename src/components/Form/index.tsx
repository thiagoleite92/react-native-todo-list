import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { colors } from '../../theme/colors';
import { PlusSign } from '../PlusSign';
import { styles } from './styles';

interface FormProps {
  onAddTask: (task: { task: string; done: boolean }) => void;
}

export function Form({ onAddTask }: FormProps) {
  const [text, setText] = useState<string>('');
  const [inputIsFocused, setInputIsFocused] = useState<boolean>(false);

  const handleInputStyles = (isFocused: boolean) => {
    setInputIsFocused(isFocused);
  };

  return (
    <View style={styles.form}>
      <View
        style={[
          styles.inputContainer,
          inputIsFocused && styles.inputContainerOnFocus,
        ]}
      >
        <TextInput
          value={text}
          onChangeText={setText}
          style={[styles.input, inputIsFocused && styles.inputFocused]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray300}
          onFocus={() => handleInputStyles(true)}
          onBlur={() => handleInputStyles(false)}
          maxLength={70}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          onAddTask({ task: text, done: false });
          setText('');
        }}
      >
        <PlusSign />
      </Pressable>
    </View>
  );
}
