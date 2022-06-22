import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "../src/ui/layout/app/App"
import "../src/assets/scss/estilo.css"
import 'react-loading-skeleton/dist/skeleton.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);