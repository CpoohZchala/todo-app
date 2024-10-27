import React, { useState } from 'react';
import TodoForm from './TodoForm';
import EditTodoForm from './EditTodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

// TodoWrapper component manages the list of todos and provides functions to manipulate them
const TodoWrapper = () => {
  // Initialize state to hold the list of todos
  const [todos, setTodos] = useState([]);

  // Function to add a new todo to the list
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  // Function to toggle the 'completed' status of a todo
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo from the list by its ID
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Function to toggle 'isEditing' status to show the edit form for a specific todo
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Function to update a todo with a new task text and reset its 'isEditing' status
  const updateTodo = (id, task) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: false } : todo
      )
    );
  };

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      {/* Form to add a new todo */}
      <TodoForm addTodo={addTodo} />
      
      {/* Render each todo, with conditional rendering for edit mode */}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} todo={todo} updateTodo={updateTodo} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
