import React from 'react';
import './Schedule.css';


export default function Schedule() {
    let schedulePic = require("../../resources/images/picOfApril.jpg");

    return (
        <div className="schedule">
            <div className="imgContainer">
                <img src={schedulePic.default} />
            </div>
            <div className="scheduleBox">
                <a>Schedule Now</a>
            </div>
        </div>
    )
}