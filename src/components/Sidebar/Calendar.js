// This component uses React Hooks. 

import React, { useState, useEffect } from 'react';

const Calendar = () => {
    const [date, setDate] = useState('');

    useEffect(() => {
        var today = new Date;
        // console.log(today.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    })

    return (
        <div className="calendar">
            <div className="date-today">June 7, 2021</div>
            <div className="days">
                <div className="weekday">
                <div className="day-letter">M</div>
                <div className="day-number">1</div>
                </div>
                <div className="weekday">
                <div className="day-letter">Tu</div>
                <div className="day-number">2</div>
                </div>
                <div className="weekday">
                <div className="day-letter">W</div>
                <div className="day-number">3</div>
                </div>
                <div className="weekday">
                <div className="day-letter">Th</div>
                <div className="day-number">4</div>
                </div>
                <div className="weekday">
                <div className="day-letter">F</div>
                <div className="day-number">5</div>
                </div>
            </div>
        </div>
    )
}

export default Calendar;