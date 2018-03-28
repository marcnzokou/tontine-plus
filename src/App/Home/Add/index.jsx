import React from 'react';
import { MdGroupAdd, MdArrowDropDown, MdAdd, MdFormatListBulleted } from 'react-icons/lib/md';
import ReactTooltip from 'react-tooltip';
import SkyLight from 'react-skylight';

import AddMember from '../../Members/form/Add';

const Add = ({ addPopup }) => (
    <div className="new">
        <a data-tip data-for="add" data-event="click focus" className="btn new"> <MdAdd/>New <MdArrowDropDown/></a>
        <ReactTooltip className="tooltip-new" place="bottom" globalEventOff="click" id="add" type="light" effect="solid">
            <ul className="add-nav">
                <li><a onClick={() => addPopup.show()} ><MdGroupAdd /> Membre</a></li>
                <li><a><MdFormatListBulleted />Charte / réglement</a></li>
            </ul>
        </ReactTooltip>
        <SkyLight hideOnOverlayClicked ref={ref => addPopup = ref}>
            <AddMember />
        </SkyLight>
  </div>
);

export default Add;
