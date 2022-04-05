import React from 'react';

import Main from './layouts/Main';
import Header from './layouts/Header';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/App.css"
import "./assets/css/Variables.css"

export default function App() {
    return (
        <div className='App d-md-flex flex-row justify-content-center align-items-center mt-4'>
            <Header />
            <Main />
        </div>
    );
}