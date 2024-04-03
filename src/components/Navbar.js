import React from "react";
import { Link } from 'react-router-dom';
import CoctailLogo from '../Coctail Logo.jpg'



const  Navbar = () => {
return (

<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="nav-center container-fluid">
<Link to="/">
<img src={CoctailLogo} alt="cocktail drinks logo"
className="logo"
></img>
</Link>
<ul className="nav-links">
<li>
<Link to="/">
Home 
</Link>
</li>
<li>
<Link to="/about">
about
</Link>
</li>
</ul>
</div>

</nav>


)

}


export default Navbar;