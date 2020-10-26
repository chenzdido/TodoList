import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_TODO_TEXT,
  DELETE_COMPLETED_TODO,
  COMLETED_ALL_TODO,
  DELETE_TODO,
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
    case COMLETED_ALL_TODO:
      return state.map((todo) => ({...todo, completed: action.iscompleted}));
    case DELETE_TODO:
      return state.filter((todo) => todo.id != action.id);
    default:
      return state;
  }
};

export default todos;
