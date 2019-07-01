import {TODO_ADD, TODO_TOGGLE, SET_VISIBILITY_FILTER} from "./constant";

export function addTodo(text) {
  return { type: TODO_ADD, text }
}

export function toggleTodo(index) {
  return { type: TODO_TOGGLE, index}
}

export function changeFilter(filterType) {
  return { type: SET_VISIBILITY_FILTER, filterType: filterType }
}
