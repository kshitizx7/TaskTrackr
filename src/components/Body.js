import { useState } from "react";
import TaskRow from "./TaskRow";

const Body = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  
  const addTask = () => {
    if (!title || !category) return alert("Enter title and category!");

    const newTask = {
      id: tasks.length + 1,
      title,
      category,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setCategory("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <div>
        {tasks.map((task) => (
          <TaskRow
            key={task.id}
            {...task}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
          />
        ))}
      </div>

      {/* Input + Dropdown + Button */}
      <div className="mx-10 flex mt-10">
        <input
          className="border p-4 font-bold bg-purple-200 rounded-l-2xl flex-1"
          type="text"
          placeholder="Enter task title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="border p-4 font-bold bg-purple-200"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="red">Work</option>
          <option value="gray">Personal</option>
          <option value="yellow">Study</option>
        </select>

        <button
          onClick={addTask}
          className="bg-purple-500 text-white px-6 rounded-r-2xl hover:bg-purple-700"
        >
          Add
        </button>

      </div>
    </div>
  );
};

export default Body;
