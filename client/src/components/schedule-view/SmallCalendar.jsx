import React, {Fragment, useContext, useEffect, useState} from 'react'
import dayjs from "dayjs";
import {getMonth} from "../../services/global-services.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CalendarContext} from "../../context/CalendarContext.jsx";

const SmallCalendar = () => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIndex))
    }, [currentMonthIndex])

    const {monthIndex, setSmallCalendarMonth, setDaySelected, daySelected} = useContext(CalendarContext)

    useEffect(() => {
        setCurrentMonthIndex(monthIndex)
    }, [monthIndex])
    const handlePrevMonth = () => {
        setCurrentMonthIndex(currentMonthIndex - 1)
    }
    const handleNextMonth = () => {
        setCurrentMonthIndex(currentMonthIndex + 1)
    }

    const getDayClass = (day) => {
        const format = 'DD-MM-YY';
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format);

        if (nowDay === currDay) {
            return 'bg-primary rounded-full text-white'
        } else if (currDay === slcDay) {
            return 'bg-secondary rounded-full'
        }
        return ''
    }

    return (
        <div className='mt-9'>
            <header className='flex justify-between max-lg:px-9 items-center'>
                <p className='text-primary font-bold text-[.9rem] user-select-none'>
                    {dayjs(new Date(dayjs().year(), currentMonthIndex)).format('MMMM YYYY')}
                </p>
                <div><FontAwesomeIcon icon='arrow-left' className='mx-2 text-secondary hover:cursor-pointer'
                                      onClick={handlePrevMonth}/>
                    <FontAwesomeIcon icon='arrow-right' className='mx-2 text-secondary hover:cursor-pointer'
                                     onClick={handleNextMonth}/></div>
            </header>

            <div className='grid grid-cols-7 grid-rows-6'>
                {currentMonth[0].map((day, i) => (
                    <span key={i} className='user-select-none text-sm py-1 text-center font-bold text-primary'>
                       {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, i) => (
                    <Fragment key={i}>
                        {row.map((day, i) => (
                            <span
                                key={i}
                                onClick={() => {
                                    setSmallCalendarMonth(currentMonthIndex)
                                    setDaySelected(day);
                                }}
                                className={`user-select-none py-1 w-full text-sm text-center ${getDayClass(day)} cursor-pointer`}>
                                {day.format('D')}
                            </span>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}
export default SmallCalendar
