import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';

function App() {
  // tasks (todo list) state
  const [todo, setTodo] = useState([
    { id: 2, title: "Task 2", Status: false },
    { id: 1, title: "Task 1", Status: false }
  ]);

  // Temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //Add task
  const AddTask = () => {
    //
    if (newTask) {
      let num = todo.length + 1;
      let newentry = { id: num, title: newTask, "Status": false }
      setTodo([...todo, newentry]);
      setNewTask('');


    }
  }

  //Delet task
  const DeleteTask = (id) => {
    //code
    let newTasks = todo.filter(task => task.id !== id)
    setTodo(newTasks);
  }

  //Mark task as done or completed
  const markDone = (id) => {
    //code
    let newTask = todo.map(task => {
      if (task.id === id) {
        return ({ ...task, Status: !task.Status })
      }
      return task;
    })
    setTodo(newTask);
  }

  //Cancel Update
  const CancelUpdate = (id) => {
    //
    setUpdateData('');
  }

  //change task for update
  const ChangeTask = (e) => {
    let newentry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newentry);
  }

  //Update task
  const UpdateTask = (e) => {
    let filterrecords = [...todo].filter(task => task.id !== updateData.id);
    let updateobject = [...filterrecords, updateData];
    setTodo(updateobject);
    setUpdateData('');

  }
  let newDate = new Date();
  return (
    <div className="container App">
      
      <h2>All Tasks</h2>
      <br /><br />
      {/* Update Task */}

      {updateData && updateData ? (

        <UpdateForm
        updateData={updateData}
        ChangeTask={ChangeTask}
        UpdateTask={UpdateTask}
        CancelUpdate={CancelUpdate}
        />
      ) : (
        <AddTaskForm
        newTask={newTask}
        AddTask={AddTask}
        setNewTask={setNewTask}
        />
       )}




      {/*Display todos */}
      {todo && todo.length ? '' : 'No Tasks...'}
       <ToDo
       todo={todo}
       markDone={markDone}
       setUpdateData={setUpdateData}
       DeleteTask={DeleteTask}
       />
    </div>
  );
}

export default App;
