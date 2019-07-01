import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/action';

const AddToDo = ({ dispatch }) => {

  let input;

  const onSubmit = (e) => {
    e.preventDefault();
    let value = input.value.trim();
    if(!value){
      return;
    }
    dispatch(addTodo(value))
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" ref={node => input = node}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )

};

export default connect()(AddToDo)