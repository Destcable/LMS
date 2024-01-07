import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';

const ModalELement = ({
    title,
    show,
    setShow,
    children }) => {
    const [showElement, setShowElement] = useState(show);

    useEffect(() => {
        setShowElement(show)
    }, [show])

    const handleClose = () => setShow(false) && setShowElement(false)
    return (
        <Modal show={showElement} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
            {/* <Modal.Footer>
                {removeButton &&
                    <Button variant="outline-danger">
                        Удалить
                    </Button>
                }
                <Button variant="success" type="submit" onClick={onClickSuccess}>
                    Создать
                </Button>
            </Modal.Footer> */}
        </Modal>
    )
};

export default ModalELement;