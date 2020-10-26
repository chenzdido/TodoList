import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class Footer extends Component {
  render() {
    const {todos, filter, setFilter, deleteCompletedTodo} = this.props;
    const length = todos.filter((todo) => !todo.completed).length;
    return (
      <>
        <View style={{flexDirection: 'row'}}>
          <Text>{length} items left</Text>
          <Button
            disabled={filter === 'all'}
            onPress={() => setFilter('all')}
            title="all"
          />
          <Button
            disabled={filter === 'active'}
            onPress={() => setFilter('active')}
            title="active"
          />
          <Button
            disabled={filter === 'completed'}
            onPress={() => setFilter('completed')}
            title="completed"
          />
          {todos.length - length > 0 && <Button title="Clear completed" onPress={() => deleteCompletedTodo()}/>}
        </View>
      </>
    );
  }
}

export default Footer;
