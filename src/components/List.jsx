import Item from "./Item";

// recorrer tareas
const List = ({ tasks, onDeleteTask, onToggleTask, onEditTask }) => {
    return (
        <ul className="list">
            {tasks.map((task) => (
                <Item key={task._id} task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} onEditTask={onEditTask} />
            ))}
        </ul>
    )
}

export default List