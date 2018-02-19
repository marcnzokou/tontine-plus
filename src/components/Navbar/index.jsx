/**
 * Navbar component
 */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { MdHome, MdMoneyOff, MdGroup, MdAssignment, MdSettings, MdAdd, MdSearch, MdPerson } from 'react-icons/lib/md';
import Add from './Add';
import './styles.scss';

const Navbar = () => (
    <nav>
        <ul className="top">
            <li>
                <a><MdHome /></a>
            </li>
            <li>
                <a><MdSearch /></a>
            </li>
            <li>
                <a><MdMoneyOff /></a>
            </li>
            <li>
                <a><MdGroup /></a>
            </li>
            <li>
                <a><MdAssignment /></a>
            </li>
        </ul>
        <ul className="bottom">
            <li>
                <a data-tip data-for='add' data-event='click focus' className="f-right"><MdAdd /></a>
                <ReactTooltip id='add' type='light'>
                    <Add />
                </ReactTooltip>
            </li>
            <li>
                <a><MdPerson /></a>
            </li>
            <li>
                <a><MdSettings /></a>
            </li>
           
        </ul>
       
    </nav>
);

export default Navbar;
