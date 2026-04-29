// pintar una tarea
const Item = ({ task, onDeleteTask }) => {

    return (
        <li className="item">
            <span className="item__title">{task.title}</span>
            <button
                className="item__delete"
                onClick={() => onDeleteTask(task._id)} >
                DELETE
            </button> {/*onClick necesita una función, no el resultado de ejecutar una función. Si lo pongo así: onClick={onDeleteTask(task._id)} lo ejecuta ya sin el onclick por eso hay que darle una función*/}
        </li>
    );
}

export default Item