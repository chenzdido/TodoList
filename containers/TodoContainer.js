import {connect} from 'react-redux';
import {changeTodoText, setFilter} from '../actions';
import Todo from '../components/Todo';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  changeTodoText: (id, text) => dispatch(changeTodoText(id, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
