import React, {useContext} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CalendarContext} from "../../context/CalendarContext.jsx";
import dayjs from "dayjs";

function CalendarHeader() {
    const {monthIndex, setMonthIndex} = useContext(CalendarContext)
    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    }

    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    }

    const handleReset = () => {
        //if current month is set, add a random value less than one so that the function is triggered but no changes are made
        setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
    }
    return (
        <header className='py-5 flex items-center gap-x-8'>
            <div className='flex w-full items-center max-w-[1350px] mx-auto'>
                <div className='flex gap-x-5 items-center'>
                    <button className='mt-0 rounded' onClick={handleReset}>Today</button>
                    <FontAwesomeIcon icon='arrow-left' className='hover:cursor-pointer text-secondary mx-2'
                                     onClick={handlePrevMonth}/>
                    <FontAwesomeIcon icon='arrow-right' className='hover:cursor-pointer text-secondary mx-2'
                                     onClick={handleNextMonth}/></div>

                <h2 className='ml-6 user-select-none text-primary max-sm:text-[1.2rem]'>{dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}</h2>
            </div>

        </header>
    )
}

export default CalendarHeader
