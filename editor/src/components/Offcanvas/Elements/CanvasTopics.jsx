import CanvasElement from "../CanvasElement";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import useQueryTopics from "../../../hooks/useQueryTopics";
import ModalTopic from "../../modals/Elements/ModalTopic";
import { useState } from "react";

const CanvasTopics = ({ show, setShow }) => {
    const { data } = useQueryTopics();
    const [showModalTopic, setShowModalTopic] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [dataTopic, setDataTopic] = useState();

    const handleClickTopic = (event) => { 
        const elementID = event.target.id;
        const selectedElement = data.find(element => element.id == elementID);
        
        if (selectedElement) {
            setShowModalTopic(true); 
            setEdit(true);
            setDataTopic(selectedElement);
        }
    }

    return (
        <>
            <CanvasElement
                title='Настройка тем'
                show={show}
                setShow={setShow}
            >
                <Form>
                    <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                        <Form.Label>Добавить тему</Form.Label>
                        <Button 
                            variant="primary" 
                            onClick={() => { 
                                setShowModalTopic(true); 
                                setEdit(false)
                            }}
                        >
                            Добавить
                        </Button>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        {data &&
                            <ButtonGroup className="w-100" vertical>
                                {data.map((item, idx) =>  
                                    <Button 
                                        key={idx}
                                        id={item.id} 
                                        variant="outline-dark"
                                        onClick={handleClickTopic}
                                    >
                                        {item.title}
                                    </Button>
                                )}
                            </ButtonGroup>
                        }
                    </Form.Group>
                </Form>
            </CanvasElement>
            <ModalTopic 
                isEdit={isEdit}
                dataTopic={dataTopic}  
                show={showModalTopic} 
                setShow={setShowModalTopic}
            />
        </>
    )
}

export default CanvasTopics;