import React,{Component} from 'react';
import { ThemeContext } from '../context/ThemeContextProvider';

class Contact extends Component {

    render(){
        return (
            <ThemeContext.Consumer>
                {mode => (
                    <div className={`container ${mode.theme}`}>
                        <h4>Contact us </h4>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Contact;