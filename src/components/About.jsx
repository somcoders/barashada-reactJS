import React from 'react';
import { ThemeContext } from '../index';

function About(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className={`container ${theme}`}>
                    <h4>About us {theme}</h4>
                </div>
            )}
        </ThemeContext.Consumer>
    );
}

export default About;