import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { MdEdit, MdDelete, MdRemoveRedEye, MdSettings } from 'react-icons/lib/md';
import { reset } from 'redux-form';

import { selectMember } from '../../actions/member.actions';
import { MonthDatas } from '../../models/datas';
import { getTrigrammeMonth } from '../../reducers/session.reducers';


const ItemMember = ({item, appDOM, labelSession, dispatch}) => (
    <div>
        <a  data-tip data-for={'tooltip-member' + item.id} data-event="click focus">
            <span className="bigramme">MN</span>
            <p>
                <span>{item.member.firstName}</span><br/>
                 {item.member.lastName}
                 <span className="month">{getTrigrammeMonth(item, labelSession, MonthDatas) }</span>
            </p>
        </a>
        <ReactTooltip className="tooltip-member" place="right" globalEventOff="click" id={'tooltip-member' + item.id} type="light" effect="solid">
            <div className="tooltip">
                <a><MdRemoveRedEye /> Visualiser</a>
                <a onClick={
                    () => {
                        dispatch(selectMember(item.id));
                        appDOM.refs.refAdd.show();
                        dispatch(reset('memberForm'));
                    }}>
                    <MdEdit /> Modifier</a>
                <a><MdDelete /> Supprimer</a>
                <a onClick={
                    () => {
                        appDOM.refs.refSetting.show();
                        dispatch(reset('settingForm'));
                        dispatch(selectMember(item.id));
                    }}>
                    <MdSettings /> Paramètrer
                </a>
            </div>
        </ReactTooltip>
    </div>
);

const mapStateToProps = state => ({
    labelSession: state.session.labelSession
});

export default connect(mapStateToProps)(ItemMember);