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
        <div className="content">
            <div className="title">Membres (5)</div>
            <div className="formControl">
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
    </div>
);

const mapStateToProps = state => {
    return {
       listMembers: state.members
    };
};

export default connect(mapStateToProps)(Memberships);
