import { Alert, FlatList, View } from 'react-native';
import { TaskCounter } from '../components/TaskCount';
import { StatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';
import { Form } from '../components/Form';
import { styles } from './styles';
import { useState } from 'react';
import { EmptyList } from '../components/EmptyList';
import { TaskPerSe } from '../components/TaskPerSe';

export type TaskType = {
  task: string;
  done: boolean;
};

export function Home() {
  const [taskList, setTaskList] = useState<Array<TaskType>>([
    { task: 'teste', done: false },
    { task: 'Passear com o gato', done: false },
    { task: 'Comprar pão', done: true },
  ]);

  const handleAddTask = ({ task, done }: TaskType) => {
    const findTask = taskList.find(
      ({ task: taskName }) => taskName.toLowerCase() === task.toLowerCase()
    );

    if (findTask) {
      return Alert.alert(
        'Participante Existe',
        'Já existe um participante na lista com esse nome'
      );
    }
    setTaskList([...taskList, { task, done }]);
  };

  const handleCheckTask = (taskName: string) => {
    setTaskList((oldState) => {
      const index = oldState.findIndex((task) => task.task === taskName);
      if (index !== -1) {
        const updatedTask = { ...oldState[index], done: !oldState[index].done };
        return [
          ...oldState.slice(0, index),
          updatedTask,
          ...oldState.slice(index + 1),
        ];
      }
      return oldState;
    });
  };

  const removeTask = (taskName: string) => {
    setTaskList((oldState) =>
      oldState.filter((task) => task.task !== taskName)
    );
  };

  const handleRemoveTask = (taskName: string) => {
    Alert.alert('Remover', `Deseja remover o participante ${taskName}?`, [
      {
        text: 'Sim',
        onPress: () => {
          removeTask(taskName);
          Alert.alert(
            'Removido',
            `O participante ${taskName} foi removido da sua lista.`
          );
        },
        style: 'destructive',
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={{ flex: 1, paddingBottom: 40 }}>
      <StatusBar style="auto" />
      <Header />
      <Form onAddTask={handleAddTask} />
      <View style={styles.taskCountContainer}>
        <TaskCounter text="Criadas" counter={taskList.length} />
        <TaskCounter
          text="Concluídas"
          counter={taskList.filter((task) => task.done).length}
        />
      </View>
      <FlatList
        data={taskList}
        renderItem={({ item: { task, done } }) => (
          <TaskPerSe
            task={task}
            done={done}
            onRemoveTask={handleRemoveTask}
            onCheckTask={handleCheckTask}
          />
        )}
        ListEmptyComponent={<EmptyList />}
        contentContainerStyle={{
          flex: 1,
        }}
      />
    </View>
  );
}
