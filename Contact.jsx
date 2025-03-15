import React, { useState } from 'react'
import './Contact.css'
const Contact = () => {
    const [activeLink, setActiveLink] = useState('contact');

    return (
        <div className='body'>
            <nav className='navbar navbar-dark bg-primary'>
                <h1 className='head'>Portfolio</h1>
                <ul>
                    <li><a href="/home" className={activeLink === 'home' ? 'active' : ''}
                        onClick={() => setActiveLink('home')}>Home</a></li>
                    <li><a href="/about" className={activeLink === 'about' ? 'active' : ''}
                        onClick={() => setActiveLink('about')} >About</a></li>
                    <li><a href="/skill" className={activeLink === 'skill' ? 'active' : ''}
                        onClick={() => setActiveLink('skill')}>Skill</a></li>
                    <li><a href="/contact" className={activeLink === 'contact' ? 'active' : ''}
                        onClick={() => setActiveLink('contact')}>Contact</a></li>
                </ul>
            </nav>
            <div className='line'></div>

            <div className='card'>
                <div id='img'>
                    <img src='photo.jpg' className='img'></img>
                    <h1>MATHEW JOSEPHRAJ A</h1>
                    <p>FULLSTACK DEVELOPMENT</p>
                </div>
            </div>
            <div className='about'>
                <div className='about-div'>
                    <p>Email : developermathew2002@gmail.com</p>
                    <p>LinkedIn : <a href="">https://www.linkedin.com/in/mathew-josephraj-a-537047280</a></p>
                    <p>Address : 19/37,3rd floor, periyar salai,Vengamedu,Karur - TamilNadu,India</p>
                    <p>Mobile : 90877 40809</p>
                </div>

            </div>

        </div>
    )
}

export default Contact