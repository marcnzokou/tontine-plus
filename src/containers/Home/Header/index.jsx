/**
 * Header component
 */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import {  MdChevronLeft, MdChevronRight } from 'react-icons/lib/md';
import './styles.scss';
import Calendar from './Calendar';

const Header = () => (
    <div className='header-section'>
        <a><MdChevronLeft /></a>
        <a data-tip data-for='calendar' data-event='click focus'><span className="bold">Février</span> 2018</a>
        <ReactTooltip id='calendar' type='light'>
            <Calendar />
        </ReactTooltip>
        <a><MdChevronRight /></a>
    </div>
);

export default Header;
