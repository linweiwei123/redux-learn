import { createStore } from "redux";
import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import todoApp from './reducers/index';
import App from './components/App';

let store = createStore(todoApp);

store.subscribe(() => {
  console.log(store.getState());
})

render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('app')
);