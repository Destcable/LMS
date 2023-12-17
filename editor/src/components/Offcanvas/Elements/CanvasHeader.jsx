import CanvasElement from "../CanvasElement";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import dataSaver from "../../../services/dataSaver";

const CanvasHeader = ({ show, setShow }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => dataSaver(data);

    return (
        <CanvasElement
            title='Настройка шапки сайта'
            show={show}
            setShow={setShow}
        >
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Название сайта</Form.Label>
                    <Form.Control type="text" placeholder="Укажите название" defaultValue='Title' {...register('title')} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Название темы</Form.Label>
                    <Form.Control type="text" placeholder="Укажите название темы" defaultValue='' {...register('topic')} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Верхняя полоска</Form.Label>
                    <Form.Control className="w-100" type="color" defaultValue="#3b5571" {...register('topLineColor')} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Нижняя полоска</Form.Label>
                    <Form.Control className="w-100" type="color" defaultValue="#43698f" {...register('bottomLineColor')} />
                </Form.Group>
                <Form.Check type="checkbox">
                    <Form.Check.Input type="checkbox" isValid {...register('isButton_InfoContent')} />
                    <Form.Check.Label>Кнопка «Информация о контенте»</Form.Check.Label>
                    <Form.Control.Feedback type="valid">
                        <Form.Label>Укажите информацию</Form.Label>
                        <Form.Control as="textarea" rows={3} {...register('buttonInfoContent_text')} />
                    </Form.Control.Feedback>
                </Form.Check>
                <Form.Check type="checkbox">
                    <Form.Check.Input type="checkbox" isValid {...register('isButton_KeyWords')}/>
                    <Form.Check.Label>Кнопка «Ключевые слова»</Form.Check.Label>
                    <Form.Control.Feedback type="valid">
                        <Form.Label>Укажите информацию</Form.Label>
                        <Form.Control as="textarea" rows={3} {...register('buttonKeyWords_text')} />
                    </Form.Control.Feedback>
                </Form.Check>
                <div className="d-flex w-100 justify-content-center mt-5">
                    <Button variant="primary" type="submit">Сохранить</Button>
                </div>
            </Form>
            
        </CanvasElement>
    )
}

export default CanvasHeader;