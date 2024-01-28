const Button = ({className, onClick, id, children}) => {

    return( 
        <button 
            id={id}
            className={`btn ${className || ''}`} 
            style={{ backgroundColor: '#4f7094' }}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default Button;  