import React,{useState,createContext} from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import {BrowserRouter} from 'react-router-dom'
import Pages from './components/Pages';
import Nav from './components/Nav';

export const ThemeContext  =   createContext()

function App() {
    const [theme,setTheme] = useState("light");
    const themeSwitcher = theme === "light" ? "dark" : "light";

    const changeTheme = () => {
        setTheme(themeSwitcher);
    }
    return (
        <ThemeContext.Provider value={{theme,changeTheme}}>
            <BrowserRouter>
                <Nav />
                <Pages />
            </BrowserRouter>
        </ThemeContext.Provider>
    ) 
}



ReactDOM.render(<App />,document.getElementById("root"))