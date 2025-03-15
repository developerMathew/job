import React, { useState } from 'react'
import './Skill.css'
const Skill = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeLink, setActiveLink] = useState('skill');
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
            <div className='skill'>
                <div className='skill-card'>
                    <ul>
                        <div className='div1'>
                            <li>Front-End</li>
                            <li>GitHub</li>
                            <li>MongoDB</li>
                            <li>MySql</li>
                            <li>Artificial Intelligence</li>
                            <li>Machine Learning</li>
                            <li>React JS</li>
                        </div>
                        <div className='div2'>
                            <li>MS-Excel</li>
                            <li>Node JS</li>
                            <li>Express JS</li>
                            <li>Behance</li>
                            <li>Android Studio</li>
                            <li>Flutter UI</li>
                            <li>Python</li>
                        </div>
                    </ul>
                </div>
            </div>

        </div >
    )
}

export default Skill