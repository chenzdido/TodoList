import {connect} from 'react-redux';
import {setFilter, deleteCompletedTodo} from '../actions';
import Footer from '../components/Footer';

const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setFilter: (filter) => dispatch(setFilter(filter)),
  deleteCompletedTodo: () => dispatch(deleteCompletedTodo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
