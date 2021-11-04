import React, { useContext } from 'react';
import Task from './Task';
import Context from './context/Context';

function ToDo() {

  const { submitTask, addTask, addStatus, todos, sortByDate, sortByAlphabetical,sortByStatus } = useContext(Context);

  return (
    <div className="flex-col">
      <h1 className="flex p-8 justify-center text-yellow-700 font-hand text-2xl font-black tracking-wider">
        My Sticky Board
      </h1>
      <form
        className="flex m-auto justify-center font-hand text-xl pb-4"
        onSubmit={submitTask}>
        <input
          className="border-1 px-2 w-80 text-yellow-700 rounded-tl-xl"
          type="text"
          maxLength="85"
          onChange={addTask}
        />
        <select
          className='bg-white px-4 pr-4 text-yellow-700'
          onChange={(e) => addStatus(e.target.value)}
          defaultValue='pending'
          name='status'
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
      <p>Ordene por:</p>
      <form className="shadow-xl">
        <input
          className='m-4'
          type='radio'
          id='alfa'
          value='alphabetic'
          name='filter'
          onChange={sortByAlphabetical}
        />
        <label for="alfa">Ordem Alfabética</label>

        <input
          className='m-4'
          type="radio"
          id="stat"
          value='status'
          name='filter'
          onChange={sortByStatus}
        />
        <label for="stat">Status</label>

        <input
          className='m-4'
          type="radio"
          id="data"
          value='date'
          name='filter'
          onChange={sortByDate}
        />
        <label for="data">Data de Criação</label>
      </form>  
        
        { todos === undefined 
        ? <p className='text-center p-8 text-yellow-700 font-hand text-2xl'>Crie uma tarefa!</p>
        : <Task todos={todos} />
      }

    </div>
  );
} 

export default ToDo;