import React, { useState } from 'react';
import './TaskManager.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <button onClick={() => addTask('New Task')}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span className={task.completed ? 'completed' : ''}>
              {task.title}
            </span>
            <button 
              className={task.completed ? 'undo' : ''}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
