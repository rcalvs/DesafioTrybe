import React, { useState, useEffect } from 'react';
import Context from './Context';
import axios from "axios";

function Provider({ children }) {

  const [task, setTask] = useState({});
  const [todos, setTodos] = useState([]);

  function addTask(event) {
    const currentTask = {
      text: event.target.value,
      key: Date.now(),
      date: Date(),
      status:'pending'
    }
    setTask(currentTask);
  }

  // addStatus é realmente necessario? sera q o Edit já nao funciona?
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

  // editTask para alterar o text
  // const { name, value } = e.target;
  const editTask = (key, e) => {
    const { name, value } = e.target
    const edit = [...todos].find(task => task.key === key)
    const updatedTask = {...edit,
      [name]: value,
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

  const baseURL = 'http://localhost:3001/connection'
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data[0].task);
      setTask(response.data[0].task)
    });
    const firstTodo = [task, ...todos];
    setTodos(firstTodo);
  },[]);

  const postURL = 'http://localhost:3001/post'
  const postSubmit = () => {
    axios.post(postURL, { task })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  const deleteURL = 'http://localhost:3001/delete'
  const deleteSubmit = (id) => {
    axios.delete(`deleteURL/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
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