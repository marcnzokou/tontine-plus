/**
 * Home -> Memberships containers
 */
import React from 'react';
import './styles.scss';
import MembershipItem from './MembershipItem';

const numbers = [];
const listItems = numbers.map((number, key) =>
    <li key={key}><MembershipItem item={key}/></li>
);

const Memberships = () => (
    <div className="membership">
        <h2>Cotisations</h2>
        <div className="list-membership">
            <ul>
                {listItems}
            </ul>
        </div>
    </div>
);

export default Memberships;
