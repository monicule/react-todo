import { useState } from "react";
import { FormCreateTask } from "./components/form/FormCreateTask.jsx";
import { ListActions } from "./components/list-actions/ListActions";
import { TaskList } from "./components/taks-list/TaskList";
import { tasks } from "./data/tasks.js";

function App() {
  const [taskList, setTaskList] = useState(tasks);

  function addTask(taskText) {
    setTaskList(prev => [
      ...prev,
      {
        text: taskText,
      },
    ]);
  }

  function removeTask(taskText) {
    setTaskList(prev => prev.filter(task => task.text !== taskText));
  }

  return (
    <main>
      <h1>Todo</h1>
      <div>
        <p>Viso užduočių: {taskList.length}</p>
        <p>Likusios atlikti užduotys: {taskList.length}</p>
        <p>Atliktos užduotys: -</p>
        <p>Ištrintos užduotys: -</p>
      </div>
      <FormCreateTask addTaskCallback={addTask} />
      <ListActions />
      <TaskList data={taskList} removeTask={removeTask} />
    </main>
  );
}

export default App;