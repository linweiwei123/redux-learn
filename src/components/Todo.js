import React from 'react';

const Todo = ({completed, text, onClick}) => {
  return (
    <div onClick={onClick}>
      <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</div>
    </div>
  )
};

export default Todo;