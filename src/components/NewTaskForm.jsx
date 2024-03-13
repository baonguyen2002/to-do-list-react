/* eslint-disable react/prop-types */

import "./NewTaskForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function NewTaskForm({
  addTask,
  newTask,
  setNewTask,
  notif,
  id,
  setNotif,
}) {
  function handleSubmit(e) {
    if (notif === "editing") {
      e.preventDefault();
      addTask(newTask, id);
      setNewTask("");
      setNotif("edited");
    } else {
      e.preventDefault();
      if (newTask.trim() === "") {
        return;
      }
      addTask(newTask.trim(), null);
      setNewTask("");
    }
  }
  return (
    <form className="new-task-form " onSubmit={handleSubmit}>
      <label className="input-label-text" htmlFor="text-input-field">
        TODO LIST
      </label>
      {notif === "new" ||
        (notif === "deleted" && (
          <div className="success notif">
            <p>
              {notif === "new"
                ? "New Task Added Successfully"
                : "Task Deleted Successfully"}
            </p>
          </div>
        ))}
      {notif === "editing" && (
        <div className="warning notif">
          <p>Editing task</p>
        </div>
      )}
      {notif === "edited" && (
        <div className="success notif">
          <p>Task Edited Successfully</p>
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
  );
}
