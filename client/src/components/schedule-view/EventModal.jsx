import React, {useContext, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CalendarContext} from "../../context/CalendarContext.jsx";

const EventModal = () => {
    const {
        setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent
    } = useContext(CalendarContext);

    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : '');
    const [selectedLabel, setSelectedLabel] = useState(selectedEvent ? selectedEvent.label : 'indigo');

    const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple']

    const hideModal = () => {
        setShowEventModal(false);
        setSelectedEvent(null);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now()
        }
        if (selectedEvent) {
            dispatchCalEvent({type: 'update', payload: calendarEvent})
        } else {
            dispatchCalEvent({type: 'push', payload: calendarEvent})
        }
        hideModal();
    }

    const isSubmitBtnDisabled = () => {
        return title === '';
    }
    return (
        <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center'>
            <form className='bg-white rounded-lg shadow-2xl w-1/4 max-lg:w-1/2 max-sm:w-3/4'>
                <header className='bg-secondary px-4 py-2 flex justify-between items-center'>
                    <FontAwesomeIcon icon='grip-lines' className='text-primary'/>
                    <div>
                        {selectedEvent &&
                            <FontAwesomeIcon onClick={() => {
                                dispatchCalEvent({type: 'delete', payload: selectedEvent})
                                hideModal();
                            }}
                                             icon='trash' className='mr-3 text-primary cursor-pointer hover:text-red-600'/>}
                        <FontAwesomeIcon onClick={hideModal}
                                         icon='times'
                                         className='hover:opacity-70 cursor-pointer text-primary'
                        /></div>
                </header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <FontAwesomeIcon icon='book-open-reader' className='text-primary mb-0.5'/>
                        <input type="text" name='title' placeholder='Add title' value={title}
                               onChange={(e) => setTitle(e.target.value)}
                               className='w-full border-b border-b-[var(--primary-color)] focus:outline-none font-semibold text-lg'/>
                        <FontAwesomeIcon icon='clock' className='text-primary mb-0.5' transform='grow-1'/>
                        <p className='text-sm font-semibold text-primary'>{daySelected.format('dddd, MMMM DD')}</p>
                        <FontAwesomeIcon icon='bars-staggered' className='text-primary mb-0.5'/>
                        <input type="text" name='description' placeholder='Add description' value={description}
                               onChange={(e) => setDescription(e.target.value)} required
                               className='w-full border-b border-b-[var(--primary-color)] focus:outline-none text-sm'/>
                        <FontAwesomeIcon icon='bookmark' className='text-primary mb-1.5'/>
                        <div className="flex gap-x-2">
                            {labelsClasses.map((label, index) => (
                                <div key={index}
                                     className={`w-6 h-6 p-0.5 text-white rounded-full flex items-center justify-center cursor-pointer`}
                                     style={{backgroundColor: label}}
                                     onClick={() => setSelectedLabel(label)}
                                >
                                    {selectedLabel === label && <FontAwesomeIcon icon='check'/>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <footer className='flex justify-end border-t p-3 mt-5'>
                    <button disabled={isSubmitBtnDisabled()} className=' bg-primary mt-0 w-1/3 py-2 cursor-pointer rounded' onClick={handleSubmit}>Save</button>
                </footer>
            </form>
        </div>
    )
}
export default EventModal
