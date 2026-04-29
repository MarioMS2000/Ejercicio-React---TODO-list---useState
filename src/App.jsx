import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import LayoutDefault from "./template/LayoutDefault";
import Form from "./components/Form";
import List from "./components/List";
import Button from "./components/Button";
import tasksData from "./data/tasks.json";


const App = () => {
  const [tasks, setTasks] = useState(tasksData); // tasks = array de tareas | setTasks = función para actualizar ese array

  const addTask = (newTask) => {
    // Creamos un objeto nuevo, le generas una id única y lo guardas en tasks
    const taskObject = {
      _id: uuidv4(),
      title: newTask,
      desc: "",
      isDone: false,
    };
    setTasks([...tasks, taskObject])
  };

  // Para resetear la lista y dejar solo los del jsone
  const resetTasks = () => {
    setTasks(tasksData);
  };

  // Para borrar una tarea
  const deleteTask = (id) => {
    // Con filter() -> recorre el array y construye uno nuevo solo con los elementos que tú le permites pasar si el id es dintinto del que queremos eliminar pues true y si no false y no lo megte al nuevo array
    const newTask = tasks.filter((task) => {
      if(task._id !== id){ // si el id es distinto → true → se conserva | si el id es igual → false → se elimina y el filter te devuelve un true o false
        return true;
      }
        return false;

    });
    setTasks(newTask); // Aquí remplazamos el array viejo por el nuevo
  }

  // Para limpiar toda la lista

  return (
    <LayoutDefault>
      <main>
        <h1>Todo List</h1>
        <Form onAddTask={addTask} /> {/*Se lee como: <Componente nombreProp={valorQueLePaso} /> */}
        <Button text="RESET" onClick={resetTasks} />
        <List tasks={tasks} onDeleteTask={deleteTask} />{/*El botón DELETE debe estar dentro de cada Item, porque cada Item sí conoce su tarea por eso no se pone un boton button, porque deleteTask necesita recibir un id */}
      </main>
    </LayoutDefault>
  );
};

export default App;