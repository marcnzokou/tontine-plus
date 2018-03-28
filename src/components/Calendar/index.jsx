import React from 'react';
import { MdDateRange } from 'react-icons/lib/md';
import './scss/styles.scss';

const Calendar = () => (
    <div className="calendar">
        <div className="section-fixed">
            <a><MdDateRange /></a>
        </div>
    </div>
);

export default Calendar;