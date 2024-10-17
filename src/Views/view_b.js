import React from 'react';
import '../Layout/style_view_b.css';
import LeftNavbar from '../Layout/left_navbar';
import user from '../images/user.svg'
import logout from '../images/logout.svg'
import home from '../images/home.svg'
import steps from '../images/steps.svg'
import goals from '../images/goals.svg'

import inventoryKPI from '../images/4.png'
import inventoryLeadTime from '../images/5.png'
import turnOverRatio from '../images/6.png'
import avgShipTime from '../images/3.png'
import shipCostPerUnit from '../images/2.png'
import modeUtiliRate from '../images/1.png'
import alerts from '../images/alerts.svg'
import settings from '../images/settings.svg'
import ms_logo from '../images/ms_logo.svg'
import inventory from '../images/inventory.svg'
import shipping from '../images/shipping.svg'
import demand from '../images/demand.svg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const ProgressBar = ({ duration, maxPercentage }) => {
    const [progress, setProgress] = useState(60);

    useEffect(() => {
        let startTime = null;

        const animateProgress = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const runtime = timestamp - startTime;
            const relativeProgress = Math.min(runtime / duration, 1); // Ensure the progress doesn't exceed 100%
            setProgress(relativeProgress * maxPercentage);

            if (relativeProgress < 1) {
                requestAnimationFrame(animateProgress);
            }
        };

        requestAnimationFrame(animateProgress);
    }, [duration, maxPercentage]);

    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
                {Math.round(progress)}%
            </div>
        </div>
    );
};

function View_b() {
    return (
        <>

            <div className="left-sidebara">
                <img src={ms_logo} alt="Logo" class="logo" />
                <nav>
                    <ul>
                        <li><Link to="/" className="sidebar-icons" /><img src={home} alt="Home Icon" width="24" height="24" /></li>
                        <li><Link to="" className="sidebar-icons" /><img src={steps} alt="Steps Icon" width="24" height="24" /></li>
                        <li><Link to="" className="sidebar-icons" /><img src={goals} alt="Goals Icon" width="24" height="24" /></li>
                        <li><Link to="" className="sidebar-icons" /><img src={alerts} alt="Alerts Icon" width="24" height="24" /></li>
                        <li><Link to="" className="sidebar-icons" /><img src={settings} alt="Settings Icon" width="24" height="24" /></li>
                    </ul>
                </nav>
            </div>

            <div class="main-content">

                <div class="navbar">
                    <div class="navbar-heading">Shipping Efficiency and Cost Optimization</div>
                    <div class="navbar-buttons">
                        {/*  First Container  */}
                        <div class="navbar-button">
                            <img src={user} alt="User Icon" width="30" height="30" /> {/* <!-- Replace with your user icon --> */}
                            <span>Hello, User</span>
                        </div>

                        {/* <!-- Second Container - Last Updated --> */}
                        <div class="navbar-button bordered-button">
                            <span>Last Updated</span>
                        </div>


                        {/* <!-- Third Container - Call Out --> */}
                        <div class="navbar-button bordered-button">
                            <span>Call Out</span>
                        </div>

                        <img src={logout} alt="Icon" class="icon-image" />
                    </div>
                </div>
                <div class="containerForKpi">
                    <div class="box">
                        <div className='kpiCard'>
                            <img src={avgShipTime} height='25px' alt='Current Stock Image' />
                            <h2>Average Shipping Time</h2>


                        </div>
                        <div className='kpiValue'>
                            <ProgressBar duration={5000} maxPercentage={100} />
                            <p className='units'> 5.18 </p><p className='units'>days</p>

                        </div>
                    </div>
                    <div class="box">
                        <div class="box">
                            <div className='kpiCard'>
                                <img src={shipCostPerUnit} height='25px' alt='Current Stock Image' />
                                <h2>Shipping Cost Per Unit</h2>


                            </div>
                            <div className='kpiValue'>
                                <ProgressBar duration={5000} maxPercentage={100} />
                                <p className='units'>$</p><p className='units'> 5.54 </p><p className='units'>days</p>

                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box">
                            <div className='kpiCard'>
                                <img src={modeUtiliRate} height='25px' alt='Current Stock Image' />
                                <h2>Mode Utilization Rate</h2>

                            </div>
                            <div className='kpiValue'>
                                <ProgressBar duration={5000} maxPercentage={100} />
                                <p className='units'> 83.53 </p><p className='units'>%</p>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="chart-container">
                    <div class="chart-box">
                        <iframe src='http://localhost:8056/' height='100%' width='100%' > </iframe>
                    </div>
                    <div class="chart-box">
                        <iframe src='http://localhost:8056/' height='100%' width='100%' > </iframe>
                    </div>
                    <div class="chart-box">
                        <iframe src='http://localhost:8056/' height='100%' width='100%' > </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default View_b;