import { useState } from "react";
import SideCard from "../../ui/Sidebar/SideCard";
import SidebarUI from "../../ui/Sidebar/Sidebar";
import { FaHatWizard } from 'react-icons/fa';
import CanvasHeader from "../Offcanvas/Elements/CanvasHeader";
import Button from 'react-bootstrap/Button';
import FlexBetween from "../../ui/Flex/FlexBetween";

const Sidebar = () => {
    const [showHeader, setShowHeader] = useState(false);
    
    return (
        <>
            <SidebarUI>
                <SideCard
                    icon={<FaHatWizard size={'70px'} />}
                    title='Шапка сайта'
                    onClick={() => setShowHeader(true)}
                />

                <br />
                
                <FlexBetween>
                    <span>Подтемы: </span>
                    <Button size="sm">Добавить</Button>
                </FlexBetween>

            </SidebarUI>
            <CanvasHeader show={showHeader} setShow={setShowHeader} />
        </>
    )
};

export default Sidebar;