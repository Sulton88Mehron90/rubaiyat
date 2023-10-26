import React, { createContext, useState } from 'react';

export const lightTheme = {
    background: '#ffffff',
    text: '#000000',
    primary: '#688E26',
    shadow: '#b0c4de'
};

export const darkTheme = {
    background: '#141414',
    text: '#ffffff',
    primary: '#E50914',
    shadow: '#E50914'  
};


const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(darkTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
