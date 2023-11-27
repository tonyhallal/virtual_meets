import React, {useContext, useEffect, useState} from 'react'
import {postData} from "../services/global-services.js";
import {GlobalContext} from "../context/GlobalContext.jsx";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [mode, setMode] = useState('Sign In');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {setLoggedUser} = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('logged_user', '');
    })
    const resetFormFields = () => {
        if (errorMessage) {
            setErrorMessage('');
        }
        if (username) {
            setUsername('');
        }

        if (password) {
            setPassword('');
        }
    }
    const changeMode = () => {
        resetFormFields();
        mode === 'Sign In' ? setMode('Sign Up') : setMode('Sign In');
    }

    const handleSubmit = async () => {

        if (username === '' && password === '') {
            setErrorMessage('Please enter all fields');
            console.log('err')
        } else if (mode === 'Sign Up') {
            await postData('/user', {
                user_username: username,
                user_password: password
            })
            resetFormFields();
            setMode('Sign In');
        } else {
            try {
                const authResponse = await postData('/auth', {
                    user_username: username,
                    user_password: password
                })

                if (authResponse === 'OK') {
                    setLoggedUser(username);
                    localStorage.setItem('logged_user', username);
                    resetFormFields();
                    navigate('/home');
                }
            } catch (e) {
                setErrorMessage('incorrect username or password')
            }



        }
    }

    return (
        <div className='h-screen flex items-center justify-center'
             style={{
                 backgroundImage: 'url(../../public/img/homeimg.jpg)', backgroundSize: "cover"
             }}>
            <div className='bg-white  px-8 py-10 flex flex-col gap-y-5 rounded-lg'>
                <h1 className='text-primary'>{mode}</h1>
                <input
                    type="text" value={username}
                    className=' border-b-2 bg-transparent placeholder:text-primary focus:outline-none
                     border-b-[var(--primary-color)]'
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter Username'/>
                <input value={password}
                       type="password"
                       className=' border-b-2 bg-transparent placeholder:text-primary focus:outline-none
                     border-b-[var(--primary-color)]'
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder='Enter Password'/>
                <button className='text-white' onClick={async () => await handleSubmit()}>{mode}</button>
                {mode === 'Sign In'
                    ? <div>Don't have an account?
                        <button onClick={changeMode}
                                className='border-none bg-transparent text-primary hover:underline'>Sign Up
                        </button>
                    </div>
                    : <div>Already have an account?
                        <button onClick={changeMode}
                                className='border-none bg-transparent text-primary hover:underline'>Sign In
                        </button>

                    </div>}
                {errorMessage && <div className='font-bold text-red-600 w-full text-center'>{errorMessage}</div>}
            </div>
        </div>
    )
}
export default Register
