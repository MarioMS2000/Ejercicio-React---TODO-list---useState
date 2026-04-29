import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import LayoutDefault from "./template/LayoutDefault";
import Form from "./components/Form";
import Button from "./components/Button";
import tasksData from "./data/tasks.json";

const App = () => {
  const [tasks, setTasks] = useState(tasksData); // tasks = array de tareas | setTasks = función para actualizar ese array

  const addTask = (newTask) => {
    // Creamos un objeto nuevo, le generas una id única y lo guardas en tasks
    const taskObject = {
      id: uuidv4(),
      text: newTask,
    };
    setTasks([...tasks, taskObject])
  };

  // Para resetear la lista y dejar solo los del jsone
  const resetTasks = () => {
    setTasks(tasksData);
  };

  return (
    <LayoutDefault>
      <main>
        <h1>Todo List</h1>
        <Form onAddTask={addTask} /> {/*Se lee como: <Componente nombreProp={valorQueLePaso} /> */}
        <Button text="RESET" onClick={resetTasks} />
        <ul>
          {
            tasks.map((task) => (
              <li key={task.id}>{task.text}</li>
            ))
          }
        </ul>
      </main>
    </LayoutDefault>
  );
};

export default App;