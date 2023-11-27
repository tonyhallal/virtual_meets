import React from 'react'
import {useNavigate} from "react-router-dom";
import Logo from "../util/Logo.jsx";

const Footer = () => {
    const navigate = useNavigate();
    const handleJoinMeeting = () => {
        navigate('/join-meeting')
    }

    const handleGoToCalendar = () => {
        navigate('/schedule')
    }
    return (
        <footer className='py-20 bg-slate-900 spacing-between-sections'>
<div className='grid lg-2:grid-cols-3 max-lg-2:grid-rows-3 gap-y-24 common-width w-[90%] mx-auto'>
    <div className='flex flex-col lg-2:gap-y-3 max-lg-2:justify-between max-lg-2:align-center'>
        <hr className='w-2/3 max-lg-2:mx-auto'/>
        <div className='max-lg-2:1/2 max-lg-2:mx-auto'>
            <Logo isNavbarMode={false}/>
        </div>
        <p className='footer-text text-white w-1/2 max-lg-2:w-full max-lg-2:text-center'>The best platform for interactive online meetings</p>
    </div>

    <div className='flex flex-col items-center justify-between'>
        <hr className='w-2/3 mb-8'/>
        <div className='text-white font-bold text-[1.3rem] text-center'>Join a Meeting Today!</div>
        <button className='w-1/2' onClick={handleJoinMeeting}>Join</button>
    </div>

    <div className='flex flex-col items-center justify-between'>
        <hr className='w-2/3 mb-8'/>
        <div className='text-white font-bold text-[1.3rem] text-center'>Organize Your Schedule!</div>
        <button className='w-1/2' onClick={handleGoToCalendar}>Go to calendar</button>
    </div>


</div>
        </footer>
    )
}
export default Footer;
