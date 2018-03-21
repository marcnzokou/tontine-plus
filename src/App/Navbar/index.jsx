import React from 'react';
import './scss/styles.scss';
import { connect } from 'react-redux';
import {  MdExpandMore } from 'react-icons/lib/md';
import Members from '../../components/Members';

const Navbar = ({ memberList }) => (
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
            <Members membersList={memberList} />
        </div>
    </div>
  </nav>
);


const mapStateToProps = state => {
    return { memberList : state.members };
};


export default connect(mapStateToProps)(Navbar);
