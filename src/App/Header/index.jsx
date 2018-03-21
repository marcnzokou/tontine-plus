import React from 'react';
import { MdArrowDropDown, MdNotificationsNone, MdAccountCircle } from 'react-icons/lib/md';

import Add from '../Home/Add';
import './scss/styles.scss';

const Header = () => (
  <header>
    <div className="flex">
      <div className="flex-auto">
        <ul className="left">
            <li><Add /></li>
            <li><a className="btn">Import</a></li>
            <li><a className="btn">Chartes</a></li>
        </ul>
      </div>
      <div className="flex-auto logo">tontine+</div>
      <div className="flex-auto text-right">
        <ul className="right">
            <li><a><MdNotificationsNone/></a></li>
            <li><a className="profile"><MdAccountCircle/><MdArrowDropDown/></a></li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
