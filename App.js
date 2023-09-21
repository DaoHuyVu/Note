import React,{useState} from 'react'
import { TouchableOpacity, ScrollView, StyleSheet,View ,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Task from './components/Task'
const App = () => {
  const [input,setInput] = useState('');
  const [tasks,setTasks] = useState([]);
  
  const handleAdd = () => {
    if(input.length > 0){
      setTasks([...tasks,{id : Date.now(),name : input,done : false}])
      setInput('')
    }
  }
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const handleChecked = (id) => {
    setTasks(tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task
    }))
  }
  return (
    <View 
    style = {styles.container}>
      <View
      style = {styles.textInputContainer} >
          <TextInput
          placeholder='Enter task...'
          onChangeText={value => setInput(value)}
          value = {input}
          style = {styles.textInput}>
          </TextInput>
          <TouchableOpacity
          style = {styles.addButton}
          onPress={() => handleAdd()}>
            <Icon
            name="plus"
            size={20}
            >
            </Icon>
          </TouchableOpacity>
      </View>
      <ScrollView style = {styles.taskList}>
        {tasks.map(task => (
          <Task
            key = {task.id}
            done = {task.done}
            name = {task.name}
            deleteTask = {() => handleDelete(task.id)}
            checkTask = {() => handleChecked(task.id)}
          />
        ))}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container : {
    paddingTop : 30,
    paddingHorizontal : 10,

    flex : 1,
    flexDirection : 'column',
  },
  textInputContainer : {
    flexDirection : 'row',
    width : 'auto',
    height : 60,

  },
  textInput : {
    fontSize : 20,
    width : '80%',
    height : 60,
    padding : 10,
    borderWidth : 1
  },
  addButton : {
    flex : 1,
    height : 60,
    justifyContent : 'center',
    alignItems : 'center',
    width : '20%',
    borderWidth : 1,
    backgroundColor : 'antiquewhite'
  },
  taskList : {
    width : 'auto',
    height : 'auto',
    borderWidth : 1,
  }
})

export default App

