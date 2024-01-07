import SideCard from "../../ui/Sidebar/SideCard";
import SidebarUI from "../../ui/Sidebar/Sidebar";
import { FaHatWizard } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <SidebarUI>
            <SideCard
                icon={<FaHatWizard size={'70px'} />}
                title='Шапка сайта'
            />
        </SidebarUI>
    )
};

export default Sidebar;