/**
 * Home -> Memberships containers
 */
import React from 'react';

const MembershipItem = ({ item }) => (
    <a>
        <p>{item.firstName} { item.lastName}</p>
    </a>
);

export default MembershipItem;