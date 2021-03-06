import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import TodoContainer from '../containers/TodoContainer';

class TodoList extends Component {
  render() {
    const {todos, toggleTodo} = this.props;
    return (
      <>
        <View>
          {this.props.showlist && (
            <FlatList
              data={todos}
              renderItem={(todo) => (
                <TodoContainer
                  {...todo}
                  onClick={() => {
                    toggleTodo(todo.item.id);
                  }}
                />
              )}
              keyExtractor={(todo) => todo.id.toString()}
            />
          )}
        </View>
      </>
    );
  }
}

export default TodoList;
