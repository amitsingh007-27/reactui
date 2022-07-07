import React from "react";
import {Link} from 'react-router-dom'

function Navbar(){
    return (
       <div>
            <header>

<div> Ltech Lab </div>

<nav>

    <ul>

        <li>

            <Link to ='/'>Home</Link>
        </li>
        <li>

            <Link to ='/'>Contact</Link>
        </li>

        <li>

            <Link to ='/about'>About</Link>
        </li>

        <li>

            <Link to ='/services'> Services</Link>

        </li>

    </ul>

</nav>

</header>
       </div>
    );

};
export default Navbar  ;