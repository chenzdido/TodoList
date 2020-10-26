import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    console.log(this.props, 'dasgjdasgdkashdksa');
  }
  render() {
    return (
      <>
        <View style={{flexDirection: 'row'}}>
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
