import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    const {todos, toggleTodo, setTodoText} = this.props;
    console.log(todos);
    return (
      <>
        <View>
          <FlatList
            data={todos}
            renderItem={(todo) => (
              <Todo
                {...todo}
                onClick={() => {
                  toggleTodo(todo.item.id);
                }}
              />
            )}
            keyExtractor={(todo) => todo.id.toString()}
          />
        </View>
      </>
    );
  }
}

export default TodoList;
