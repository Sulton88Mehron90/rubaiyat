import React, { useState, useContext, useEffect } from 'react';
import rubaiyat from '../../data/rubaiyat';
import './Rubaiyat.css';
import { ThemeContext, lightTheme, darkTheme } from '../ThemeProvider/ThemeProvider';

const Rubaiyat = () => {
    const [selectedRubaiyat, setSelectedRubaiyat] = useState(getRandomRubaiyat());
    const { theme, toggleTheme } = useContext(ThemeContext);

    function getRandomRubaiyat() {
        const randomIndex = Math.floor(Math.random() * rubaiyat.length);
        return rubaiyat[randomIndex];
    }

    const handleButtonClick = (event) => {
        event.preventDefault();
        setSelectedRubaiyat(getRandomRubaiyat());
    };
    

    useEffect(() => {
        document.documentElement.style.setProperty('--background-color', theme.background);
        document.documentElement.style.setProperty('--text-color', theme.text);
        document.documentElement.style.setProperty('--primary-color', theme.primary);
        document.documentElement.style.setProperty('--shadow-color', theme.shadow);  
    }, [theme]);
    
    const themeIcon = theme === lightTheme ? '🌙' : '☀️';
    const themeIconClass = theme === lightTheme ? 'moon-icon' : 'sun-icon';    
        
    //     return (
    //         <div className="container">
    //             <button onClick={toggleTheme} className={`theme-toggle-button ${themeIconClass}`}>{themeIcon}</button>
    //             <h2>Wisdom of Omar Khayyam:</h2>
    //             <div className="poem">
    //                 {selectedRubaiyat.split('\n').map((line, index) => (
    //                     <p key={index}>{line}</p>
    //                 ))}
    //             </div>
    //             <button onClick={handleButtonClick} className="refresh-button">Get a New Rubaiyat</button>
    //         </div>
    //     );
    // }    

    return (
        <>
            <button onClick={toggleTheme} className={`theme-toggle-button ${themeIconClass}`}>{themeIcon}</button>
            
            <div className="container">
                <h2>Wisdom of Omar Khayyam:</h2>
                <div className="poem">
                    {selectedRubaiyat.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <button onClick={handleButtonClick} className="refresh-button">Get a New Rubaiyat</button>
            </div>
        </>
    );
}

export default Rubaiyat;
