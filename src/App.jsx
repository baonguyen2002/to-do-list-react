import "./App.css";
import { useEffect, useState } from "react";
import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import toast, { Toaster } from "react-hot-toast";
const deletedToast = () =>
  toast.success("Task Deleted Successfully.", {
    duration: 2000,
    position: "top-center",
    style: { userSelect: "none" },
  });
function App() {
  const [newTask, setNewTask] = useState("");
  const [notif, setNotif] = useState(false);
  const [id, setId] = useState("");
  const [taskList, setTaskList] = useState(() => {
    const localData = localStorage.getItem("TaskList");
    if (localData == null) return [];

    return JSON.parse(localData);
  });

  useEffect(() => {
    localStorage.setItem("TaskList", JSON.stringify(taskList));
  }, [taskList]);

  function addTask(title, id) {
    if (id) {
      console.log(id);
      setTaskList((taskList) =>
        taskList.map((task) => {
          if (task.id === id) {
            return { ...task, title: title };
          }
          return task;
        })
      );
    } else {
      setTaskList((currentTaskList) => {
        return [
          { id: crypto.randomUUID(), title: title, stageOfCompletion: 0 },
          ...currentTaskList,
        ];
      });
    }
  }

  function deleteAllCompletedTasks() {
    setTaskList((taskList) => {
      return taskList.filter((task) => {
        return task.stageOfCompletion != 2;
      });
    });
    deletedToast();
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
    deletedToast();
  }
  function editTask(title, id) {
    setNotif("editing");
    setId(id);
    setNewTask(title);
  }

  return (
    <div className="app-container">
      <Toaster />
      <NewTaskForm
        addTask={addTask}
        newTask={newTask}
        setNewTask={setNewTask}
        notif={notif}
        id={id}
        setNotif={setNotif}
      />
      <TaskList
        taskList={taskList}
        setOngoing={setOngoing}
        setIncomplete={setIncomplete}
        deleteTask={deleteTask}
        setCompleted={setCompleted}
        deleteAllCompletedTasks={deleteAllCompletedTasks}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
