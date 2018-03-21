import React from 'react';
import ReactTooltip from 'react-tooltip';
import MemberTooltip from './Tooltip';

// const Toogle = (e) => {
//     console.log(e);
// };

const MemberItem = ({ item }) => (
    <div>
        <a  data-tip data-for="tooltip-member" data-event="click focus">
            <span className="bigramme">MN</span>
            {item.firstName} { item.lastName} <br/>
            <p>Ma cotisation : <span>300€</span> / Mois</p>
            <p>Mon mois : <span>Janvier</span></p>
        </a>
        <ReactTooltip className="tooltip-member" place="right" globalEventOff="click" id="tooltip-member" type="light" effect="solid">
            <MemberTooltip />
        </ReactTooltip>
    </div>
);

export default MemberItem;