import React from 'react';
import './style.css';
import home from '../images/home.svg'
import steps from '../images/steps.svg'
import goals from '../images/goals.svg'
import alerts from '../images/alerts.svg'
import settings from '../images/settings.svg'
import ms_logo from '../images/ms_logo.svg'
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LeftNavbar() {
    return (
        <>
            <div className="left-sidebar">
                <img src={ms_logo} alt="Logo" class="logo" />
                <nav>
                    <ul>
                        <li><Link to="/" className="sidebar-icons"/><img src={home} alt="Home Icon" width="24" height="24"/></li>
                        <li><Link to="" className="sidebar-icons"/><img src={steps} alt="Steps Icon" width="24" height="24" /></li>
                        <li><Link to="" className="sidebar-icons"/><img src={goals} alt="Goals Icon" width="24" height="24" /></li>
                        <li><Link to="" className="sidebar-icons"/><img src={alerts} alt="Alerts Icon" width="24" height="24" /></li>
                        <li><Link to="" className="sidebar-icons"/><img src={settings} alt="Settings Icon" width="24" height="24" /></li>
                    </ul>
                </nav>
            </div>
        </>

    )
}

