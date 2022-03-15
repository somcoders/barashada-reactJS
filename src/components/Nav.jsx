import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../index';

function Nav() {
    const {theme,changeTheme} = useContext(ThemeContext);
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