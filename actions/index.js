import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_TODO_TEXT,
  SET_FILTER,
  CHANGE_TODO_TEXT,
  DELETE_COMPLETED_TODO,
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
