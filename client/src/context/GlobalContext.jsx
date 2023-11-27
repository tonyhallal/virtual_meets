import {createContext, useEffect, useState} from "react";


export const GlobalContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [isNavAndFooterVisible, setIsNavAndFooterVisible] = useState(false);

    const setLoggedUser = (user) => {
        setUser(user);
    }

    const setNavAndFooterVisibility = (flag) => {
        setIsNavAndFooterVisible(flag);
    }

    useEffect(() => {
        setLoggedUser(localStorage.getItem('logged_user'))
    },[])

    return (<GlobalContext.Provider value={
        {
            user,
            setLoggedUser,
            isNavAndFooterVisible,
            setNavAndFooterVisibility
        }
    }>
        {children}
    </GlobalContext.Provider>)
}