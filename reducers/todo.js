import {CHANGE_TODO_TEXT} from '../actions/actionTypes';

const todo = (state = [], action) => {
  switch (action.type) {
    case CHANGE_TODO_TEXT:
      return state.map((todo) =>
        todo.id === action.id ? {...todo, text: action.text} : todo,
      );
    default:
      return state;
  }
};

export default todo;
