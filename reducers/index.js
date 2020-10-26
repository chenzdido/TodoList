import {combineReducers} from 'redux';
import todos from './todos';
import filter from './filter';
import text from './text';
import showlist from './showlist';

export default combineReducers({
  todos,
  text,
  filter,
  showlist,
});
