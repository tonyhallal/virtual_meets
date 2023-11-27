import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink, useNavigate} from "react-router-dom";

const Sidebar = ({setSideBarState}) => {
    const navigate = useNavigate();
    return (
        <>
            <div onClick={() => setSideBarState(false)}
                 className='min-h-screen w-1/2 left-0 top-0 bottom-0 absolute bg-black bg-opacity-50 z-10'>
            </div>
            <div
                className='min-h-screen overflow-y-auto w-1/2 absolute right-0 top-0 bottom-0 z-[20] flex flex-col gap-y-10 bg-primary'>
                <div
                    className='ml-5 mt-5 w-max-content rounded-full bg-black bg-opacity-50 py-2.5 px-3.5 text-white hover:opacity-70 duration-300 cursor-pointer'
                    onClick={() => setSideBarState(false)}
                >
                    <FontAwesomeIcon icon='times' size='2x' transform='shrink-2'/>
                </div>
                <ul className='list-none flex flex-col w-full'>
                    <li onClick={() => {
                        setSideBarState(false)
                        navigate('/home')
                    }}
                        className='py-5 pl-5 border-t border-t-[var(--secondary-color)] border-b border-b-[var(--secondary-color)] text-white'>
                        <NavLink to='/home' className='home-page-link'>Home</NavLink>
                    </li>
                    <li onClick={() => {
                        setSideBarState(false)
                        navigate('/join-meeting')
                    }}
                        className='py-5 pl-5 border-t border-t-[var(--secondary-color)] text-white'>
                        <NavLink to='/join-meeting' className='home-page-link'>Join Meeting</NavLink>
                    </li>
                    <li onClick={() => {
                        setSideBarState(false)
                        navigate('/schedule')
                    }}
                        className='py-5 pl-5 border-t border-t-[var(--secondary-color)] border-b border-b-[var(--secondary-color)] text-white'>
                        <NavLink to='/schedule' className='home-page-link'>Calendar</NavLink>
                    </li>
                    <li onClick={() => {
                        setSideBarState(false)
                    navigate('/')
                        localStorage.removeItem('savedEvents');
                    }}
                        className='py-5 pl-5 border-t border-t-[var(--secondary-color)] border-b border-b-[var(--secondary-color)] text-white'>
                        <NavLink to='/' className='home-page-link'>Log Out</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Sidebar
