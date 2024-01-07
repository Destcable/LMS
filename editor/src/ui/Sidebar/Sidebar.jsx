import { Col } from 'react-bootstrap';

const SidebarUI = ({children}) => {
    return (
        <Col md={3} className="bg-dark sidebar">
            <h2>Ваша LMS</h2>
            {children}
        </Col>
    )
};

export default SidebarUI;