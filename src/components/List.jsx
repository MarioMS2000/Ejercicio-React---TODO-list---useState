import Item from "./Item";

// recorrer tareas
const List = ({ tasks, onDeleteTask, onToggleTask }) => {
    return (
        <ul className="list">
            {tasks.map((task) => (
                <Item key={task._id} task={task} onDeleteTask={onDeleteTask} onToggleTask={onToggleTask} />
            ))}
        </ul>
    )
}

export default List