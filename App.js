import React from 'react';
import { Platform, StyleSheet, Text, View , TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-web';
import Task from './components/task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* { Today's task} */}
      <View style={styles.taskWarpper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* {this is where the taskq will go} */}
          <Task text={'manger'}/>
          <Task text={'dormir'}/>
          <Task text={'courir'}/>
          <Task text={'rien faire'}/>
          <Task text={''}/>
        </View>

      </View>
      
      {/* {write a task} */}
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.whriteTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a Task'} value={Task} onChangeText={text => setTask(text)} />
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
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
},
addWrapper: {
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
