import React from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SolidBackgroundTemplate = ({title, description, linkText, backgroundColor, linkDestination}) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    return (
        <section className={`bg-${backgroundColor} spacing-between-sections`}>
            <section
                className=' common-width w-full md:w-2/3 rounded-lg flex flex-col items-center justify-center gap-y-10 py-4 px-6'
            >
                <h2 className='text-white'>{title}</h2>
                <p className='text-white w-full text-center'>
                    {description}
                </p>
                <Link to={linkDestination} onClick={scrollToTop} className='home-page-link'>
                    {linkText} <FontAwesomeIcon icon='arrow-right' className='ml-0.5'/>
                </Link>

            </section>
        </section>
    )
}
export default SolidBackgroundTemplate
