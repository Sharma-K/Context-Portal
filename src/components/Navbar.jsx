import React from "react";
import classes from './Navbar.module.css'

const Navbar = (props) => {

 
    return (
    <nav className={classes.nav}>
        <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About Us</li>
            <li onClick={props.show}>Click to view Overlay</li>
        </ul>
    </nav>);

}
export default Navbar;