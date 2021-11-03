import React, { useContext } from 'react';
import Task from './Task';
import Context from './context/Context';

function ToDo() {

  const { submitTask, addTask, submitStatus, todos } = useContext(Context);

  return (
    <div className="flex-col">
      <h1 className="flex p-8 justify-center text-yellow-700 font-hand text-2xl font-black tracking-wider">
        My Sticky Board
      </h1>
      <form
        className="flex m-auto justify-center font-hand text-xl pb-4 shadow-xl"
        onSubmit={submitTask}>
        <input
          className="border-1 px-2 w-80 text-yellow-700 rounded-tl-xl"
          type="text"
          maxLength="85"
          onChange={addTask}
        />
        <select
          className='bg-white px-4 pr-4 text-yellow-700'
          onChange={submitStatus}
        >
          <option value="pending">Pendente</option>
          <option value="developing">Em Andamento</option>
          <option value="ready">Pronto</option>
        </select>
        <button
          className="border-1 py-1 px-2 border-black bg-yellow-400 rounded-br-xl"
        >
          Criar Tarefa
        </button>
      </form>

      { todos === undefined 
        ? <p className='text-center p-8 text-yellow-700 font-hand text-2xl'>Crie uma tarefa!</p>
        : <Task todos={todos} />
      }

    </div>
  );
} 

export default ToDo;