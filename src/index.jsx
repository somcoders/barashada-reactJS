import React,{useState,createContext} from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import {BrowserRouter} from 'react-router-dom'
import Pages from './components/Pages';
import Nav from './components/Nav';
import { ThemeContextProvider } from './context/ThemeContextProvider';

export const AuthContext = createContext();

function App() {
  
    return (
        <ThemeContextProvider>
            <AuthContext.Provider value={false}>
                <BrowserRouter>
                    <Nav />
                    <Pages />
                </BrowserRouter>
            </AuthContext.Provider>
        </ThemeContextProvider>
    ) 
}



ReactDOM.render(<App />,document.getElementById("root"))