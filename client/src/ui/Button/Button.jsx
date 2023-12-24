const Button = ({type, children}) => { 
    return( 
        <button type={type} className="btn" style={{ backgroundColor: '#4f7094' }}>{children}</button>
    )
};

export default Button;