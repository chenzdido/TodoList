import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';

class AddTodo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let isCompleted = true;
    return (
      <>
        <View style={{flexDirection: 'row'}}>
          <Button
            title="show"
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
            title="Add"
            onPress={() => {
              this.props.addTodo(this.props.text);
            }}
          />
        </View>
      </>
    );
  }
}

export default AddTodo;
