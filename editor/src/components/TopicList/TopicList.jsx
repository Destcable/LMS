import TopicListItem from "../../ui/TopicList/TopicListItem"

const TopicList = ({topics, onClick}) => { 
    return topics?.map((topic, idx) => <TopicListItem key={idx} topic={topic} onClick={onClick} />)
};

export default TopicList;