import React from 'react'

import ReactDOM from 'react-dom/client';
// import { CounterApp } from './CounterApp';
import { FirtsApp } from './FirtsApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    < React.StrictMode >
        {/* <HelloWorldApp /> */}
        {/* <FirtsApp title='Hola mundo en titulo' /> */}
        <CounterApp value={0}/>
    </React.StrictMode >
);