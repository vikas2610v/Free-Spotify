import React from 'react'
import { Link } from 'react-router-dom';
import { FaSpotify } from "react-icons/fa";
import './App.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <FaSpotify size={45} color='white'/>
             <ul className="nav-links">
                <li><Link to='home'>Home</Link></li>
                <li><Link to='about'>About</Link></li>
                <li><Link to='joke'>Joke</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar