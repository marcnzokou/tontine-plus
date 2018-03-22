import React from 'react';
import ReactTooltip from 'react-tooltip';
import { MdEdit, MdDelete, MdRemoveRedEye, MdSettings } from 'react-icons/lib/md';
import SkyLight from 'react-skylight';

import SettingMember from '../../App/Home/Members/SettingMember';

const MemberItem = ({ item, settingMember}) => (
    <div>
        <a  data-tip data-for={'tooltip-member' + item.id} data-event="click focus">
            <span className="bigramme">MN</span>
            {item.firstName} { item.lastName} <br/>
            <p>Ma cotisation : <span>300€</span> / Mois</p>
            <p>Mon mois : <span>Janvier</span></p>
        </a>
        <ReactTooltip className="tooltip-member" place="right" globalEventOff="click" id={'tooltip-member' + item.id} type="light" effect="solid">
            <div className="tooltip">
                <a><MdRemoveRedEye /> Visualiser</a>
                <a><MdEdit /> Modifier</a>
                <a><MdDelete /> Supprimer</a>
                <a onClick={() => settingMember.show()}><MdSettings /> Paramètrer</a>
            </div>
        </ReactTooltip>

        <SkyLight hideOnOverlayClicked ref={ref => settingMember = ref}>
            <SettingMember member={item}/>
        </SkyLight>
    </div>
);

export default MemberItem;