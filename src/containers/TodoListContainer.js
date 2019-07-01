import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions/constant';
import { toggleTodo } from "../actions/action";


const filterTodo = (items, filterType) => {
  switch (filterType) {
    case VisibilityFilters.SHOW_ALL: return items; break;
    case VisibilityFilters.SHOW_COMPLETED: return items.filter(item => item.completed === true); break;
    case VisibilityFilters.SHOW_ACTIVE: return items.filter(item => !item.completed === true);break;
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: filterTodo(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)