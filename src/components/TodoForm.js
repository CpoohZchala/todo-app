import React, { useState } from 'react';

// TodoForm component handles adding a new task
const TodoForm = ({ addTodo }) => {
  // Initialize state to hold the value of the input field
  const [value, setValue] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Call the addTodo function passed as a prop to add the new task
    addTodo(value);

    // Reset the input field after submitting
    setValue("");
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      {/* Input field for entering the task text */}
      <input
        type="text"
        className='todo-input'
        value={value} // Controlled component with its value bound to state
        placeholder='What is the task today?' // Placeholder text for guidance
        onChange={(e) => setValue(e.target.value)} // Update state on input change
      />
      {/* Button to submit the new task */}
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  );
};

export default TodoForm;
