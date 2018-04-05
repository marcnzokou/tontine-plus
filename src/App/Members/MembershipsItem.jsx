import React from 'react';
import { MdClear } from 'react-icons/lib/md';

const MembershipItem = ({item, inc}) => (
    <div className="item-membership">
        <span className="num">{inc}</span>
        {item.member.firstName} <span className="name">{item.member.lastName}</span>
        <a><MdClear /></a>
    </div>
);

export default MembershipItem;