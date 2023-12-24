const Button = ({className,  children}) => {

    return( 
        <button 
            className={`btn ${className || ''}`} 
            style={{ backgroundColor: '#4f7094' }}
        >
            {children}
        </button>
    )
};

export default Button;  