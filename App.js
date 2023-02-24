import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View , TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    
  }

const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice (index, 1);
  setTaskItems(itemsCopy);
}
  return (
    <View style={styles.container}>
        <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      {/* { Today's task} */}
      <View style={styles.taskWarpper}>
        <Text style={styles.sectionTitle}>TO DO LIST BABY </Text>

        <View style={styles.items}>
          {/* {this is where the taskq will go} */}
          {
            taskItems.map((item, index) => {
              return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
              )
            })
          }
          {/* <Task text='mangfghjker'/>
          <Task text='dormir'/>
          <Task text='courir'/>
          <Task text='rien faire'/> */}
        
        </View>

      </View>
      </ScrollView>
      
      {/* {write a task} */}
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.whriteTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

taskWarpper:{
  paddingTop: 80,
  paddingHorizontal: 20,
},

sectionTitle:{
  paddingBottom: 30,
  fontsize: 25,
  fontWeight: 'bold',
  color:'#20B2AA',
  fontSize: 24,
},

items:{
marginTop: 30,
},
whriteTaskWrapper:{
  position:'absolute',
  bottom:60,
  width:'100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems:'center',

},
input: {
  marginLeft:25,
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
},
addWrapper: {
  marginRight:25,
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
  
},
addText: {},
});
