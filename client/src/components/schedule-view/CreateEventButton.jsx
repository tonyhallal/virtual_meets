import React, {useContext} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CalendarContext} from "../../context/CalendarContext.jsx";

const CreateEventButton = () => {
    const {setShowEventModal} = useContext(CalendarContext);
    return (
        <div onClick={() => setShowEventModal(true)}
             className='w-max-content border p-2 rounded-full flex items-center shadow-md hover:shadow-xl cursor-pointer text-primary user-select-none'>
            <FontAwesomeIcon icon='plus' className=''/>
            <span className='pl-3 pr-7'> Create Event</span>
        </div>
    )
}
export default CreateEventButton
