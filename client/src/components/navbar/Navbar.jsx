import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink, useNavigate} from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Logo from "../util/Logo.jsx";

const Navbar = () => {
    const [isSideBarToggled, setIsSideBarToggled] = useState(false);
    const navigate = useNavigate();

    const setSideBarState = (flag) => {
        setIsSideBarToggled(flag);
    }
    return (
        <div className='bg-secondary sticky top-0 z-10'>
            <div className='common-width h-full flex justify-between items-center py-4'>
                <Logo isNavbarMode={true}/>
                <ul className='flex gap-x-12'>
                    <li><NavLink to='/home'>
                        <FontAwesomeIcon icon='house' className='text-primary hover:opacity-70 max-md:hidden'
                                         size='2x'/></NavLink>
                    </li>
                    <li><NavLink to='/join-meeting'>
                        <FontAwesomeIcon icon='video' className='text-primary hover:opacity-70 max-md:hidden'
                                         size='2x'/></NavLink>
                    </li>
                    <li><NavLink to='/schedule'>
                        <FontAwesomeIcon icon='calendar-days' className='text-primary hover:opacity-70 max-md:hidden'
                                         size='2x'/></NavLink>
                    </li>
                    <li><NavLink to='/' onClick={() => {
                        localStorage.removeItem('savedEvents');
                    }}>
                        <FontAwesomeIcon icon='right-from-bracket'
                                         className='text-primary hover:opacity-70 max-md:hidden'
                                         size='2x'
                        /></NavLink>
                    </li>
                    <li onClick={() => setIsSideBarToggled(true)}>
                        <FontAwesomeIcon icon='bars' className='text-primary hover:opacity-70 md:hidden cursor-pointer'
                                         size='2x'/>
                    </li>
                </ul>

                {isSideBarToggled && <Sidebar setSideBarState={setSideBarState}/>}
            </div>
        </div>
    )
}
export default Navbar
