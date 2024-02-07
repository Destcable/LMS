import { FaTrash } from 'react-icons/fa';
import { BiSolidPencil } from "react-icons/bi";

const TopicListItem = ({topic, onTopicSelected, onTopicDeleted}) => {
    return( 
        <div onClick={onTopicSelected} className="btn border-bottom d-flex justify-content-between align-items-center">
        <span>{topic.name}</span>
        <div className="d-flex gap-3">
            <BiSolidPencil size="18px" />
            <FaTrash size="18px" onClick={onTopicDeleted} />
        </div>
    </div>
    )
}

export default TopicListItem;