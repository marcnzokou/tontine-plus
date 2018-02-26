/**
 * Home -> Memberships containers
 */
import React from 'react';
import { FaFrownO } from 'react-icons/lib/fa';
import { connect } from 'react-redux';
import './styles.scss';
import MembershipItem from './MembershipItem';


const Memberships = ({ members }) => (
    <div className="membership">
        <div className="title">Membres <span>({members.count})</span></div>
        <div className="formControl search">
            <input type="text" placeholder="Rechercher un membre..." />
        </div>
        <div className="list">
            <ul>
                {members.datas.map(function(member, index){
                    return <li key={index}><MembershipItem item={member} /></li>;
                })}
            </ul>
        </div>

    </div>
);

const mapStateToProps = state => {
    return {
        members: state.members
    };
};

export default connect(mapStateToProps)(Memberships);
