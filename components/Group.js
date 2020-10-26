import React, {Component} from 'react';
import {View, Text} from 'react-native';
import AddTodoContainer from '../containers/AddTodoContainer';
import FooterContainer from '../containers/FooterContainer';
import TodoListContainer from '../containers/TodoListContainer';

class Group extends Component {
  render() {
    return (
      <View style={{marginTop: 100, marginLeft: 20}}>
        <Text style={{fontSize: 50, textAlign: 'center'}}>Todo</Text>
        <AddTodoContainer />
        <TodoListContainer />
        <FooterContainer />
      </View>
    );
  }
}

export default Group;
