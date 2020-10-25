import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <>
        <View>
          <Text>TodoList</Text>
          <Todo />
        </View>
      </>
    );
  }
}

export default TodoList;
