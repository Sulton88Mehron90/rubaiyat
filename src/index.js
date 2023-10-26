import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '../src/Components/ThemeProvider/ThemeProvider'

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
