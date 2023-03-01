import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Swipeable from 'react-native-swipeable';

const Task = (props) => {
  const rightButtons = [
    <TouchableOpacity
      onPress={() => props.onDelete()}
      style={[styles.button, styles.rightButton]}
    >
      <AntDesign name="delete" size={24} color="#FFFFFF" />
    </TouchableOpacity>,
  ];

  const leftButtons = [
    <TouchableOpacity
      onPress={() => props.onEdit()}
      style={[styles.button, styles.leftButton]}
    >
      <AntDesign name="edit" size={24} color="#FFFFFF" />
    </TouchableOpacity>,
  ];

  return (
    <Swipeable
      rightButtons={rightButtons}
      leftButtons={leftButtons}
    >
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>{props.text}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 20,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButton: {
    backgroundColor: 'red',
  },
  leftButton: {
    backgroundColor: 'green',
  },
});

export default Task;
