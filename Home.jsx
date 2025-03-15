import React, { useState } from 'react'
import './Home.css'

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    return (
        <div className='body'>
            <nav className={isMobile ? 'mobile-view-nav' : 'navbar navbar-dark bg-primary'}>
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
                    <li><div id='mob-menu'>
                        <button className='mob-menu' onClick={() => setIsMobile(!isMobile)}>{isMobile ? <h1>X</h1> : <h1>=</h1>}

                        </button>
                    </div></li>


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

        </div >
    )
}

export default Home