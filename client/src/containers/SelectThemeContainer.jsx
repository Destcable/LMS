import useQueryTopics from "../hooks/useQueryTopics/index"
import SelectTheme from "../ui/SelectTheme/SelectTheme";
import Loading from "../ui/Loading/Loading";

const SelectThemeContainer = ({onThemeSelected}) => { 
    const {data, loading} = useQueryTopics();

    if (loading) return <Loading />
    
    if (data) return <SelectTheme themes={data} onClick={onThemeSelected} />

};

export default SelectThemeContainer;