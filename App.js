import React, { useState } from 'react';
import {
Platform,
StyleSheet,
Text,
View,
TextInput,
TouchableOpacity,
Keyboard,
ScrollView,
Modal,
Alert
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Task from './components/Task';

export default function App() {
const [task, setTask] = useState("");
const [taskItems, setTaskItems] = useState([]);
const [modalVisible, setModalVisible] = useState(false);
const [editIndex, setEditIndex] = useState(null);
const [editedTask, setEditedTask] = useState("");

const handleAddTask = () => {
Keyboard.dismiss();
setTaskItems([...taskItems, task]);
setTask("");
};

const handleDeleteTask = (index) => {
let itemsCopy = [...taskItems];
itemsCopy.splice(index, 1);
setTaskItems(itemsCopy);
};

const handleEditTask = () => {
let itemsCopy = [...taskItems];
itemsCopy[editIndex] = editedTask;
setTaskItems(itemsCopy);
setModalVisible(false);
setEditIndex(null);
setEditedTask("");
};

const completeTask = (index) => {
let itemsCopy = [...taskItems];
itemsCopy.splice(index, 1);
setTaskItems(itemsCopy);
};

const handleEditModal = (index) => {
setEditIndex(index);
setEditedTask(taskItems[index]);
setModalVisible(true);
};

return (
<View style={styles.container}>
<ScrollView
contentContainerStyle={{
flexGrow: 1,
}}
keyboardShouldPersistTaps="handled"
>
{/* Today's task */}
<View style={styles.taskWarpper}>
<Text style={styles.sectionTitle}>TO DO LIST BABY </Text>
      <View style={styles.items}>
        {/* Tasks */}
        {taskItems.map((task, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={task} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>

    {/* Write a task */}
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput
        style={styles.input}
        placeholder={"Write a task"}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>

    {/* Edit task modal */}
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            value={editedTask}
            onChangeText={(text) => setEditedTask(text)}
          />
          <TouchableOpacity onPress={() => handleEditTask()}>
            <View style={styles.editWrapper}>
              <Text style={styles.editText}>Edit Task</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={styles.closeWrapper}>
              <Text style={styles.closeText}>Close</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  </ScrollView>
</View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskWarpper: {
    paddingTop: Platform.OS === 'android' ? 80 : 120,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  items: {
    marginTop: 30,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  taskLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  taskText: {
    maxWidth: '80%',
  },
  taskButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  taskButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  addButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 10,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: 'orange',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  addButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  modalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  modalButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});