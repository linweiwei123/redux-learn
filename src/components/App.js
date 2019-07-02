import React from 'react';
import AddToDo from '../containers/AddToDo';
import TodoListContainer from '../containers/TodoListContainer';
import Footer from '../containers/FilterButtons';

const App = () => (
  <div>
    <AddToDo></AddToDo>
    <TodoListContainer></TodoListContainer>
    <Footer></Footer>
  </div>
);

export default App;

