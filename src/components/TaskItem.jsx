/* eslint-disable react/prop-types */
import "./TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlay,
  faUndoAlt,
  faCheck,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
export default function TaskItem({
  editTask,
  id,
  title,
  stageOfCompletion,
  setIncomplete,
  deleteTask,
  setOngoing,
  setCompleted,
  ignore,
}) {
  return (
    <div className={`item-container `}>
      <div className="label-container">
        <p>{title}</p>
        <p>
          Status:{" "}
          <span
            className={`${
              stageOfCompletion === 0
                ? "incomplete"
                : stageOfCompletion === 1
                ? "on-going"
                : "completed"
            }`}
          >
            {stageOfCompletion === 0
              ? "Incomplete"
              : stageOfCompletion === 1
              ? "Ongoing"
              : "Completed"}
          </span>
        </p>
      </div>
      <div>
        <button
          onClick={() => editTask(title, id)}
          className="edit-task-button"
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        {stageOfCompletion > 0 && (
          <button
            className="mark-incomplete-button"
            onClick={() => setIncomplete(id)}
          >
            <FontAwesomeIcon icon={faUndoAlt} />
          </button>
        )}
        {stageOfCompletion < 1 && (
          <button
            className="mark-ongoing-button"
            onClick={() => setOngoing(id)}
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        )}
        {stageOfCompletion == 1 && (
          <button
            className="mark-completed-button"
            onClick={() => setCompleted(id)}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        )}
      </div>
      <button
        className={`delete-button ${ignore ? "ignore-input" : ""}`}
        onClick={() => deleteTask(id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
