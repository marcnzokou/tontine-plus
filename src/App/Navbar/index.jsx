import React from 'react';
import './scss/styles.scss';
import { connect } from 'react-redux';
import {  MdExpandMore } from 'react-icons/lib/md';
import ListMembers from '../Members/list';

const Navbar = ({ all }) => (
  <nav>
    <div className="navbar">
        <div className="padding-7-10">
            <input type="text" className="form-control search-member" placeholder="Rechercher un membre..."/>
        </div>
        <div className="fixed">
            <div className="filter">
                <p>Membres</p>
                <a>Filter <MdExpandMore/></a>
            </div>
            <ListMembers all={all} />
        </div>
    </div>
  </nav>
);

const mapStateToProps = state => {
    return { all : state.members };
};

export default connect(mapStateToProps)(Navbar);
