import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './src/components/ToDoList';
import Form from './src/components/Form';
import { ToDoService } from './src/services/toDoService';

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function componentDidMount() {
        const list = await ToDoService.list();
        setList(list);
    }

    componentDidMount();
  }, [])
  
  const Add = async (text) => {
    //console.log(text)
    const newItem = await ToDoService.create({text});
    setList([...list, newItem])
  }

  const Remove = useCallback(async (item) => {
    await ToDoService.remove(item.id);
    const newList = list.filter(itemList => itemList.id !== item.id);
    //console.log(newList)
    setList(newList);
  }, [list])

  return (
    <View style={styles.container}>
      <Form onAdd={Add} />
      <ToDoList 
        list={list}
        removeRow={Remove}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
