import React, { useState } from 'react';

// The EditTodoForm component is used to edit an existing todo item
const EditTodoForm = ({ updateTodo, todo }) => {
  // Initialize state with the current task text to display in the input field
  const [value, setValue] = useState(todo.task);

  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    updateTodo(todo.id, value); // Call the updateTodo function to update the specific todo item with the new text
    setValue(""); // Clear the input field after updating
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      {/* Input field for editing the todo text, controlled by the `value` state */}
      <input
        type="text"
        className='todo-input'
        value={value} // Bind the input's value to the state
        placeholder='Update Task' // Placeholder text for guidance
        onChange={(e) => setValue(e.target.value)} // Update the state on input change
      />
      {/* Button to submit the updated task */}
      <button type="submit" className='todo-btn'>Update Task</button>
    </form>
  );
};

export default EditTodoForm;
