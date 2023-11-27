import React from 'react'
import {useNavigate} from "react-router-dom";

const StartMeeting = () => {
    const navigate = useNavigate();
    const handleCreateMeeting = () => {
        navigate('/home');
    }

    const handleJoinMeeting = () => {
        navigate('/join-meeting')
    }

    return (
        <section
            className='w-3/4 common-width spacing-between-sections p-6 bg-secondary rounded-2xl'>
            <div className='w-[90%] sm:w-3/4 mx-auto flex flex-col items-center justify-center gap-y-2'>
                <h2 className='text-primary w-full text-center'>Start Meeting Now!</h2>
                <div className='flex max-lg:flex-col max-lg:w-full gap-x-4 w-full'>
                    <button onClick={handleCreateMeeting} className='max-lg:w-full w-1/2'>Create a Meeting!</button>
                    <button onClick={handleJoinMeeting} className='max-lg:w-full w-1/2'>Join Meeting!</button>
                </div>
            </div>
        </section>
    )
}
export default StartMeeting
