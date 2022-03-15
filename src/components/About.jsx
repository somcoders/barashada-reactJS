import React,{useContext} from 'react';
import { ThemeContext } from '../index';

function About() {
    const {theme} = useContext(ThemeContext);

    return (

        <div className={`container ${theme}`}>
            <h4>About us {theme}</h4>
        </div>
    );
}

export default About;