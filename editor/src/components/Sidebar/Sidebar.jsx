import { useState } from "react";
import SideCard from "./SideCard";
import { FaHatWizard } from 'react-icons/fa6';
import {
    Col,
    Container,
    Row,
  } from 'react-bootstrap';
import CanvasHeader from "../Offcanvas/Elements/CanvasHeader";
const Sidebar = () => {
    const [showHeader, setShowHeader] = useState(false);

    return (
        <Container>
            <Row>
                <Col md={3} className="bg-dark sidebar">
                    <h2>Ваша LMS</h2>
                    <SideCard
                        icon={<FaHatWizard size={'70px'} />}
                        title='Шапка сайта'
                        onClick={() => setShowHeader(true)}
                    />
                    <ul className="list-unstyled">
                        <li>About</li>
                        <li>Contact</li>
                        <li>Contact</li>
                        <li>Contact</li>
                        <li>Contact</li>
                    </ul>
                </Col>
                <Col md={9} className="content">
                    <h4>Добро пожаловать в настройку вашей LMS(Learning Management System)</h4>
                    <p>Для настройки, вашей LMS выберите неободимый элемент в панели!</p>
                </Col>
            </Row>
            <CanvasHeader show={showHeader} setShow={setShowHeader}/>
        </Container>
    )
};

export default Sidebar;