import React from 'react'
import Navbar from './Navbar'
import Contact from './ContactUs/Contact'

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <Contact />
            </div>
        </>
    )
}

export default ContactUs
