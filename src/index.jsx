import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Courses from './components/Courses'

function App() {
    const [theme,setTheme] = useState("white");
    const themeSwitcher = theme == "white" ? "black" : "white";

    const changeTheme = () => {
        setTheme(themeSwitcher);
    }
    return (
        <div style={{background:theme}}>
            <span 
                onClick={changeTheme}
                style={{fontSize:"1.5em"}}
                >{ theme == "white" ? "🌒" : "☀️"}
              
             </span>
            <Courses theme={theme}/>
        </div>
    ) 
}



ReactDOM.render(<App />,document.getElementById("root"))