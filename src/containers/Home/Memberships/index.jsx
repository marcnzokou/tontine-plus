/**
 * Home -> Memberships containers
 */
import React from 'react';
import { FaFrownO } from 'react-icons/lib/fa';
import { connect } from 'react-redux';
import './styles.scss';
import MembershipItem from './MembershipItem';


const Memberships = ({ listMembers }) => (
    <div className="membership">
        <div className="title">Membres <span>(0)</span></div>
        <div className="formControl search">
            <input type="text" placeholder="Rechercher un membre..." />
        </div>
        <div className="list">
            <ul>
                {listMembers.map(function(member, index){
                    return <li key={index}><MembershipItem item={member} /></li>;
                })}
            </ul>
        </div>
        
    </div>
);

const mapStateToProps = state => {
    return {
       listMembers: state.members
    };
};

export default connect(mapStateToProps)(Memberships);
