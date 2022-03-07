import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text,changeValue}){
    return(
        <button 
        className={styles.btn}
        onClick={changeValue}>
            {text}
        </button>
    )
}

Button.propTypes ={
    text:PropTypes.string.isRequired,
}
export default Button;

