import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

class Footer extends Component {
  render() {
    const {todos, filter, setFilter, deleteCompletedTodo} = this.props;
    const length = todos.filter((todo) => !todo.completed).length;
    return (
      <>
        <View style={styles.footer}>
          <Text style={{color: 'gray', fontSize: 18, paddingRight: 5}}>
            {length} items left
          </Text>
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
          {todos.length - length > 0 && (
            <Button
              title="Clear completed"
              onPress={() => deleteCompletedTodo()}
            />
          )}
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    width: 300,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Footer;
