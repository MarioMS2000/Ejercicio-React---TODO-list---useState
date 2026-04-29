import { useState, useEffect } from "react"; // Importamos useState y useEffect
import { v4 as uuidv4 } from "uuid";

import "./App.css";

import LayoutDefault from "./template/LayoutDefault";
import Form from "./components/Form";
import List from "./components/List";
import Button from "./components/Button";
import tasksData from "./data/tasks.json";


const App = () => {
  // Esto carga el JSON directamente en el estado inicial. React crea el estado ya con tareas
  //const [tasks, setTasks] = useState(tasksData); // tasks = array de tareas | setTasks = función para actualizar ese array
  // React crea el estado vacío y cuando el componente se monta, carga las tareas con lifecycle. useState([]) para empezar vacío y useEffect() para cargar después

  // HOOKS 
  // useState -> guarda datos | useEffect -> ejecuta acciones cuando React ya ha renderizado
  const [tasks, setTasks] = useState([]);

  // useEffect -> Cuando el componente ya se haya pintado, ejecuta esto
  useEffect(() => {
    setTasks(tasksData);
  }, []); // [] -> ejecuta esto solo una vez, cuando el componente se monta

  // FUNCIONES

  const addTask = (newTasks) => {
    // Creamos un objeto nuevo, le generas una id única y lo guardas en tasks
    const taskObject = {
      _id: uuidv4(),
      title: newTasks,
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
      if (task._id !== id) { // si el id es distinto → true → se conserva | si el id es igual → false → se elimina y el filter te devuelve un true o false
        return true;
      }
      return false;

    });
    setTasks(newTask); // Aquí remplazamos el objeto viejo por el nuevo
  }

  // Para limpiar toda la lista
  const clearTasks = () => {
    setTasks([]);
  }

  // Para actualizar una tarea concreta
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if(task._id === id) {
        return {
          ...task, isDone : !task.isDone
        };// ...tasks -> Esto copia toda la tarea, crea una copia igual de el .jsone | Después de copiarla, sobrescribes solo isDone | !task.isDone y metemos lo contrario, si era True ahora false y al revés
      }
      // si no
      return task; // lo devolvemos tal cual estaba
    });
    setTasks(updatedTasks); // // Aquí remplazamos el objeto viejo por el nuevo
  }

  // RETURN
  return (
    <LayoutDefault>
      <main className="app">
        <h1 className="app__title">Todo List</h1>
        <Form onAddTask={addTask} /> {/*Se lee como: <Componente nombreProp={valorQueLePaso} /> */}
        <div className="app__actions">
          <Button text="RESET" onClick={resetTasks} />
          <Button text="CLEAR" onClick={clearTasks} />
        </div>
        <List tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} />{/*El botón DELETE debe estar dentro de cada Item, porque cada Item sí conoce su tarea por eso no se pone un boton button, porque deleteTask necesita recibir un id */}
      </main>
    </LayoutDefault>
  );
};

export default App;