/**
 * Navbar component
 */
import React from 'react';
import { MdHome, MdMoneyOff, MdGroup, MdAssignment, MdSettings, MdAdd } from 'react-icons/lib/md';
import './styles.scss';

const Navbar = () => (
    <nav>
        <div className='header'>
            <span>Tontine</span><span className="plus">+</span>
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
            <a><MdSettings /></a>
            <a className="f-right"><MdAdd /></a>
        </div>
    </nav>
);

export default Navbar;
