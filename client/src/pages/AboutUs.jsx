import React, {useContext, useEffect} from 'react'
import {GlobalContext} from "../context/GlobalContext.jsx";
import StartMeeting from "../components/about-us-view/StartMeeting.jsx";
import AppInfo from "../components/about-us-view/AppInfo.jsx";

const AboutUs = () => {
    const {setNavAndFooterVisibility} = useContext(GlobalContext);

    useEffect(() => {
        window.scrollTo(0,0)
        setNavAndFooterVisibility(true);

        return () => setNavAndFooterVisibility(false);
    })

    return (
        <>
            <AppInfo/>
            <StartMeeting/>
        </>
    )
}
export default AboutUs
