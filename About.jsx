import React, { useState } from 'react'
import './About.css'
const About = () => {
    const [activeLink, setActiveLink] = useState('about');

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
                    <h1>About</h1>
                    <p>I am MATHEW JOSEPHRAJ. I had completed my Bachelor degree in Computer Science field with 80%.
                        Well trained in FullStack Development and also I make some simple project in FullStack Development.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About