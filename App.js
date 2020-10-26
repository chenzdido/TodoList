/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStore} from 'redux';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import Group from './components/Group';

const App: () => React$Node = () => {
  const store = createStore(rootReducer);
  console.log(store);
  return (
    <Provider store={store}>
      <Group />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
