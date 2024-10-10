import React from 'react';
import './style.css';
import LeftNavbar from './left_navbar';
import user from '../images/user.svg'
import logout from '../images/logout.svg'
import inventory from '../images/inventory.svg'
import shipping from '../images/shipping.svg'
import demand from '../images/demand.svg'

function Main_content(){
    return(
        <>
        <LeftNavbar/>
        
         <div class="main-content">
    
         <div class="navbar">
             <div class="navbar-heading">Overview</div>
             <div class="navbar-buttons">
                 {/*  First Container  */}
                 <div class="navbar-button">
                      <img src={user} alt="User Icon" width="30" height="30"/> {/* <!-- Replace with your user icon --> */}
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
          
                 <img src={logout} alt="Icon" class="icon-image"/>
             </div>
         </div>
         <div class="container-row">
             <div className="container side-margin">
                  <img src={inventory} alt="Image 1"/> {/* <!-- Replace with your image --> */}
                  <h4>Inventory Management and Supplier Performance</h4> {/* <!-- Heading below the image --> */}
             </div>
             <div class="container">
                  <img src={shipping} alt="Image 2"/> {/* <!-- Replace with your image --> */}
                  <h4>Shipping Efficiency and Cost Optimization</h4> {/* <!-- Heading below the image --> */}
             </div>
         </div>
         <div class="container-row">
             <div class="container">
                  <img src={demand} alt="Image 3"/> {/* <!-- Replace with your image --> */}
                  <h4>Product Demand and Profitability Analysis</h4> {/* <!-- Heading below the image --> */}
             </div>
         </div>
     </div>
     </>
    )
}

export default Main_content;