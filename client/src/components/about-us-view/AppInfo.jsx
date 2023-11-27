import React from 'react'
import {useNavigate} from "react-router-dom";

const AppInfo = () => {
    const navigate = useNavigate();
    const handleStartMeeting = () => {
        navigate('/home');
    }
    return (
        <section className='bg-primary py-5'>
            <div className='w-[60%] common-width flex flex-col gap-y-3'>
                <h2 className='w-full text-center text-white'>VirtualMeets</h2>
                <p className='text-white w-full text-center'>
                    Tired of boring office meetings? Anxious about organizing your schedule? We're there for you!
                    VirtualMeets allows you to interact with your colleagues from the comfort of your home. You can also
                    organize your schedule with the VirtualMeets Scheduler! What are you waiting for?
                    <span className='font-bold underline hover:text-secondary duration-300 cursor-pointer'
                    onClick={handleStartMeeting}> Start Meeting
                    now!</span>
                </p>
            </div>
        </section>
    )
}
export default AppInfo
