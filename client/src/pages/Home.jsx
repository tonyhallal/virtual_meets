import React, {useContext, useEffect} from 'react'
import Hero from "../components/home-view/Hero.jsx";
import {GlobalContext} from "../context/GlobalContext.jsx";
import SolidBackgroundTemplate from "../templates/home-page-template-components/SolidBackgroundTemplate.jsx";
import ImgBackgroundTemplate from "../templates/home-page-template-components/ImgBackgroundTemplate.jsx";

const Home = () => {
    const {setNavAndFooterVisibility} = useContext(GlobalContext);

    useEffect(() => {
        window.scrollTo(0, 0)
        setNavAndFooterVisibility(true);

        return () => setNavAndFooterVisibility(false);
    })
    return (
        <>
            <Hero/>
            <ImgBackgroundTemplate backgroundImage='./../public/img/about-us-preview.webp'
                                   title='About Us'
                                   description='Welcome to VirtualMeets! An interactive conference and scheduling platform'
                                   linkDestination='/about-us' linkText='Learn More'/>
            <SolidBackgroundTemplate title='Create a Meeting!'
                                     description='Chat and interact with your friends and colleagues from the comfort of your home!
                    Create a meeting now!'
                                     linkText='Create a Meeting'
                                     backgroundColor='primary'
                                     linkDestination='/home'/>
            <ImgBackgroundTemplate backgroundImage='../../public/img/join-a-room.jpg'
                                   title='Join a Meeting!'
                                   description='Received an invitation? Join a meeting and connect with your colleagues!'
                                   linkDestination='/join-meeting'
                                   linkText='Join Room'/>

            <SolidBackgroundTemplate title='Organize Your Schedule!'
                                     description='Never miss an event ever again! Organize your schedule now with our scheduler.'
                                     backgroundColor='primary'
                                     linkText='Go to Scheduler'
                                     linkDestination='/schedule'
            />
        </>
    )
}
export default Home
