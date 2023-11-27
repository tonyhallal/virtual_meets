import React, {useEffect, useRef, useState} from 'react'
import {useNavigate} from "react-router-dom";

const JoinMeeting = () => {
    const [url, setUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleKeyDown = (event) => {
        if (!(event.key === 'v' && event.ctrlKey) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    };

    const handleJoinRoom = () => {
        if (!url.startsWith('http://localhost:5173/')) {
            setErrorMessage('invalid URL')
            return;
        }

        const navigateUrl = url.replace('http://localhost:5173', '');
        navigate(navigateUrl);
    }

    return (
        <section
            className='common-width constraint-width spacing-between-sections flex flex-col items-center justify-center py-32 max-lg:w-3/4 rounded-2xl'
            style={{
                backgroundImage: 'url(../../public/img/join-room-page.jpg)',
                backgroundSize: "cover"
            }}
        >

            <div className='w-[90%] md:w-3/4 flex flex-col justify-center items-center'>
                <h1 className='text-white w-full text-center'>Join a Meeting</h1>
                <br/>
                <input type="text" onKeyDown={handleKeyDown} value={url}
                       onChange={(e) => setUrl(e.target.value)}
                       required placeholder='Paste URL here...'
                       className='p-4 rounded-full w-[80%] lg:w-full mx-auto focus:outline-none'
                />
                <button className='bg-primary text-white w-2/3 sm:w-1/3'
                onClick={handleJoinRoom}
                >Join
                    Meeting
                </button>
                {errorMessage && <div className='text-red-600 font-bold'>{errorMessage}</div>}
            </div>
        </section>

    )
}
export default JoinMeeting
