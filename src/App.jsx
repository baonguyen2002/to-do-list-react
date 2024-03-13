import "./App.css";
import { useEffect, useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
function App() {
  const [taskList, setTaskList] = useState(() => {
    const localData = localStorage.getItem("TaskList");
    if (localData == null) return [];

    return JSON.parse(localData);
  });
  useEffect(() => {
    localStorage.setItem("TaskList", JSON.stringify(taskList));
  }, [taskList]);
  function addTask(title) {
    setTaskList((currentTaskList) => {
      return [
        { id: crypto.randomUUID(), title: title, stageOfCompletion: 0 },
        ...currentTaskList,
      ];
    });
  }

  function deleteAllCompletedTasks() {
    setTaskList((taskList) => {
      return taskList.filter((task) => {
        return task.stageOfCompletion != 2;
      });
    });
  }

  function setOngoing(id) {
    setTaskList((taskList) => {
      return taskList.map((task) => {
        if (task.id === id) {
          return { ...task, stageOfCompletion: 1 };
        }
        return task;
      });
    });
  }

  function setCompleted(id) {
    setTaskList((taskList) => {
      return taskList.map((task) => {
        if (task.id === id) {
          return { ...task, stageOfCompletion: 2 };
        }
        return task;
      });
    });
  }

  function setIncomplete(id) {
    setTaskList((taskList) => {
      return taskList.map((task) => {
        if (task.id === id) {
          return { ...task, stageOfCompletion: 0 };
        }
        return task;
      });
    });
  }

  function deleteTask(id) {
    setTaskList((taskList) => {
      return taskList.filter((task) => task.id != id);
    });
  }

  return (
    <div className="app-container">
      <NewTaskForm addTask={addTask} />
      <TaskList
        taskList={taskList}
        setOngoing={setOngoing}
        setIncomplete={setIncomplete}
        deleteTask={deleteTask}
        setCompleted={setCompleted}
        deleteAllCompletedTasks={deleteAllCompletedTasks}
      />
    </div>
  );
}

export default App;
