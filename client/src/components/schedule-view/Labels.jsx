import React, {useContext} from 'react'
import {CalendarContext} from "../../context/CalendarContext.jsx";

const Labels = () => {
    const {labels, updateLabel} = useContext(CalendarContext);
    return (
        <>
            <p className='text-primary font-bold mt-10'>Labels</p>
            {labels.map(({label: lbl, checked}, index) => {
                console.log(lbl);
                return (
                    <label key={index} className='flex items-center mt-3 p-2 max-lg:w-2/3 rounded text-black'
                           style={{backgroundColor: lbl}}>
                        <input type="checkbox" onChange={() => updateLabel({label: lbl, checked: !checked})} checked={checked} className='h-5 w-5 rounded cursor-pointer'
                        />
                        <span className='ml-2 text-white text-[1.2rem] capitalize'>{lbl}</span>
                    </label>
                )
            })}
        </>
    )
}
export default Labels
