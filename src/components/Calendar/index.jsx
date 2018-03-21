import React from 'react';
import { MdArrowDownward, MdArrowUpward } from 'react-icons/lib/md';
import './scss/styles.scss';

const Calendar = () => (
    <div className="calendar">
        <div className="section-fixed">
            <a><MdArrowDownward /> 2018 <MdArrowUpward /></a>
        </div>
    </div>
);

export default Calendar;