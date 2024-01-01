import { useState } from "react";
import SideCard from "./SideCard";
import { FaHatWizard } from 'react-icons/fa6';
import { MdTopic } from "react-icons/md";
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

const Sidebar = () => {
    const { data } = useQueryTopics();
    const [showModalTopic, setShowModalTopic] = useState(false);
    const [editData, setEditData] = useState({iseEdit: false, dataTopic: null});
    const [showHeader, setShowHeader] = useState(false);

    const handleClickTopic = (event) => { 
        const elementID = event.target.id;
        const selectedTopic = data.find(element => element.id == elementID);

        if (selectedTopic) { 
            setShowModalTopic(true);
            setEditData({iseEdit: true, dataTopic: selectedTopic});
        }
    }

    return (
        <Container>
            <Row>
                <Col md={3} className="bg-dark sidebar">
                    <h2>Ваша LMS</h2>
                    <SideCard
                        icon={<FaHatWizard size={'70px'} />}
                        title='Шапка сайта'
                        onClick={() => setShowHeader(true)}
                    />
                </Col>
                <Col md={9} className="content">
                    <h4>Добро пожаловать в настройку вашей LMS(Learning Management System)</h4>
                    <p>Для настройки, вашей LMS выберите неободимый элемент в панели!</p>

                    <br />
                    <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                        <Form.Label>Добавить тему</Form.Label>
                        <Button
                            variant="primary" 
                            onClick={() => { 
                                setShowModalTopic(true);
                                setEditData({isEdit: false, dataTopic: null})
                            }}
                        >
                            Добавить
                        </Button>
                    </Form.Group>
                    <h4>Темы:</h4>
                    {data &&
                        data.map((topic, idx) => 
                            <button 
                                key={idx} 
                                id={topic.id} 
                                className="btn border-bottom"
                                onClick={handleClickTopic}
                            >
                            {topic.name}
                            </button>)
                    }
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

export default Sidebar;