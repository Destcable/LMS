import { useState } from "react";
import AuthFormContainer from "./containers/AuthFormContainer"
import SelectThemeContainer from "./containers/SelectThemeContainer";

const App = () => { 
    const [isAuth, setAuth] = useState(false);

    return <SelectThemeContainer />
};

export default App;