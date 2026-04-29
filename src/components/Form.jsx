import { useState } from 'react' // sirve para traer (importar) el hook useState de React, que te permite guardar y actualizar datos dentro de un componente funcional.

import Button from "./Button";

const Form = ({ onAddTask }) => {

    const [title, setTitle] = useState(""); // creamos el estado inicial a vacío con useState("")

    const handleSubmit = (e) => {
        e.preventDefault() // para evitar recargar la página web

        onAddTask(title); // llama a la función onAddTask y mándale el valor de title

        setTitle(""); // React actualiza title a vacío y el input se limpia automáticamente
    }

    return (
        <form onSubmit={handleSubmit}>{/* onSubmit={handleSubmit} -> ejecuta esa función al enviar el form */}
            <input type="text"
                value={title} // tu valor será lo que haya en title
                placeholder='Escriba aquí...'
                onChange={(e) => setTitle(e.target.value)} // Cada vez que el usuario escribe, actualizas el estado
                required
            />
            <Button type="submit" text="ADD" />
        </form>
    );
};

export default Form;