import React from 'react';
import { connect } from 'react-redux';
import { MdEdit, MdDelete, MdRemoveRedEye, MdSettings } from 'react-icons/lib/md';

const Nav = props => {
    const {state, item, appDOM, dispatch} = props;
    console.log(state);
    return (
        <div className="nav-tooltip">
            <a><MdRemoveRedEye /></a>
            <a><MdEdit /></a>
            <a><MdDelete /></a>
            <a onClick={
                () => {
                    appDOM.refs.refSetting.show();
                    dispatch(selectMember(item.id));
                }}>
                <MdSettings />
            </a>
        </div>
    );
};

export default connect()(Nav);