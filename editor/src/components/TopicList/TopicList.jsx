import TopicListItem from "../../ui/TopicList/TopicListItem"

const TopicList = ({topics, onTopicSelected, onTopicDeleted}) => { 
    return topics?.map((topic, idx) => <TopicListItem 
        key={idx} 
        topic={topic} 
        onTopicSelected={() => onTopicSelected(topic)}
        onTopicDeleted={() => onTopicDeleted(topic)} 
    />)
};

export default TopicList;