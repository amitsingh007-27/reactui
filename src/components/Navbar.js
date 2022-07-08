import React from "react";
import './Navbar.css';

const Navbar = () =>{
    return(
        <div>
           <nav className="main-nav">
               <div className="logo">
                   <h2>
                       <span>G</span>ym
                       <span>T</span>raining

                   </h2>
               </div>
               <div className="menu-link">
                   <ul>
                       <li>
                           <a href="#">Home</a>
                       </li>
                       <li>
                           <a href="#">Menu</a>
                       </li>
                       <li>
                           <a href="#">about</a>
                       </li>
                       <li>
                           <a href="#">services</a>
                       </li>
                       <li>
                           <a href="#">contact</a>
                       </li>
                   </ul>

               </div>
           </nav>
        </div>
    )
}
export default Navbar;