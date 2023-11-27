import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

const Hero = () => {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();
    const [errorBorders, setErrorBorders] = useState('');
    const submitCode = () => {
        if (!roomCode) {
            setErrorBorders('border-4 border-red-600');
            return;
        }
        navigate(`/room/${roomCode}`);
    }

    return (
        <div className='flex items-center justify-center' style={{
            backgroundImage: 'url(../../public/img/imgmain.jpg)',
            backgroundSize: "cover"
        }}>
            <div className='common-width flex flex-col py-32 max-lg:w-3/4'>
                <h1 className='text-white w-full text-center'>Create a Meeting</h1>
                <br/>
                <input type="text"
                       required placeholder='Enter room code...'
                       onChange={(e) => setRoomCode(e.target.value)}
                       className={`p-4 rounded-full w-2/3 lg:w-1/2 mx-auto focus:outline-none ${errorBorders}`}
                />
                <button onClick={submitCode} className='bg-primary text-white w-1/2 lg:w-1/4 mx-auto '>Enter
                    Meeting
                </button>
            </div>
        </div>
    )
}
export default Hero
