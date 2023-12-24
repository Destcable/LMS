import useQueryTopics from "../hooks/useQueryTopics/index"
import SelectTheme from "../ui/SelectTheme/SelectTheme";
import Loading from "../ui/Loading/Loading";
import compareArray from "../utils/compareArray";

const SelectThemeContainer = () => { 
    const {data, loading} = useQueryTopics();
    
    if (loading) { 
        return <Loading />
    }
    if (data) { 
        return <SelectTheme themes={data} />
    }
};

export default SelectThemeContainer;