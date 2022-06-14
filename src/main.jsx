import React from 'react'

import ReactDOM from 'react-dom/client';
import { FirtsApp } from './FirtsApp';
import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    < React.StrictMode >
        {/* <HelloWorldApp /> */}
        <FirtsApp title="Hola, Soy goku" subtitle={45} />
    </React.StrictMode >
);