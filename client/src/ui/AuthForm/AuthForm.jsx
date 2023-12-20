const AuthForm = ({register, onSubmit}) => {
    return (
        <form className='m-5' onSubmit={onSubmit}>
            <div className="form-group" id="formBasicEmail">
                <label>Введите E-mail</label>
                <input type="email" className="form-control" placeholder="Введите email" {...register('email')}/>
            </div>

            <div className="form-group">
                <label>Введите пароль</label>
                <input type="password" className="form-control" placeholder="Введите пароль" {...register('password')}/>
                <small className="form-text text-muted">Укажите пароль который был выслан на почту</small>
            </div>
            
            <br />
            <button type="submit" className="btn w-100 text-white" style={{backgroundColor: '#4f7094'}}>Войти</button>
        </form>
    )
};

export default AuthForm;