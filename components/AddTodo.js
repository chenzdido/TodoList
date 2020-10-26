import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

let isCompleted = true;
class AddTodo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <View style={styles.header}>
          <Button
            title="^"
            onPress={() => {
              if (this.props.filter === 'all') {
                this.props.showTodoList(true);
                this.props.completedAllTodo(isCompleted);
                isCompleted = !isCompleted;
              } else {
                this.props.showTodoList(!this.props.showlist);
              }
            }}
          />
          <TextInput
            style={{
              height: 40,
              width: 300,
              borderColor: 'gray',
              borderWidth: 1,
              paddingRight: 20,
            }}
            value={this.props.text}
            onChangeText={(text) => {
              this.props.setTodoText(text);
            }}
          />
          <Button
            style={styles.add}
            title="Add"
            onPress={() => {
              this.props.addTodo(this.props.text);
              this.props.setTodoText('');
            }}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: 250,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AddTodo;
