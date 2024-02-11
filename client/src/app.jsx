import { useState } from "react";
import AuthFormContainer from "./containers/AuthFormContainer"
import SelectThemeContainer from "./containers/SelectThemeContainer";
import getStorageAuth from "./services/getStorageAuth";
import authService from "./services/authService";
import MainThemeUI from "./ui/MainTheme/MainThemeUI";
import WindowContainer from "./containers/WindowContainer";

const App = () => { 
    const [isAuth, setAuth] = useState(false);
    const [selectableTopic, setSelectableTopic] = useState(null);
    const [selectableTheme, setSelectableTheme] = useState(null);

    if (selectableTopic) return <MainThemeUI 
        dataTopic={selectableTopic}
        selectableTheme={theme => console.log(theme)}
    />

    if (!isAuth) { 
        const { login, password } = getStorageAuth();
    
        if (authService.login(login, password)) { 
            return <SelectThemeContainer 
                onThemeSelected={data => setSelectableTopic(data)} 
            />
        }

        return <AuthFormContainer onSuccess={() => setAuth(true)}/>
    }
};

export default App;