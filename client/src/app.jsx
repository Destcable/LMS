import { useState } from "react";
import AuthFormContainer from "./containers/AuthFormContainer"
import SelectThemeContainer from "./containers/SelectThemeContainer";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";
import MainThemeUI from "./ui/MainTheme/MainThemeUI";

const App = () => { 
    const [isAuth, setAuth] = useState(false);
    const [selectableTheme, setSelectableTheme] = useState(null);
    
    if (selectableTheme) { 
        return <MainThemeUI />
    }

    if (isAuth) { 
        return <SelectThemeContainer onThemeSelected={(data) => setSelectableTheme(data)} />
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