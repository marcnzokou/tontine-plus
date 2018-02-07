/**
 * Header component
 */
import React from 'react';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/lib/md';

const Calendar = () => (
    <div className='calendar'>
        <div className='year'>
            <a><MdArrowUpward /></a>2018<a><MdArrowDownward /></a>
        </div>
        <div className='month'>
            <a>Janvier</a>
            <a className='active'>Fevrier</a>
            <a>Mars</a>
            <a>Avril</a>
            <a>Mai</a>
            <a>Juin</a>
            <a>Juillet</a>
            <a>Aout</a>
            <a>Septembre</a>
            <a>Octobre</a>
            <a>Novembre</a>
            <a>Decembre</a>
        </div>
    </div>
);

export default Calendar;