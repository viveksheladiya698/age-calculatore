import { useState } from 'react';
import './App.css';

function App() {

    let mili,sec,min,hour,day,mon,year;

    let [nm,setnm] = useState("");
    let [dt, setdt] = useState("");
    let [det, setdet] = useState("");

    let [tyer,settyer] = useState("");
    let [tmon,settmon] = useState("");
    let [tday,settday] = useState("");
    let [thour,setthour] = useState("");
    let [tmin,settmin] = useState("");
    let [tsec,settsec] = useState("");

    let calc = () => {

        mili=Date.parse(det)-Date.parse(dt);
        settsec(sec=mili/1000)
        settmin(min=sec/60)
        setthour(hour=min/60)
        settday(day=hour/24);
        settmon(mon=hour/730);
        settyer(year=day/365);
    }


    return (
        <div className="App">
            <h1>Age Calculator</h1>
            <div className="main">
                <div className="struct">
                    <div className="clock">
                        <div className="name">
                            <p>Enter Name</p>
                            <input type="text" placeholder="Enter Your Name" onChange={(a) => { setnm(a.target.value) }}></input>
                        </div>
                        <div className="birth">
                            <p>Date of Birth</p>
                            <input type="date" onChange={(a) => { setdt(a.target.value) }}></input>
                        </div>
                        <div className="today">
                            <p>Today Date</p>
                            <input type="date" onChange={(a) => { setdet(a.target.value) }}></input>
                        </div>
                    </div>
                </div>
                <input type="button" className="butt" value={"Calculate"} onClick={calc}></input>
            </div>



            <div className="info" id="tabl">
                <table>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" value={nm}></input></td>
                    </tr>
                    <tr>
                        <td>Year:</td>
                        <td><input type="text" value={tyer}></input></td>
                    </tr>
                    <tr>
                        <td>Month:</td>
                        <td><input type="text" value={tmon}></input></td>
                    </tr>
                    <tr>
                        <td>Days:</td>
                        <td><input type="text" value={tday}></input></td>
                    </tr>
                    <tr>
                        <td>Hours:</td>
                        <td><input type="text" value={thour}></input></td>
                    </tr>
                    <tr>
                        <td>Minuts:</td>
                        <td><input type="text" value={tmin}></input></td>
                    </tr>
                    <tr>
                        <td>Seconds:</td>
                        <td><input type="text" value={tsec}></input></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default App;
