/* eslint-disable react/prop-types */

import { useState } from "react";
import "./NewTaskForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function NewTaskForm({ addTask }) {
  const [newTask, setNewTask] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (newTask.trim() === "") {
      return;
    }
    addTask(newTask.trim());
    setNewTask("");
  }
  return (
    <form className="new-task-form " onSubmit={handleSubmit}>
      <label className="input-label-text" htmlFor="text-input-field">
        TODO LIST
      </label>
      <div className="text-box-and-submit-button-container">
        <input
          value={newTask}
          type="text"
          id="text-input-field"
          placeholder="Enter your task here"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </form>
  );
}
