import React, {useContext} from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Room from "./pages/Room.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import {GlobalContext} from "./context/GlobalContext.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import JoinRoom from "./pages/JoinRoom.jsx";
import Footer from "./components/footer/Footer.jsx";
import Schedule from "./pages/Schedule.jsx";

const App = () => {
    const {user, isNavAndFooterVisible} = useContext(GlobalContext);
    return (
        <>
            {user && isNavAndFooterVisible && <Navbar/>}
            <Routes>
                <Route path='/' element={<Register/>}/>
                {user && <Route path='/home' element={<Home/>}/>}
                {user && <Route path='/room/:roomID' element={<Room/>}/>}
                {user && <Route path='/about-us' element={<AboutUs/>}/>}
                {user && <Route path='/join-meeting' element={<JoinRoom/>}/>}
                {user && <Route path='/schedule' element={<Schedule/>}/>}
            </Routes>
            {user && isNavAndFooterVisible && <Footer/>}
        </>
    )
}
export default App
