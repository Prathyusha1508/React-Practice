import React, { useState, useEffect } from "react";

const Tasks = () => {
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [{ text: "", completed: false }];
  });
  // Handle changes in task text
  const handleAddTask = (index, value) => {
    const updatedTask = [...task];
    updatedTask[index].text = value;
    setTask(updatedTask);
  };

  // Add a new task
  const AddTask = () => {
    setTask([...task, { text: "", completed: false }]);
  };

  // Toggle task completion
  const handleToggle = (index) => {
    const updatedToggle = [...task];
    updatedToggle[index].completed = !updatedToggle[index].completed;
    setTask(updatedToggle);
  };

  // Delete a specific task
  const handleDelete = (index) => {
    const updatedDelete = task.filter((val, i) => i !== index);
    setTask(updatedDelete);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  return (
    <div>
      {task.map((value, index) => (
        <div key={index}>
          <input
            type="text"
            value={value.text} // Fix value binding to `value.text`
            placeholder={`Task ${index + 1}`}
            onChange={(e) => handleAddTask(index, e.target.value)} // Update task text
          />
          <input
            type="checkbox"
            checked={value.completed} // Check the box if completed
            onChange={() => handleToggle(index)} // Toggle task completion
          />
          <button onClick={() => handleDelete(index)}>Delete</button>{" "}
          {/* Use onClick here */}
        </div>
      ))}
      <button onClick={AddTask}>Add</button>
    </div>
  );
};

export default Tasks;
