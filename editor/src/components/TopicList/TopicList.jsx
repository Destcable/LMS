import TopicListItem from "../../ui/TopicList/TopicListItem"

const TopicList = ({topics}) => { 
        return topics?.map((topic, idx) => <TopicListItem key={idx} topic={topic} />)
};

export default TopicList;