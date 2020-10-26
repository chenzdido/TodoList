import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

class Todo extends Component {
  render() {
    const {completed, text} = this.props.item;
    return (
      <>
        <View style={{flexDirection: 'row', paddingTop: 20}}>
          <View style={styles.circle}>
            <Button
              title={completed ? '·' : ''}
              onPress={() => {
                console.log(this.props.onClick);
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
            defaultValue={text}
          />
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
});

export default Todo;
