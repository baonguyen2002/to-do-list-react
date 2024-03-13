/* eslint-disable react/prop-types */

import "./NewTaskForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";
const editedToast = () =>
  toast.success("Task Edited Successfully.", {
    duration: 2000,
    position: "top-center",
    style: { userSelect: "none" },
  });
const newToast = () =>
  toast.success("New Task Added Successfully.", {
    duration: 2000,
    position: "top-center",
    style: { userSelect: "none" },
  });
export default function NewTaskForm({
  addTask,
  newTask,
  setNewTask,
  notif,
  id,
  setNotif,
  setIgnore,
}) {
  function handleSubmit(e) {
    if (notif === "editing") {
      e.preventDefault();
      addTask(newTask, id);
      setNewTask("");
      setNotif(false);
      editedToast();
      setIgnore(false);
    } else {
      e.preventDefault();
      if (newTask.trim() === "") {
        return;
      }
      addTask(newTask.trim(), null);
      newToast();
      setNewTask("");
    }
  }
  return (
    <>
      <Toaster />
      <form className="new-task-form " onSubmit={handleSubmit}>
        <label className="input-label-text" htmlFor="text-input-field">
          TODO LIST
        </label>
        {notif === "editing" && (
          <div className="warning notif">
            <p>Editing task</p>
          </div>
        )}
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
    </>
  );
}
