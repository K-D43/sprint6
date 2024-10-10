import React from 'react';
import './style.css';
import home from '../images/home.svg'
import steps from '../images/steps.svg'
import goals from '../images/goals.svg'
import alerts from '../images/alerts.svg'
import settings from '../images/settings.svg'
import ms_logo from '../images/ms_logo.svg'

export default function LeftNavbar(){
    return(
        <div className="left-sidebar">
        <img src={ms_logo} alt="Logo" class="logo"/>
        <nav>
            <ul>
                <li><a href="#" className="sidebar-icons"><img src={home} alt="Home Icon" width="24" height="24"/></a></li>
                <li><a href="#" className="sidebar-icons"><img src={steps} alt="Steps Icon" width="24" height="24"/></a></li>
                <li><a href="#" className="sidebar-icons"><img src={goals} alt="Goals Icon" width="24" height="24"/></a></li>
                <li><a href="#" className="sidebar-icons"><img src={alerts} alt="Alerts Icon" width="24" height="24"/></a></li>
                <li><a href="#" className="sidebar-icons"><img src={settings} alt="Settings Icon" width="24" height="24"/></a></li>
            </ul>
        </nav>
        </div>
    )
}

