import { useState } from "react";
import AuthFormContainer from "./containers/AuthFormContainer"
import SelectThemeContainer from "./containers/SelectThemeContainer";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";
import MainThemeUI from "./ui/MainTheme/MainThemeUI";
import { handleSelectTheme } from "./handlers/themeHandler";
import WindowContainer from "./containers/WindowContainer";

const App = () => { 
    const [isAuth, setAuth] = useState(false);
    const [selectableTopic, setSelectableTopic] = useState(null);
    
    if (selectableTopic) { 
        return <WindowContainer />
        // return <MainThemeUI 
        //     selectableTopic={selectableTopic}
        // />
    }

    if (!isAuth) { 
        const { login, password } = getStorageAuth();
    
        if (authService.login(login, password)) { 
            return <SelectThemeContainer 
                onThemeSelected={(data) => handleSelectTheme(data, setSelectableTopic)} 
            />
        }

        return <AuthFormContainer onSuccess={() => setAuth(true)}/>
    }
};

export default App;