import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, XCircle, Edit2 } from "lucide-react";

export default function Navbar() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, status: "pending" }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const rejectTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: "rejected" } : task
      )
    );
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setNewTask(taskToEdit.text);
    setEditingTaskId(id);
  };

  const updateTask = () => {
    if (editingTaskId) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTaskId ? { ...task, text: newTask } : task
        )
      );
      setNewTask("");
      setEditingTaskId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 flex flex-col items-center">
      {/* Navbar */}
      <nav className="bg-white bg-opacity-30 backdrop-blur-md shadow-lg fixed top-0 w-full z-50 py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-extrabold text-white drop-shadow-lg">
            Epic Brand
          </h1>

          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-white transition duration-300">
              <Link to="/home" className="text-lg font-semibold text-gray-200">
                Home
              </Link>
            </li>
            <li className="hover:text-white transition duration-300">
              <Link to="/about" className="text-lg font-semibold text-gray-200">
                About
              </Link>
            </li>
            <li className="hover:text-white transition duration-300">
              <Link
                to="/contact"
                className="text-lg font-semibold text-gray-200"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="space-x-4">
          <Link
              to="/login"
              onClick={() => window.location.href = "/login"} 
              className="bg-red-500 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:bg-red-600 transition"
          >
              Login
          </Link>

            <Link
              to="/registrationpage"
              className="bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      <section className="container mx-auto mt-24 px-6 md:w-2/3 lg:w-1/2">
        <h2 className="text-4xl font-bold text-white text-center mb-6 drop-shadow-lg">
          Task List
        </h2>
        <div className="flex shadow-lg rounded-2xl overflow-hidden border border-gray-300 bg-white">
          <input
            type="text"
            className="p-4 w-full outline-none text-gray-700"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-6 py-3 font-semibold hover:bg-green-600 transition rounded-r-xl"
            onClick={editingTaskId ? updateTask : addTask}
          >
            {editingTaskId ? "Update" : "Add"}
          </button>
        </div>
        <ul className="mt-6 space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-4 rounded-xl shadow-lg border transform transition duration-300 ${
                task.status === "rejected"
                  ? "bg-red-100 border-red-400 hover:scale-105"
                  : "bg-white hover:shadow-xl hover:scale-105"
              }`}
            >
              <span className="text-lg font-medium text-gray-800">
                {task.text}
              </span>
              <div className="space-x-3">
                <button
                  className="text-yellow-500 hover:text-yellow-700 transition"
                  onClick={() => editTask(task.id)}
                >
                  <Edit2 size={22} />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 transition"
                  onClick={() => deleteTask(task.id)}
                >
                  <Trash2 size={22} />
                </button>
                <button
                  className="text-gray-500 hover:text-red-700 transition"
                  onClick={() => rejectTask(task.id)}
                >
                  <XCircle size={22} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
