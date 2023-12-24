import useQueryTopics from "../hooks/useQueryTopics/index"
import SelectTheme from "../ui/SelectTheme/SelectTheme";

const SelectThemeContainer = () => { 
    const {data, loading} = useQueryTopics();
    if (loading) { 
        return <h1>Loading...</h1>
    }
    if (data) { 
        return <SelectTheme themes={data} />
    }
};

export default SelectThemeContainer;