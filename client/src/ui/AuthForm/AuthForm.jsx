
const AuthForm = () => {
    return (
        <form className='m-5'>
            <div className="form-group" id="formBasicEmail">
                <label for="exampleInputEmail1">Введите E-mail</label>
                <input type="email" class="form-control" placeholder="Введите email"/>
            </div>

            <div className="form-group">
                <label for="exampleInputPassword1">Введите пароль</label>
                <input type="password" class="form-control" placeholder="Введите пароль"/>
                <small className="form-text text-muted">Укажите пароль который был выслан на почту</small>
            </div>
            
            <br />
            <button type="submit" className="btn w-100 text-white" style={{backgroundColor: '#4f7094'}}>Войти</button>
        </form>
    )
};

export default AuthForm;