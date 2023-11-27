import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/main.css'
import {BrowserRouter} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faArrowLeft,
    faArrowRight,
    faBars, faCalendarDays, faClock, faGripLines,
    faHouse, faPlus,
    fas,
    faTimes,
    faUserCircle,
    faVideo
} from "@fortawesome/free-solid-svg-icons";
import {UserProvider} from "./context/GlobalContext.jsx";
import {CalendarProvider} from "./context/CalendarContext.jsx";

library.add(fas, faUserCircle,faArrowRight,faArrowLeft,faHouse,faVideo,faBars,faTimes,faCalendarDays, faPlus,faGripLines,faClock)

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserProvider>
        <CalendarProvider>
            <React.StrictMode>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </React.StrictMode>
        </CalendarProvider>
    </UserProvider>,
)
