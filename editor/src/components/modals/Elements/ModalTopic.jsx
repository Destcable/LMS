import useMutationTopic from "../../../hooks/useMutationTopic";
import ModalELement from "../ModalElement";
import Form from 'react-bootstrap/Form';

const ModalTopic = ({ isEdit, dataTopic, show, setShow }) => {
    const { createTopic } = useMutationTopic();

    const handleSubmitModal = () => {
        setShow(false);
        createTopic('Цок 130')
    };

    return (
        <ModalELement
            show={show}
            setShow={setShow}
            title='Настройка темы'
            onClickSuccess={handleSubmitModal}
        >
            <Form>
                <Form.Label>Название темы</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Укажите название" 
                    defaultValue={isEdit ? dataTopic.name : ''} 
                />
            </Form>
        </ModalELement>
    )
};

export default ModalTopic;