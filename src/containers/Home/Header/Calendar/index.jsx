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
            <a>Janv.</a>
            <a className='active'>Fév.</a>
            <a>Mars</a>
            <a>Avr.</a>
            <a>Mai</a>
            <a>Jui</a>
            <a>Juill.</a>
            <a>Août</a>
            <a>Sept.</a>
            <a>Oct.</a>
            <a>Nov.</a>
            <a>Dec.</a>
        </div>
    </div>
);

export default Calendar;