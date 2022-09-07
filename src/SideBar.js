import SideBarIcon from "./SideBarIcon";
import { BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

function SideBar() {

    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<BsPlus size="28" />}/>
            <SideBarIcon icon={<BsFillLightningFill size="28" />} />
            <SideBarIcon icon={<BsGearFill size="28" />} />
            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<FaPoo size="28" />} />
        </div>
    )
}

export default SideBar;