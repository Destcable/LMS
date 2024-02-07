import { useState } from "react";
import {
    Col,
    Container,
    Row,
} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CanvasHeader from "../Offcanvas/Elements/CanvasHeader";
import useQueryTopics from "../../hooks/useQueryTopics";
import ModalTopic from "../modals/Elements/ModalTopic";
import useMutationTopic from "../../hooks/useMutationTopic";
import TopicList from "../TopicList/TopicList";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
    const { data } = useQueryTopics();
    const [showModalTopic, setShowModalTopic] = useState(false);
    const [editData, setEditData] = useState({ iseEdit: false, dataTopic: null });
    const [showHeader, setShowHeader] = useState(false);
    const [showTopic, setShowTopic] = useState(null);
    const { deleteTopic } = useMutationTopic();

    const handleClickTopic = (topic) => {
        // const selectedTopic = data.find(element => element.id == elementID);

        if (topic) {
            setShowModalTopic(true);
            setEditData({ iseEdit: true, dataTopic: topic });
        }
    }


    return (
        <Container>
            <Row>
                {showTopic &&
                    <Sidebar />
                }
                <Col md={9} className="content">
                    <h4>Добро пожаловать в настройку вашей LMS(Learning Management System)</h4>
                    <p>Для настройки, вашей LMS выберите неободимый элемент в панели!</p>

                    <br />
                    <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                        <Form.Label>Добавить тему</Form.Label>
                        <Button
                            variant="primary"
                            onClick={() => setShowModalTopic(true) || setEditData({ isEdit: false, dataTopic: null })}
                        >
                            Добавить
                        </Button>
                    </Form.Group>
                    <h4>Темы:</h4>
                    
                    <div className="d-grid">
                        <TopicList 
                            topics={data} 
                            onTopicSelected={(item) => setShowTopic(item)}
                            onTopicDeleted={(item) => handleClickTopic(item)}
                        />
                    </div>

                </Col>
            </Row>
            <CanvasHeader show={showHeader} setShow={setShowHeader} />
            <ModalTopic
                show={showModalTopic}
                setShow={setShowModalTopic}
                isEdit={editData.iseEdit}
                dataTopic={editData.dataTopic}
            />
        </Container>
    )
};

export default Layout;