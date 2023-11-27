import React, {createContext, useEffect, useMemo, useReducer, useState} from "react";
import dayjs from "dayjs";

export const CalendarContext = createContext(null);


const savedEventsReducer = (state, {type, payload}) => {
    switch (type) {
        case 'push':
            return [...state, payload]
        case 'update':
            return state.map(event => {
                return event.id === payload.id ? payload : event
            })
        case 'delete':
            return state.filter(event =>
                event.id !== payload.id
            )
        default:
            throw new Error();
    }
}

const initEvents = () => {
    const storageEvents = localStorage.getItem('savedEvents');
    return storageEvents ? JSON.parse(storageEvents) : [];
}

export const CalendarProvider = ({children}) => {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents)
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [labels, setLabels] = useState([]);
    const filteredEvents = useMemo(() => {
        return savedEvents.filter(event => labels.filter(lbl => lbl.checked).map(lbl => lbl.label).includes(event.label))
    }, [savedEvents, labels])


    useEffect(() => {
        setLabels((prevLabels) => {
            return [...new Set(savedEvents.map(event => event.label))].map(label => {
                const currentLabel = prevLabels.find(lbl => lbl.label === label)
                return {
                    label,
                    checked: currentLabel ? currentLabel.checked : true
                }
            })
        })
    }, [savedEvents])

    useEffect(() => {
        localStorage.setItem('savedEvents', JSON.stringify(savedEvents));
    }, [savedEvents])

    useEffect(() => {
        if (smallCalendarMonth !== null) {
            setMonthIndex(smallCalendarMonth);
        }
    }, [smallCalendarMonth])

    const updateLabel = (label) => {
        setLabels(labels.map(lbl => lbl.label === label.label ? label : lbl))
    }

    return (
        <CalendarContext.Provider value={
            {
                monthIndex,
                setMonthIndex,
                smallCalendarMonth,
                setSmallCalendarMonth,
                daySelected,
                setDaySelected,
                showEventModal,
                setShowEventModal,
                dispatchCalEvent,
                savedEvents,
                selectedEvent,
                setSelectedEvent,
                labels,
                setLabels,
                updateLabel,
                filteredEvents
            }
        }>
            {children}
        </CalendarContext.Provider>
    )
}
