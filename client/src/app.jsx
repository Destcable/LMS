import { useEffect, useState } from "react";
import AuthFormContainer from "./containers/AuthFormContainer"
import SelectThemeContainer from "./containers/SelectThemeContainer";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";
import MainThemeUI from "./ui/MainTheme/MainThemeUI";
import { handleSelectTheme } from "./handlers/themeHandler";
import useQueryTopicHeader from "./hooks/useQueryTopicHeader";
import useQueryTopicThemes from "./hooks/useQueryTopicThemes";

const App = () => { 
    const [isAuth, setAuth] = useState(false);
    const [selectableTheme, setSelectableTheme] = useState(null);

    const themes = useQueryTopicThemes(selectableTheme?.id);
    
    useEffect(() => {
        console.log(themes);
    }, [themes]);

    if (selectableTheme) { 
        return <MainThemeUI />
    }

    if (isAuth) { 
        return <SelectThemeContainer 
            onThemeSelected={(data) => handleSelectTheme(data, setSelectableTheme)} 
        />
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