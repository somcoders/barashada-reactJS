import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav({theme,changeTheme}) {
    return (
        <div className="nav">
            <span 
                onClick={changeTheme}
                style={{fontSize:"1.5em"}}
                >{ theme === "white" ? "🌒" : "☀️"}
            
            </span>

            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </div>
    );
}

export default Nav;