import AuthForm from '@ui/AuthForm/AuthForm';
import { useForm } from 'react-hook-form';
import AuthService from '@services/AuthService';

const AuthFormContainer = () => { 
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => { 
        console.log(AuthService.login(data.email, data.password));
    };

    return( 
        <AuthForm 
            onSubmit={handleSubmit(onSubmit)}
            register={register}
        />
    );
};

export default AuthFormContainer;