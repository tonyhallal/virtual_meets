import React from 'react'
import CreateEventButton from "./CreateEventButton.jsx";
import SmallCalendar from "./SmallCalendar.jsx";
import Labels from "./Labels.jsx";

function CalendarSidebar() {
    return (
        <aside className='border border-[var(--primary-color)] max-lg:w-full  p-5 w-64'>
            <CreateEventButton/>
            <SmallCalendar/>
            <Labels />
        </aside>
    )
}

export default CalendarSidebar
