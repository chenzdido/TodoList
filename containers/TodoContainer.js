import {connect} from 'react-redux';
import {changeTodoText, deleteTodo} from '../actions';
import Todo from '../components/Todo';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  changeTodoText: (id, text) => dispatch(changeTodoText(id, text)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
