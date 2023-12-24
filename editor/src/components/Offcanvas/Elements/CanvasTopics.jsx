import CanvasElement from "../CanvasElement";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import useQueryTopics from "../../../hooks/useQueryTopics";

const CanvasTopics = ({ show, setShow }) => {

    const { data } = useQueryTopics();
    return (
        <CanvasElement
            title='Настройка тем'
            show={show}
            setShow={setShow}
        >
            <Form>
                <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                    <Form.Label>Добавить тему</Form.Label>
                    <Button variant="primary">Добавить</Button>
                </Form.Group>
                <Form.Group className="mb-3">
                    {data &&
                        <ButtonGroup className="w-100" vertical>
                            {data.map((item, idx) => <Button key={idx} variant="outline-dark">{item.title}</Button>)}
                        </ButtonGroup>
                    }
                </Form.Group>
            </Form>

        </CanvasElement>
    )
}

export default CanvasTopics;