/* eslint-disable react/prop-types */
import { useState } from "react";
import TaskItem from "./TaskItem";
import "./TaskList.css";
export default function TaskList({
  taskList,
  setCompleted,
  deleteTask,
  setOngoing,
  setIncomplete,
  deleteAllCompletedTasks,
  editTask,
}) {
  const [load, setLoad] = useState(-1);
  return (
    <>
      <div className="filter-container">
        <p className="view-text">View:</p>
        <button
          onClick={() => setLoad(-1)}
          className={` category-button ${load === -1 ? "active-button" : ""}`}
        >
          ALL
        </button>
        <button
          onClick={() => setLoad(0)}
          className={`category-button  ${load === 0 ? "active-button" : ""}`}
        >
          INCOMPLETE
        </button>
        <button
          onClick={() => setLoad(1)}
          className={` category-button  ${load === 1 ? "active-button" : ""}`}
        >
          ONGOING
        </button>
        <button
          onClick={() => setLoad(2)}
          className={`category-button  ${load === 2 ? "active-button" : ""}`}
        >
          COMPLETED
        </button>
        <button
          className="completed-delete-button"
          onClick={() => deleteAllCompletedTasks()}
        >
          Remove All Completed Tasks
        </button>
      </div>

      {taskList.length === 0 ? (
        <div className="no-task-notice">
          <p>No tasks available</p>
        </div>
      ) : (
        taskList.map((task) => {
          if (load === -1) {
            return (
              <TaskItem
                {...task}
                key={task.id}
                setCompleted={setCompleted}
                deleteTask={deleteTask}
                setOngoing={setOngoing}
                setIncomplete={setIncomplete}
                editTask={editTask}
              />
            );
          } else if (task.stageOfCompletion === load) {
            return (
              <TaskItem
                {...task}
                key={task.id}
                setCompleted={setCompleted}
                deleteTask={deleteTask}
                setOngoing={setOngoing}
                setIncomplete={setIncomplete}
                editTask={editTask}
              />
            );
          }
        })
      )}
    </>
  );
}
