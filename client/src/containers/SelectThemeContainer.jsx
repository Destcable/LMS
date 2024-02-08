import useQueryTopics from "../hooks/useQueryTopics/index"
import SelectTheme from "../ui/SelectTheme/SelectTheme";
import Loading from "../ui/Loading/Loading";
import { useState } from "react";
import MainThemeUI from "../ui/MainTheme/MainThemeUI";

const SelectThemeContainer = () => { 
    const {data, loading} = useQueryTopics();
    const [selectableTheme, setSelectableTheme] = useState(null);
    
    if (loading) { 
        return <Loading />
    }
    
    if (data && !selectableTheme) {
        return <SelectTheme themes={data} onClick={data => setSelectableTheme(data)} />
    }

    if ( selectableTheme ) { 
        return <MainThemeUI />
    }
};

export default SelectThemeContainer;