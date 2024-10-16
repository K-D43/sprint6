import React from 'react';
import '../Layout/style.css';
import LeftNavbar from '../Layout/left_navbar';
import user from '../images/user.svg'
import logout from '../images/logout.svg'
import inventory from '../images/inventory.svg'
import shipping from '../images/shipping.svg'
import demand from '../images/demand.svg'

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

export default View_c;