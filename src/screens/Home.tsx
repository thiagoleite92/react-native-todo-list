import { FlatList, View } from 'react-native';
import { TaskCounter } from '../components/TaskCount';
import { StatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { styles } from './styles';
import { useState } from 'react';
import { EmptyList } from '../components/EmptyList';

export function Home() {
  const [list, setList] = useState([]);

  return (
    <View>
      <StatusBar style="auto" />
      <Header />
      <Form />
      <View style={styles.taskCountContainer}>
        <TaskCounter text="Criadas" counter={0} />
        <TaskCounter text="Concluídas" counter={0} />
      </View>
      <FlatList
        data={list}
        renderItem={({ item }) => <View>{item}</View>}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}
