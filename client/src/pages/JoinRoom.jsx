import React, {useContext, useEffect} from 'react'
import {GlobalContext} from "../context/GlobalContext.jsx";
import JoinMeeting from "../components/join-room-view/JoinMeeting.jsx";

const JoinRoom = () => {
    const {setNavAndFooterVisibility} = useContext(GlobalContext);

    useEffect(() => {
        window.scrollTo(0,0)
        setNavAndFooterVisibility(true);

        return () => setNavAndFooterVisibility(false);
    })

    return (

<JoinMeeting/>

    )
}
export default JoinRoom
