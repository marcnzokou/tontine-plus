import React from 'react';
import './scss/styles.scss';
import {  MdExpandMore } from 'react-icons/lib/md';
import ListMembers from '../Members/List';

const Navbar = ({appDOM, members}) => (
    <nav>
        <div className="navbar">
            <div className="formControl padding-7-10">
                <input type="text" className=" search-member" placeholder="Rechercher un membre..."/>
            </div>
            <div className="fixed">
                <div className="filter">
                    <p>Membres</p>
                    <a>Filter <MdExpandMore/></a>
                </div>
                <ListMembers members={members} appDOM={appDOM}/>
            </div>
        </div>
    </nav>
);

export default Navbar;
