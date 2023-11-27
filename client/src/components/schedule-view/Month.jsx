import React, {Fragment} from 'react'
import Day from "./Day.jsx";

function Month({month}) {
    return (
        <div className='flex-1 grid grid-cols-7 grid-rows-5 user-select-none'>
            {
                month.map((row, index) => (
                    <Fragment key={index}>
                        {row.map((day, idx) => (
                            <Day day={day} key={idx} rowIndex={index}/>
                        ))}
                    </Fragment>
                ))
            }
        </div>
    )
}

export default Month
