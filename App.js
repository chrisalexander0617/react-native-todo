import React, {useState} from 'react'
import {KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import Task from './components/Task'

export default function App(){
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    const itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }

  const handleDeleteTodo = () => {
    const updatedTodos = taskItems.pop(task)
    setTaskItems(taskItems)
    setTask(null)
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {taskItems.map((task, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => completeTask(i)}
            >
            <Task title={task} />
          </TouchableOpacity> ))
          }
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput value={task} onChangeText={(text) => setTask(text)} style={styles.input} placeholder="Write a task" />
          <TouchableOpacity
            onPress={handleAddTask}
          >
            <View style={styles.addWrapper}>
              <View style={styles.addText}>
                 <Text style={styles.plus}>+</Text>
              </View>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#E8EAED'
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:20
  },
  items:{
    marginTop:30
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:75,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  input: {
    backgroundColor:"#fff",
    padding:20,
    paddingVertical:20,
    width:'70%',
    maxWidth:250,
    borderRadius:0,
    fontSize:18,
    color:'gray'
  },
  addText:{ 
    backgroundColor:"#f76f65",
    height:62,
    width:62,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:0
  },
  plus:{
    fontSize:34,
    color:"#fff"
  }
})