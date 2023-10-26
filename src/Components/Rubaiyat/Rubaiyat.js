import React, { useState } from 'react';
import rubaiyat from '../../data/rubaiyat';
import './Rubaiyat.css';

const Rubaiyat = () => {
    const [selectedRubaiyat, setSelectedRubaiyat] = useState(getRandomRubaiyat());

    function getRandomRubaiyat() {
        const randomIndex = Math.floor(Math.random() * rubaiyat.length);
        return rubaiyat[randomIndex];
    }

    const handleButtonClick = () => {
        setSelectedRubaiyat(getRandomRubaiyat());
    }

    return (
        <div className="container">
            <h2>Wisdom of Omar Khayyam:</h2>
            <div className="poem">
                {selectedRubaiyat.split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <button onClick={handleButtonClick} className="refresh-button">Get a New Rubaiyat</button>
        </div>
    );
}

export default Rubaiyat;
