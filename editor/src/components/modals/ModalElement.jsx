import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

const ModalELement = ({title, show, setShow, onClickSuccess, children}) => {
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
            <Modal.Footer>
                <Button variant="outline-danger">
                    Удалить
                </Button>
                <Button variant="success" onClick={onClickSuccess}>
                    Создать
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

export default ModalELement;