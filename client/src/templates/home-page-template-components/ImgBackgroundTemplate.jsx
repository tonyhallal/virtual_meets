import React from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ImgBackgroundTemplate = ({backgroundImage, title, description, linkText, linkDestination}) => {
    const backgroundImgStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover'
    }
    return (
        <section className='common-width constraint-width spacing-between-sections flex flex-col items-center gap-y-10 px-6 py-4 rounded-2xl'
                 style={backgroundImgStyle}>
            <h2 className='text-white'>{title}</h2>
            <p className='text-white w-full md:text-center'>
                {description}
            </p>
            <Link to={linkDestination} className='home-page-link'>
                {linkText} <FontAwesomeIcon icon='arrow-right' className='ml-0.5'/>
            </Link>
        </section>
    )
}
export default ImgBackgroundTemplate
