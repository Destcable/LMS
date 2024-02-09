import CanvasElement from "../CanvasElement";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import dataSaver from "../../../services/dataSaver";
import useQueryTopicThemeById from "../../../hooks/useQueryTopicThemeById";

const CanvasTheme = ({ show, setShow }) => {
    const { register, handleSubmit } = useForm();
    const { data } = useQueryTopicThemeById(1);
    console.log(data);
    const onSubmit = (data) => dataSaver(data);

    return (
        <CanvasElement
            title='Настройка подтемы'
            show={show}
            setShow={setShow}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Название темы</Form.Label>
                    <Form.Control type="text" placeholder="Укажите название темы" defaultValue='' {...register('title')} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Описание темы</Form.Label>
                    <Form.Control type="text" placeholder="Укажите описание темы" defaultValue='' {...register('description')} />
                </Form.Group>

                <div className="d-flex w-100 justify-content-center mt-5">
                    <Button variant="primary" type="submit">Сохранить</Button>
                </div>
            </Form>
            
        </CanvasElement>
    )
}

export default CanvasTheme;