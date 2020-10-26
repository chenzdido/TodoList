import {connect} from 'react-redux';
import {
  setTodoText,
  addTodo,
  showTodoList,
  completedAllTodo,
  allTodoState,
} from '../actions/index';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (state) => ({
  text: state.text,
  filter: state.filter,
  showlist: state.showlist,
});

const mapDispatchToProps = (dispatch) => ({
  setTodoText: (text) => dispatch(setTodoText(text)),
  addTodo: (text) => dispatch(addTodo(text)),
  showTodoList: (showlist) => dispatch(showTodoList(showlist)),
  completedAllTodo: (iscompleted) => dispatch(completedAllTodo(iscompleted)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
