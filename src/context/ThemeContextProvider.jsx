import React,{useState,createContext} from 'react'


const ThemeContext  =   createContext()

function ThemeContextProvider(props) {

    const [theme,setTheme] = useState("light");
    const themeSwitcher = theme === "light" ? "dark" : "light";

    const changeTheme = () => {
        setTheme(themeSwitcher);
    }

    return (
        <ThemeContext.Provider value={{theme,changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export {ThemeContextProvider,ThemeContext};