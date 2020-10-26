import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_TODO_TEXT,
  DELETE_COMPLETED_TODO,
} from '../actions/actionTypes';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
      );
    case CHANGE_TODO_TEXT:
      return state.map((todo) =>
        todo.id === action.id ? {...todo, text: action.text} : todo,
      );
    case DELETE_COMPLETED_TODO:
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

export default todos;
