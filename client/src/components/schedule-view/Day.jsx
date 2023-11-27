import React, {useContext, useEffect, useState} from 'react'
import dayjs from "dayjs";
import {CalendarContext} from "../../context/CalendarContext.jsx";

const Day = ({day, rowIndex}) => {
    const [dayEvents, setDayEvents] = useState([])
    const {setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent} = useContext((CalendarContext))

    const getCurrentDayClass = () => {
        return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY') ? 'bg-primary text-white rounded-full w-7' : ''
    }

    useEffect(() => {
        const events = filteredEvents.filter(event => dayjs(event.day).format('DD-MM-YY') === day.format('DD-MM-YY'))
        setDayEvents(events);
    }, [filteredEvents, day])
    return (

        <div className='border border-[var(--primary-color)] flex flex-col'>
            <header className='flex flex-col items-center'>
                {rowIndex === 0 && <p className='text-sm mt-1'>
                    {day.format('ddd').toUpperCase()}
                </p>}
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format('DD')}
                </p>
            </header>
            <div className='flex-1 cursor-pointer' onClick={() => {
                setDaySelected(day);
                setShowEventModal(true);
            }}>
                {dayEvents.map((event, index) => (
                    <div key={index}
                         onClick={() => setSelectedEvent(event)}
                         className={`p-1 mr-3 text-white text-sm rounded mb-1 truncate`}
                         style={{backgroundColor: event.label}}
                    >
                        {event.title}
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Day
