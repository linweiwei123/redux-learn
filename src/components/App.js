import React from 'react';
import AddToDo from '../containers/AddToDo';
import TodoListContainer from '../containers/TodoListContainer';

const App = () => (
  <div>
    <AddToDo></AddToDo>
    <TodoListContainer></TodoListContainer>
  </div>
);

export default App;

