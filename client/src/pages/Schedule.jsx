import React, {useContext, useEffect, useState} from 'react'
import Month from "../components/schedule-view/Month.jsx";
import CalendarSidebar from "../components/schedule-view/CalendarSidebar.jsx";
import CalendarHeader from "../components/schedule-view/CalendarHeader.jsx";
import {getMonth} from "../services/global-services.js";
import {CalendarContext} from "../context/CalendarContext.jsx";
import {GlobalContext} from "../context/GlobalContext.jsx";
import EventModal from "../components/schedule-view/EventModal.jsx";

const Schedule = () => {
    const {setNavAndFooterVisibility} = useContext(GlobalContext);

    useEffect(() => {
        setNavAndFooterVisibility(true);
        window.scrollTo(0,0)
        return () => setNavAndFooterVisibility(false);
    })

    const [currentMonth, setCurrentMonth] = useState(getMonth());
    const {monthIndex, showEventModal} = useContext(CalendarContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex))
    }, [monthIndex])
    return (
        <>
            {showEventModal && <EventModal/>}
            <div className='flex flex-col min-h-[90vh] common-width'>
                <CalendarHeader/>
                <div className="flex max-lg:flex-col flex-1">
                    <CalendarSidebar/>
                    <Month month={currentMonth}/>
                </div>
            </div>
        </>
    )
}
export default Schedule
