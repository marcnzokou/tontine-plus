import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { MdEdit, MdDelete, MdRemoveRedEye, MdSettings } from 'react-icons/lib/md';

import { selectMember } from '../actions/member.actions';
// import { getLabelMonth } from '../services';

const ItemMemberList = ({item, refPopup, dispatch}) => (
    <div>
        <a  data-tip data-for={'tooltip-member' + item.id} data-event="click focus">
            <span className="bigramme">MN</span>
            {item.member.firstName} {item.member.lastName} <br/>
            <p>
                <span>{ (item.member.settings)? item.member.settings.general.payment: '0' } €</span>&nbsp;
                / &nbsp; { (item.member.settings) ? item.member.settings.general.payMonth : '' }
            </p>
        </a>
        <ReactTooltip className="tooltip-member" place="right" globalEventOff="click" id={'tooltip-member' + item.id} type="light" effect="solid">
            <div className="tooltip">
                <a><MdRemoveRedEye /> Visualiser</a>
                <a><MdEdit /> Modifier</a>
                <a><MdDelete /> Supprimer</a>
                <a onClick={() => { refPopup.refs.popupName.show(); dispatch(selectMember(item.id)); }}><MdSettings /> Paramètrer</a>
            </div>
        </ReactTooltip>
    </div>
);

export default connect()(ItemMemberList);