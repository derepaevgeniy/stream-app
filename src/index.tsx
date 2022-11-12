import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { YMInitializer } from 'react-yandex-metrika';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <YMInitializer accounts={[91142899]} />
        <App />
    </React.StrictMode>
);

reportWebVitals();