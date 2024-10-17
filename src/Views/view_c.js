import React from 'react';
import '../Layout/style_view_c.css';
import LeftNavbar from '../Layout/left_navbar';
import user from '../images/user.svg'
import logout from '../images/logout.svg'
import reveDistribution from '../images/7.png'
import avgRevPerUnitSold from '../images/8.png'
import profitByCustDemo from '../images/9.png'
import salesRate from '../images/10.png'
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

function View_c() {
    return (
        <>
            <LeftNavbar />

            <div class="main-content">

                <div class="navbar">
                    <div class="navbar-heading">Product Demand and Profitability Analysis</div>
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
                            <img src={reveDistribution} height='25px' alt='Current Stock Image' />
                            <h2>Revenue Distribution</h2>


                        </div>
                        <div className='kpiValue'>
                            <ProgressBar duration={5000} maxPercentage={100} />
                            <p className='units'>$</p><p className='units'> 5,77,604.81 </p>

                        </div>
                    </div>
                    <div class="box">
                        <div class="box">
                            <div className='kpiCard'>
                                <img src={avgRevPerUnitSold} height='25px' alt='Current Stock Image' />
                                <h2>Average Revenue Per Unit Sold</h2>


                            </div>
                            <div className='kpiValue'>
                                <ProgressBar duration={5000} maxPercentage={100} />
                                <p className='units'>$</p><p className='units'> 12.52 </p>

                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box">
                            <div className='kpiCard'>
                                <img src={profitByCustDemo} height='25px' alt='Current Stock Image' />
                                <h2>Profitability by Customer Demographics</h2>

                            </div>
                            <div className='kpiValue'>
                                <ProgressBar duration={5000} maxPercentage={100} />
                                <p className='units'> 90.83 </p><p className='units'>%</p>

                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="box">
                            <div className='kpiCard'>
                                <img src={salesRate} height='25px' alt='Current Stock Image' />
                                <h2>Sales Rate</h2>

                            </div>
                            <div className='kpiValue'>
                                <ProgressBar duration={5000} maxPercentage={100} />
                                <p className='units'> 100 </p><p className='units'>%</p>

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

export default View_c;