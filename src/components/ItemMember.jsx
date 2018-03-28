import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { MdEdit, MdDelete, MdRemoveRedEye, MdSettings } from 'react-icons/lib/md';

import { selectMember } from '../actions/member.actions';
// import { getLabelMonth } from '../services';

const ItemMemberList = ({item, appDOM, dispatch}) => (
    <div>
        <a  data-tip data-for={'tooltip-member' + item.id} data-event="click focus">
            <span className="bigramme">MN</span>
            <p>
                <span>{item.member.firstName}</span><br/>
                 {item.member.lastName}
                 <span className="month">Jan.</span>
            </p>
        </a>
        <ReactTooltip className="tooltip-member" place="right" globalEventOff="click" id={'tooltip-member' + item.id} type="light" effect="solid">
            <div className="tooltip">
                <a><MdRemoveRedEye /> Visualiser</a>
                <a><MdEdit /> Modifier</a>
                <a><MdDelete /> Supprimer</a>
                <a onClick={
                    () => {
                        appDOM.refs.refSetting.show();
                        dispatch(selectMember(item.id));
                    }}>
                    <MdSettings /> Paramètrer
                </a>
            </div>
        </ReactTooltip>
    </div>
);

export default connect()(ItemMemberList);