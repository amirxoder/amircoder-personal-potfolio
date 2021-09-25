import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import GlobalStyled from './Styles/GlobalStyles';



ReactDOM.render(
    <>
        <GlobalStyled />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>,
    document.getElementById('root')
)