import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

// Todo component displays an individual task with options to mark as complete, edit, or delete
export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      {/* Task text with a conditional class based on whether it’s completed */}
      <p
        onClick={() => toggleComplete(task.id)} // Call toggleComplete with task id when clicked
        className={`${task.completed ? 'completed' : ''}`} // Apply 'completed' class if task is done
      >
        {task.task} {/* Display the task text */}
      </p>
      
      {/* Container for action icons */}
      <div>
        {/* Edit icon that triggers editTodo function with task id */}
        <FontAwesomeIcon icon={faPen} onClick={() => editTodo(task.id)} />
        
        {/* Delete icon that triggers deleteTodo function with task id */}
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
