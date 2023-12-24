import ModalELement from "../ModalElement";
import Form from 'react-bootstrap/Form';

const ModalTopic = ({ isEdit, dataTopic, show, setShow }) => {
    console.log(isEdit);
    return (
        <ModalELement
            show={show}
            setShow={setShow}
            title='Настройка темы'
        >
            <Form>
                <Form.Label>Название темы</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Укажите название" 
                    value={isEdit ? dataTopic.title : ''} 
                    readOnly
                />
            </Form>
        </ModalELement>
    )
};

export default ModalTopic;