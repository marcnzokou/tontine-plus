/**
 * Navbar component
 */
import React from 'react';
import { MdHome, MdMoneyOff, MdGroup, MdAssignment, MdSettings, MdAdd, MdSearch, MdPerson } from 'react-icons/lib/md';
import SkyLight from 'react-skylight';
import Popup from 'react-tooltip';
import Add from '../Add';
import Profile from '../Profile';
import './styles.scss';
import styles from './skylight/styles';


class Navbar extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        return (
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
                    <a onClick={() => this.addDialog.show()} className="f-right"><MdAdd /></a>
                    <SkyLight
                        dialogStyles={styles.dialogStyles}
                        overlayStyles={styles.overlayStyles}
                        closeButtonStyle={styles.closeButtonStyle}
                        ref={ref => this.addDialog = ref}>
                        <Add />
                    </SkyLight>
                </li>
                <li>
                    <a onClick={() => this.profileDialog.show()} ><MdPerson /></a>
                    <SkyLight
                        dialogStyles={styles.dialogStyles}
                        overlayStyles={styles.overlayStyles}
                        closeButtonStyle={styles.closeButtonStyle}
                        ref={ref => this.profileDialog = ref}>
                        <Profile />
                    </SkyLight>
                </li>
                <li>
                    <a><MdSettings /></a>
                </li>
            </ul>
        </nav>
      );
    }
}

// Navbar.displayName = 'Navbar';

export default Navbar;
