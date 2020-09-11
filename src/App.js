import React, { useState } from 'react';
import shortid from 'shortid';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);

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
  const handleDelete = id => {
      const arrayFilter = tasks.filter(item => item.id !== id)
      setTasks(arrayFilter)
  }
  const handleEdit = item => {
      setEdit(true);
      setTask(item.tarea)
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
                tasks == '' ? <p className='text-center'>No hay tareas</p>
                  :tasks.map(item =>(
                    <li className="list-group-item mb-2" key={item.id}>
                    <span className="lead" >{item.tarea}</span>
                    <div className="btn-group float-right">
                      <button 
                        className="btn btn-danger btn-sm mx-2"
                        onClick={()=>handleDelete(item.id)}
                      >Eliminar
                      </button>
                      <button 
                        className="btn btn-warning btn-sm mx-2"
                        onClick={()=>handleEdit(item)}
                      >Editar
                      </button>
                    </div>
                    </li>
                  ))
              }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {edit ? 'Editar Tarea':'Agregar Tarea'}
          </h4>
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              className='form-control mb-2'
              placeholder='Ingrese Tarea'
              onChange={e =>setTask(e.target.value)}
              value={task}
            />
            {
              edit ? (
                <button className="btn btn-secondary btn-block" type='submit'>Editar</button>
              ) : (
                <button className="btn btn-secondary btn-block" type='submit'>Agregar</button>
              )
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
