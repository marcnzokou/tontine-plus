/**
 * Navbar component
 */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import { MdHome, MdMoneyOff, MdGroup, MdAssignment, MdSettings, MdAdd } from 'react-icons/lib/md';
import Add from './Add';
import './styles.scss';

const Navbar = () => (
    <nav>
        <div className='header'>
            <span>Tontine</span><span className="plus"> Plus</span>
        </div>
        <ul>
            <li>
                <a><MdHome />Home</a>
            </li>
            <li>
                <a><MdMoneyOff />Béneficiares</a>
            </li>
            <li>
                <a><MdGroup />Membres</a>
            </li>
            <li>
                <a><MdAssignment />Charte</a>
            </li>
        </ul>
        <div className='footer'>
            <a ><MdSettings /></a>
            <a data-tip data-for='add' data-event='click focus' className="f-right"><MdAdd /></a>
            <ReactTooltip id='add' globalEventOff='click' type='light'>
                <Add />
            </ReactTooltip>
        </div>
    </nav>
);

export default Navbar;
