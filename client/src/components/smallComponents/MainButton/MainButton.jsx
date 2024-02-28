/* eslint-disable react/prop-types */
import './style.css'
function MainButton({text,type,icon}) {
    return (
        <button
            type={type}
            className="main__button"
            >
            {text}
            {icon}
        </button>
    );
}

export default MainButton;