import { useState } from "react";
import SideCard from "../../ui/Sidebar/SideCard";
import SidebarUI from "../../ui/Sidebar/Sidebar";
import { FaHatWizard } from 'react-icons/fa';
import CanvasHeader from "../Offcanvas/Elements/CanvasHeader";

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
            </SidebarUI>
            <CanvasHeader show={showHeader} setShow={setShowHeader} />
        </>
    )
};

export default Sidebar;