import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLocationOn } from 'react-icons/lib/md';
import { getLabelSessionlMonth, getDate } from '../../../services';
import { ScrollToHorizontal } from '../../../components/Scrollable';

const Date = ({ type, date, content }) => (
    <div>
        { type ? (
            <div className="month">
                <a className={(date == '01')? 'none' : 'left'} onClick={()=> ScrollToHorizontal('left', content, '100%')}><MdKeyboardArrowLeft /></a> 
                    {getLabelSessionlMonth(date)}
                <a className={(date == '12')? 'none' : 'right'} onClick={()=> ScrollToHorizontal('right', content, '100%')}><MdKeyboardArrowRight /></a>
            </div>
        ) : (
            <div className="day">
                <p>{ getDate() }</p>
                { getLabelSessionlMonth(date) }
                <p className="location">
                    <MdLocationOn /><br />
                    Epinay-sur-seine, Ile-de-france
                </p>
            </div>
        )}
    </div>
        
);

export default Date;