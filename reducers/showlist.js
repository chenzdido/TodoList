import {SHOW_TODO_LIST} from '../actions/actionTypes';

const showlist = (state = true, action) => {
  switch (action.type) {
    case SHOW_TODO_LIST:
      return action.showlist;
    default:
      return state;
  }
};

export default showlist;
