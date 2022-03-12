import React from 'react';
import { Link } from 'react-router-dom';

function Nav({theme,changeTheme}) {
    return (
        <div className="nav">
            <span 
                onClick={changeTheme}
                style={{fontSize:"1.5em"}}
                >{ theme === "white" ? "🌒" : "☀️"}
            
            </span>

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
}

export default Nav;