import { useState } from "react";
import SideCard from "../../ui/Sidebar/SideCard";
import SidebarUI from "../../ui/Sidebar/Sidebar";
import { FaHatWizard } from 'react-icons/fa';
import { MdTopic } from "react-icons/md";
import CanvasHeader from "../Offcanvas/Elements/CanvasHeader";
import Button from 'react-bootstrap/Button';
import FlexBetween from "../../ui/Flex/FlexBetween";
import CanvasTheme from "../Offcanvas/Elements/CanvasTheme";

const Sidebar = ({topic}) => {
    const [showHeader, setShowHeader] = useState(false);
    const [showTheme, setShowTheme] = useState(false);

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
                    <Button 
                        size="sm" 
                        onClick={() => setShowTheme(true)}
                    >
                        Добавить
                    </Button>
                </FlexBetween>

                <SideCard
                    icon={<MdTopic size={'70px'} />}
                    title={'Title'}
                    onClick={() => setShowTheme(true)}
                />

            </SidebarUI>
            <CanvasHeader show={showHeader} setShow={setShowHeader} />
            <CanvasTheme show={showTheme} setShow={setShowTheme} />
        </>
    )
};

export default Sidebar;