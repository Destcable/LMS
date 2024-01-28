import { useForm } from 'react-hook-form';
import AuthForm from '../ui/AuthForm/AuthForm';
import authService from '../services/authService';

const AuthFormContainer = ({onSuccess}) => { 
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => { 
        if (authService.login(data.email, data.password)) { 
            localStorage.setItem('auth-login', data.email);
            localStorage.setItem('auth-password', data.password);
            onSuccess();
        }
    };

    return( 
        <AuthForm 
            onSubmit={handleSubmit(onSubmit)} 
            register={register}
        />
    );
};

export default AuthFormContainer;