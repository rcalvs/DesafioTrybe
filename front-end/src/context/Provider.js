import React, { useState, useEffect } from 'react';
import Context from './Context';

function Provider({ children }) {

const [task, setTask] = useState({});
const [todos, setTodos] = useState([]);

function addTask(event) {
  const currentTask = {
    text: event.target.value,
    key: Date.now(),
    rotate: Math.floor(Math.random() * 7),
    status: 'pending'
  }
  setTask(currentTask);
}

function submitStatus(event) {
  const statusTask = {...task,
    status: event.target.value,
  }
  setTask(statusTask);
  console.log(statusTask);
}

function submitTask(event) {
  event.preventDefault();
  const newTodos = [task, ...todos];
  setTodos(newTodos);
}

const deleteTask = (key) => {
  const remove = [...todos].filter(task => task.key !== key)
  setTodos(remove)
}

const editTask = (key, event) => {
  const edit = [...todos].find(task => task.key === key)
  const updatedTask = {...edit,
    status: event.target.value,
  }
  setTask(updatedTask);
}

  useEffect(() => {
    fetchCategories();
  },[]);

  const fetchCategories = async () => {
  }

  return (
    <Context.Provider
      value={ { addTask, submitTask, deleteTask, editTask, submitStatus, todos } }
      >
      { children }
    </Context.Provider>
  );
}

export default Provider;