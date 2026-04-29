// pintar una tarea
const Item = ({ task, onDeleteTask, onToggleTask }) => {

    return (
        <li className="item">
            <span className={task.isDone ? "item__title item__title--done" : "item__title"}>{task.title}</span> {/* Qué clases CSS poner según si la tarea está hecha o no (IMPORTANTE: el ternario siempre es -> condición ? valorSiTrue : valorSiFalse). 
            Si NO está hecha usar solo: item__title  y si esta hecha usar item__title item__title--done -> O sea, la clase base más una clase extra de “completada”*/}
            <button
                className="item__toggle"
                onClick={() => onToggleTask(task._id)} >{/*Botón de cambiar tarea a completada */}
                DONE
            </button>
            <button
                className="item__delete"
                onClick={() => onDeleteTask(task._id)} >
                DELETE
            </button> {/*onClick necesita una función, no el resultado de ejecutar una función. Si lo pongo así: onClick={onDeleteTask(task._id)} lo ejecuta ya sin el onclick por eso hay que darle una función*/}
        </li>
    );
}

export default Item