import React from 'react'
import {useNavigate} from "react-router-dom";

const Logo = ({isNavbarMode}) => {
    const navigate = useNavigate();
    const handleTitleNavigate = () => {
        navigate('/about-us')
    }

    const navbarMode = () => {
        return isNavbarMode ? 'max-md:hidden' : ''
    }

    return (
        <div className='flex gap-x-2 text-primary font-bold text-[1.7rem] cursor-pointer hover:opacity-70'
             onClick={handleTitleNavigate}
        >
            <div><img src="../../../public/img/logo.png" alt="" className='w-[40px]'/></div>
            <span className={`${navbarMode()}`}>VirtualMeets</span>
        </div>)
}
export default Logo
