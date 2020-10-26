import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_TODO_TEXT,
  SET_FILTER,
  CHANGE_TODO_TEXT,
  DELETE_COMPLETED_TODO,
  SHOW_TODO_LIST,
  COMLETED_ALL_TODO,
  DELETE_TODO,
} from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const setTodoText = (text) => ({
  type: SET_TODO_TEXT,
  text,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

export const changeTodoText = (id, text) => ({
  type: CHANGE_TODO_TEXT,
  text,
  id,
});

export const deleteCompletedTodo = () => ({
  type: DELETE_COMPLETED_TODO,
});

export const showTodoList = (showlist) => ({
  type: SHOW_TODO_LIST,
  showlist,
});

export const completedAllTodo = (isCompleted) => ({
  type: COMLETED_ALL_TODO,
  isCompleted,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});
