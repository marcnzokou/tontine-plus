import React from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { MdGroupAdd, MdArrowDropDown, MdAdd, MdFormatListBulleted } from 'react-icons/lib/md';
import ReactTooltip from 'react-tooltip';
import SkyLight from 'react-skylight';

import AddMember from '../../Members/form/Add';

const Add = (props, addPopup) => {
    const { dispatch } = props;
    return (
        <div className="new">
            <a data-tip data-for="add" data-event="click focus" className="btn new"> <MdAdd/>New <MdArrowDropDown/></a>
            <ReactTooltip className="tooltip-new" place="bottom" globalEventOff="click" id="add" type="light" effect="solid">
                <ul className="add-nav">
                    <li><a onClick={() => {
                            dispatch(reset('memberForm'));
                            addPopup.show();
                        }} ><MdGroupAdd /> Membre</a></li>
                    <li><a><MdFormatListBulleted />Charte / réglement</a></li>
                </ul>
            </ReactTooltip>
            <SkyLight hideOnOverlayClicked ref={ref => addPopup = ref}>
                <AddMember />
            </SkyLight>
    </div>
    );
};

export default connect()(Add);
