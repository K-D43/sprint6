import React from 'react';
import './style.css';
import LeftNavbar from './left_navbar';
import user from '../images/user.svg'
import logout from '../images/logout.svg'
import inventory from '../images/inventory.svg'
import shipping from '../images/shipping.svg'
import demand from '../images/demand.svg'
import { useNavigate,Link } from 'react-router-dom';
import View_a from '../Views/view_a';
import View_b from '../Views/view_b';
import View_c from '../Views/view_c';

function Main_content() {

    



    return (
        <>
            <LeftNavbar />

            <div class="main-contentMain">

                <div class="navbar">
                    <div class="navbar-heading">Overview</div>
                    <div class="navbar-buttons">
                        {/*  First Container  */}
                        <div class="navbar-button">
                            <img src={user} alt="User Icon" width="30" height="30" /> {/* <!-- Replace with your user icon --> */}
                            <span>Hello, User</span>
                        </div>

                        {/* <!-- Second Container - Last Updated --> */}
                        <div class="navbar-button bordered-button">
                        <div>
                                <p>Last Updated</p>
                                <p class='lastUpdate'>10/18/2024, 15:50:00</p>
                            </div>
                        </div>

                        {/* <!-- Third Container - Call Out --> */}
                        <div class="navbar-button bordered-button">
                            <span>Call Out</span>
                        </div>

                        <img src={logout} alt="Icon" class="icon-image" />
                    </div>
                </div>
                <div>
                    <h1 className='welcomeHeading'>
                        Hello User! Welcome to your Supply Chain Dashboard!
                        
                    </h1>
                    <p className='welcomeSubHeading'>Explore key metrics driving supply chain efficiency, inventory management and profitability. Click on each view for in-depth insights and analysis.</p>
                </div>
                        
                <div class="container-row">
                    
                        
                    

                    <div className="container side-margin" style={{ cursor: 'pointer' }}>
                    <Link to="/view_a">
                        <img src={inventory} alt="Image 1" /> {/* <!-- Replace with your image --> */}
                        <h4>Inventory Management and Supplier Performance</h4> {/* <!-- Heading below the image --> */}
                    </Link>
                    </div>
                    
                    <div class="container" style={{ cursor: 'pointer' }}>
                    <Link to="/view_b">
                        <img src={shipping} alt="Image 2" /> {/* <!-- Replace with your image --> */}
                        <h4>Shipping Efficiency and Cost Optimization</h4> {/* <!-- Heading below the image --> */}
                    </Link>
                    </div>
                </div>
                <div class="container-row">
                    <div class="container" style={{ cursor: 'pointer' }}>
                    <Link to="/view_c">
                        <img src={demand} alt="Image 3" /> {/* <!-- Replace with your image --> */}
                        <h4>Product Demand and Profitability Analysis</h4> {/* <!-- Heading below the image --> */}
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main_content;