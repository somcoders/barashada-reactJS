import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Courses from './components/Courses'
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import CourseDetail from './components/CourseDetail'

function App() {
    const [theme,setTheme] = useState("white");
    const themeSwitcher = theme === "white" ? "black" : "white";

    const changeTheme = () => {
        setTheme(themeSwitcher);
    }
    return (
        <BrowserRouter>
            <div style={{background:theme}}>
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

                <Routes>
                    <Route path='/' element={<Courses />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/course/:id' element={<CourseDetail />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                
            </div>
        </BrowserRouter>
    ) 
}



ReactDOM.render(<App />,document.getElementById("root"))