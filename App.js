import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, ImageBackground, Modal } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Task from './components/Task';
import { SwipeListView } from 'react-native-swipe-list-view';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const image = require('./assets/Gradient-Phone-Wallpaper-148.jpg');


  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);

  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const editTask = (index, text) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index] = text;
    setTaskItems(itemsCopy);
  }

  const onSwipeRight = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  const onSwipeLeft = (index) => {
    // Handle task edit
    console.log('Edit task at index', index);
  }

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => completeTask(index)}>
        <Task text={item} />
      </TouchableOpacity>
    );
  };

  const renderHiddenItem = ({ item, index }) => {
    return (
      <View style={styles.rowBack}>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnRight]}
          onPress={() => onSwipeRight(index)}
        >
          <AntDesign name="delete" size={24} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.backRightBtn, styles.backRightBtnLeft]}
          onPress={() => onSwipeLeft(index)}
        >
          <AntDesign name="edit" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'
        >
          {/* { Today's task} */}
          <View style={styles.taskWarpper}>
            <Text style={styles.sectionTitle}>TO DO LIST BABY </Text>

            <SwipeListView
              data={taskItems}
              renderItem={renderItem}
              renderHiddenItem={renderHiddenItem}
              rightOpenValue={-75}
              leftOpenValue={75}
              disableRightSwipe={true}
            />

          </View>
        </ScrollView>

        {/* {write a task} */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.writeTaskWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write a Task'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
    );
}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      taskWarpper: {
        paddingTop: 80,
        paddingHorizontal: 20,
      },
      sectionTitle: {
        paddingBottom: 30,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
      },
      items: {
        marginTop: 30,
      },
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      input: {
        paddingVertical: 15
      },
    });
