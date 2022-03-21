import React,{useState,createContext,useEffect} from 'react'


const ThemeContext  =   createContext()

function ThemeContextProvider(props) {

    const [theme,setTheme] = useState("light");
    const themeSwitcher = theme === "light" ? "dark" : "light";

    const changeTheme = () => {
        localStorage.setItem("theme",themeSwitcher);
        setTheme(themeSwitcher);
    }

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
            localTheme && setTheme(localTheme);
    },[])

    return (
        <ThemeContext.Provider value={{theme,changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export {ThemeContextProvider,ThemeContext};