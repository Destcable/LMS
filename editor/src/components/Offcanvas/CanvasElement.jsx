import { useEffect, useState } from 'react';
import Offcanvas  from 'react-bootstrap/Offcanvas';

const CanvasElement = ({title, show, setShow, children}) => {
    const [showElement, setShowElement] = useState(show);

    useEffect(() => {
        setShowElement(show);
    }, [show])

    const handleClose = () => setShow(false) && setShowElement(false);

    return (
        <Offcanvas show={showElement} onHide={handleClose} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {children}
            </Offcanvas.Body>
        </Offcanvas>
    )
};

export default CanvasElement;