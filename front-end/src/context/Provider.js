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
      date: Date(),
      status:'pending'
    }
    setTask(currentTask);
  }

  function addStatus(status) {
    const statusTask = {...task,
      status: status,
    }
    console.log(statusTask);
    setTask(statusTask);
  }

  function submitTask(event) {
    event.preventDefault();
    console.log(task);
    const newTodos = [task, ...todos];
    setTodos(newTodos);
  }

  const deleteTask = (key) => {
    const remove = [...todos].filter(task => task.key !== key)
    setTodos(remove)
  }

  const editTask = (key, status) => {
    const edit = [...todos].find(task => task.key === key)
    const updatedTask = {...edit,
      status: status,
    }
    console.log(updatedTask);
    setTask(updatedTask);
  }

  const sortByDate = () => {
    console.log(todos);
    const sortedTodosDate = todos.sort(function(a, b) {
      var keyA = a.date,
      keyB = b.date;
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
    setTodos(sortedTodosDate);
  }

  const sortByAlphabetical = () => {
    console.log(todos);
    const sortedTodosText = todos.sort(function(a, b) {
      var keyA = a.text,
      keyB = b.text;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    setTodos(sortedTodosText);
  }

  const sortByStatus = () => {
    console.log(todos);
    const sortedTodosStatus = todos.sort(function(a, b) {
      var keyA = a.status,
      keyB = b.status;
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
    setTodos(sortedTodosStatus);
  }

  useEffect(() => {
    fetchCategories();
  },[todos]);

  const fetchCategories = async () => {
  }

  return (
    <Context.Provider
      value={ { addTask, submitTask, deleteTask, editTask, addStatus, sortByDate, sortByAlphabetical, sortByStatus, todos } }
    >
      { children }
    </Context.Provider>
  );
}

export default Provider;