// text → texto del botón | onClick → función al hacer click | type → por defecto "button", pero si le pasas "submit" funciona para formularios
const Button = ({ text, onClick, type = "button" }) => {
    return (
        <button type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;