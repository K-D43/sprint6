import React from 'react';
import '../Layout/style.css';
import LeftNavbar from '../Layout/left_navbar';
import user from '../images/user.svg'
import logout from '../images/logout.svg'
import home from '../images/home.svg'
import steps from '../images/steps.svg'
import goals from '../images/goals.svg'
import alerts from '../images/alerts.svg'
import settings from '../images/settings.svg'
import ms_logo from '../images/ms_logo.svg'
import inventory from '../images/inventory.svg'
import shipping from '../images/shipping.svg'
import demand from '../images/demand.svg'
import { Link } from 'react-router-dom';

function View_b() {
    return (
        <>
            
            <div className="left-sidebara">
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
                    <div class="chart-box">Chart 1</div>
                    <div class="chart-box">Chart 2</div>
                    <div class="chart-box">Chart 3</div>
                    <div class="chart-box">Chart 4</div>
                </div>
            </div>
        </>
    )
}

export default View_b;