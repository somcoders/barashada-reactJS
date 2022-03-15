import React,{useState,createContext} from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import {BrowserRouter} from 'react-router-dom'
import Pages from './components/Pages';
import Nav from './components/Nav';
import { ThemeContextProvider } from './context/ThemeContextProvider';

function App() {
  
    return (
        <ThemeContextProvider>
            <BrowserRouter>
                <Nav />
                <Pages />
            </BrowserRouter>
        </ThemeContextProvider>
    ) 
}



ReactDOM.render(<App />,document.getElementById("root"))