import Item from "./Item";

// recorrer tareas
const List = ({ tasks, onDeleteTask }) => {
    return (
        <ul className="list">
            {tasks.map((task) => (
                <Item key={task._id} task={task} onDeleteTask={onDeleteTask} />
            ))}
        </ul>
    )
}

export default List