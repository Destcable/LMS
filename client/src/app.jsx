import { useState } from "react";
import AuthFormContainer from "./containers/AuthFormContainer"
import SelectThemeContainer from "./containers/SelectThemeContainer";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";

const App = () => { 
    const [isAuth, setAuth] = useState(false);

    if (isAuth) { 
        return <SelectThemeContainer />
    }

    if (!isAuth) { 
        const { login, password } = getStorageAuth();
    
        if (authService.login(login, password)) { 
            setAuth(true);
        }

        return <AuthFormContainer onSuccess={() => setAuth(true)}/>
    }
};

export default App;