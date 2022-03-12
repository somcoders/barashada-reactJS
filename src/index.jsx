import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import {BrowserRouter} from 'react-router-dom'
import Pages from './components/Pages';
import Nav from './components/Nav';


function App() {
    const [theme,setTheme] = useState("white");
    const themeSwitcher = theme === "white" ? "black" : "white";

    const changeTheme = () => {
        setTheme(themeSwitcher);
    }
    return (
        <BrowserRouter>
            <div style={{background:theme}} className='container'>
                <Nav theme={theme} changeTheme={changeTheme}/>
                <Pages />
            </div>
        </BrowserRouter>
    ) 
}



ReactDOM.render(<App />,document.getElementById("root"))