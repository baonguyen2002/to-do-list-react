/* eslint-disable react/prop-types */
import "./TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlay,
  faUndoAlt,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
export default function TaskItem({
  id,
  title,
  stageOfCompletion,
  setIncomplete,
  deleteTask,
  setOngoing,
  setCompleted,
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
      <button className="delete-button" onClick={() => deleteTask(id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
