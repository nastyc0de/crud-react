import React, { useState } from 'react';
import shortid from 'shortid';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = e => {
    e.preventDefault()
    if (!task.trim()) {
      console.log('Elemento vacio')
      return
    }
    setTasks([
      ...tasks,
      {
        id:shortid.generate(),
      tarea:task}
    ])
    setTask('');
  }
  
  return (
    <div className="container mt-5">
      <h1 className='text-center'>CRUD APP</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
              {
                
                  tasks.map(item =>(
                    <li className="list-group-item" key={item.id}>
                    <span className="lead" >{item.tarea}</span>
                    <div className="btn-group float-right">
                      <button className="btn btn-danger btn-sm mx-2">Eliminar</button>
                      <button className="btn btn-warning btn-sm mx-2">Editar</button>
                    </div>
                    </li>
                  ))
              }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              className='form-control mb-2'
              placeholder='Ingrese Tarea'
              onChange={e =>setTask(e.target.value)}
              value={task}
            />
            <button className="btn btn-secondary btn-block" type='submit'>Agregar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
