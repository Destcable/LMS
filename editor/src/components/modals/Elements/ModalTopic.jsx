import { useForm } from "react-hook-form";
import useMutationTopic from "../../../hooks/useMutationTopic";
import ModalELement from "../ModalElement";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalTopic = ({ isEdit, dataTopic, show, setShow }) => {
    const { register, handleSubmit } = useForm();

    const { createTopic } = useMutationTopic();

    const onSubmit = data => setShow(false) || createTopic(data.name);

    return (
        <ModalELement
            show={show}
            setShow={setShow}
            title='Настройка темы'
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Label>Название темы</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Укажите название"
                    defaultValue={isEdit ? dataTopic.name : ''}
                    {...register('name')}
                />
                <Modal.Footer>
                    {isEdit &&
                        <>
                            <Button variant="outline-danger">Удалить</Button>
                            <Button variant="success" type="submit">Сохранить</Button>
                        </>
                    }
                    {!isEdit &&
                        <Button variant="success" type="submit">Создать</Button>
                    }
                </Modal.Footer>
            </Form>
        </ModalELement>
    )
};

export default ModalTopic;