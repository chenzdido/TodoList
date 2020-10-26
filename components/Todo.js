import React, {Component} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

class Todo extends Component {
  render() {
    const {completed, text, id} = this.props.item;
    const {todos, changeTodoText} = this.props;
    console.log(todos);
    return (
      <>
        <View style={styles.todo}>
          <View style={styles.circle}>
            <Button
              title={completed ? '·' : ''}
              onPress={() => {
                this.props.onClick();
              }}
            />
          </View>
          <TextInput
            style={{
              height: 40,
              width: 300,
              paddingRight: 20,
              textDecorationLine: completed ? 'line-through' : 'none',
            }}
            onChangeText={(textValue) => {
              changeTodoText(id, textValue);
            }}
            defaultValue={text}
          />
          <View style={styles.circle}>
            <Button
              title="X"
              onPress={() => {
                this.props.deleteTodo(id);
              }}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 15,
    paddingBottom: 2,
  },
  todo: {
    width: 250,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Todo;
