import React from 'react';
import '@/assets/css/app.css';
import '@/assets/css/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import App from './App';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
