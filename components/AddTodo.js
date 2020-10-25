import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

class AddTodo extends Component {
  render() {
    return (
      <>
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          />
          <Button title="Add" />
          <Text>AddTodo</Text>
        </View>
      </>
    );
  }
}

export default AddTodo;
