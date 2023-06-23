import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './Componets/App/App';
// import Applist from './Componets/App/Applist';
// import Filterdata from './Componets/Filltering Data/Filterdata';
// import Buttonplay from './Componets/Buttonplay/Buttonplay';
// import Button1 from './Componets/Buttonplay/Button1';
// import Datahook from './Componets/Datahook/Datahook';
// import Hookwork from './Componets/Hookwork/Hookwork.jsx';
// import Form from './Componets/Form Data/Form';
import Form1 from './Componets/Form Data/Form1';

// import "jquery"
// import "@popperjs/core/dist/umd/popper"
// import "bootstrap/dist/js/bootstrap"
// import "bootstrap/dist/css/bootstrap.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Applist/> */}
    {/* <App/>  */}
    {/* <Filterdata/>  */}
    {/* <Buttonplay/> */}
    {/* <Button1/> */}
    {/* <Datahook/> */}
    {/* <Hookwork/> */}
    {/* <Form/> */}
    <Form1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
