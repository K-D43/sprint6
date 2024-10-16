import React from 'react';
import '../Layout/style_view_a.css';
import LeftNavbar from '../Layout/left_navbar';
import user from '../images/user.svg'
import logout from '../images/logout.svg'
import inventoryKPI from '../images/4.png'
import inventoryLeadTime from '../images/5.png'
import turnOverRatio from '../images/6.png'
import inventory from '../images/inventory.svg'
import shipping from '../images/shipping.svg'
import demand from '../images/demand.svg'
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

function View_a() {
    return (
        <>
            <LeftNavbar />

            <div class="main-content">

                <div class="navbar">
                    <div class="navbar-heading">Inventory Management and Supplier Performance</div>

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
                <div className='defOfHeading'>
                    <p>"Ensure stock availability and evaluate supplier reliability"</p>
                </div>

                <div class="containerForKpi">
                    <div class="box">
                        <div className='kpiCard'>
                            <img src={inventoryKPI} height='25px' alt='Current Stock Image' />
                            <h2>Current Stock Level</h2>


                        </div>
                        <div className='kpiValue'>
                            <ProgressBar duration={5000} maxPercentage={100} />
                            <p className='units'> 4,777 </p><p className='units'>units</p>

                        </div>
                    </div>
                    <div class="box">
                        <div class="box">
                            <div className='kpiCard'>
                                <img src={inventoryLeadTime} height='25px' alt='Current Stock Image' />
                                <h2>Average Supplier Lead Time</h2>


                            </div>
                            <div className='kpiValue'>
                                <ProgressBar duration={5000} maxPercentage={100} />
                                <p className='units'> 17.02 </p><p className='units'>days</p>

                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box">
                            <div className='kpiCard'>
                                <img src={turnOverRatio} height='25px' alt='Current Stock Image' />
                                <h2>Inventory Turnover Ratio</h2>


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
                        <iframe src='http://localhost:8062/' height='100%' width='100%' > </iframe>
                    </div>
                    <div class="chart-box">
                        <iframe src='http://localhost:8061/' height='100%' width='100%' > </iframe>
                    </div>
                    <div class="chart-box">
                        <iframe src='http://localhost:8063/' height='100%' width='100%' > </iframe>
                    </div>
                </div>

            </div>
        </>
    )
}

export default View_a;