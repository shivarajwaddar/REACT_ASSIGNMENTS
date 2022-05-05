import React from 'react';
import ReactDOM from 'react-Dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


const employee = {
    name: "Alan Ford",
    id: "00005152",
    appointmenton: 1348896220039,
    email: "alan.forn@gmail.nl",
    phone: "+48875848844",
    status: "Inprogress",
    door: "mark",
    time: 1643896220039,
    image: "https://www.w3schools.com/howto/img_avatar.png",
    role: "Boltaart Bosbessen",
    summary: "something diffrent"
};

ReactDOM.render(
    <React.StrictMode>
        <App employee={employee} />
    </React.StrictMode>,
    document.getElementById('root')
);