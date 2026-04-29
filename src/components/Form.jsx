import { useEffect, useState } from 'react' // sirve para traer (importar) el hook useState de React, que te permite guardar y actualizar datos dentro de un componente funcional.

import Button from "./Button";

const Form = ({ onAddTask }) => {

    const [title, setTitle] = useState(""); // creamos el estado inicial a vacío con useState("")
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    // useEffect del Input
    useEffect(() => {
        if (!title) return;// si el input está vacío, no hagas nada
        // Pasado 20s se vacía el input
        const timer = setTimeout(() => {
            setTitle(""); // vaciamos el title
        }, 20000);

        // Este return le dice a React, antes de volver a ejecutar este efecto, limpia lo anterior
        return () => {
            clearTimeout(timer);// Y esto es lo que realmente cnacela el temporizador anterior que se había creado
        }

    }, [title]);

    // useEffect al añadir la tarea se borra despues de 5s el mensaje
    useEffect(() => {
        if(!success) return; // si no hay mensaje de éxito, no hagas nada
        // pero si hay haz al añadir la tarea se borra despues de 5s el mensaje
        const timer = setTimeout(() => {
            setSuccess("");
        },5000);

        return () => {
            clearTimeout(timer);
        }
    },[success]);

    const handleSubmit = (e) => {
        e.preventDefault() // para evitar recargar la página web
        // si el contenido del input tiene menos de 6 caracteres, mostramos el mensaje
        if (title.length < 6) {
            setError("La tarea debe tener al menos 6 caracteres");
            return;
        }
        // Si no, continua con la tarea
        setError("");

        onAddTask(title); // llama a la función onAddTask y mándale el valor de title

        setTitle(""); // React actualiza title a vacío y el input se limpia automáticamente

        setSuccess("La tarea fue añadida con éxito");
    }

    return (
        <form className="form" onSubmit={handleSubmit}>{/* onSubmit={handleSubmit} -> ejecuta esa función al enviar el form */}
            <div className="form__group">
                <input
                    className="form__input"
                    type="text"
                    value={title} // tu valor será lo que haya en title
                    placeholder='Escriba aquí...'
                    onChange={(e) => setTitle(e.target.value)} // Cada vez que el usuario escribe, actualizas el estado
                    required
                />
                {error ? <p className='error'>{error}</p> : ""}
                {success ? <p className='success'>{success}</p> : ""}
            </div>
            {title ? <Button type="submit" text="ADD" /> : ""}{/* Comprobamos que si title es decir que el campo a rellenar esta vacío, pues no muestra el boton y cuando haya texto lo muestra */}
            {/*También podría hacerse así: {title && <Button type="submit" text="ADD" />} */}
        </form>
    );
};

export default Form;