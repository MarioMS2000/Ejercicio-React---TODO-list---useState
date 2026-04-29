// pintar una tarea
const Item = ({ task, onDeleteTask }) => {

    return (
        <>
            <li>{task.title}</li>
            <button onClick={() => onDeleteTask(task._id)} >DELETE</button> {/*onClick necesita una función, no el resultado de ejecutar una función. Si lo pongo así: onClick={onDeleteTask(task._id)} lo ejecuta ya sin el onclick por eso hay que darle una función*/}
        </>
    );
}

export default Item