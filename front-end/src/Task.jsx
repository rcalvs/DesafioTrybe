import React, { useContext } from 'react';
import Context from './context/Context';

function Task(props) {  
  const { deleteTask, editTask } = useContext(Context);

  return (
    <div className="flex flex-wrap justify-center m-8 font-hand text-xl tracking-wide">
      {props.todos.map((todo) => (
        <div
          className='flex-col shadow-xl container m-2 w-40 h-40 bg-yellow-400 transform relative'
          key={todo.key}
        >
          <div className='container w-38 h-8 bg-yellow-500 relative'>
            <select
              id='status'
              className='appearance-none bg-transparent pl-2 pr-0'
              value={todo.status}
              name='status'
              onChange={(e) => editTask(todo.key, e)}
            >
              <option value="pending">Pendente</option>
              <option value="developing">Em Andamento</option>
              <option value="ready">Pronto</option>
            </select>
            <svg
              onClick={() => (deleteTask(todo.key))}
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 absolute top-1 right-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          {/* <input type="text" /> */}
          <h3 className="ml-2 text-center">
            {todo.text}
          </h3>
            <div className="w-11 overflow-hidden inline-block absolute bottom-0 right-0 ">
              <div className='h-24 rotate-45 transform origin-bottom-left bg-yellow-500'></div>
            </div>
        </div>
      ))}
    </div>
  );
} 

export default Task;
