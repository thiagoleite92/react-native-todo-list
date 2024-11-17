import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { colors } from '../../theme/colors';
import { PlusSign } from '../PlusSign';
import { styles } from './styles';

export function Form() {
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
          maxLength={50}
        />
      </View>
      <Pressable style={styles.button}>
        <PlusSign />
      </Pressable>
    </View>
  );
}
