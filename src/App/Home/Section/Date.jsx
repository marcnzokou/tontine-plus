import React from 'react';
import { connect } from 'react-redux';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLocationOn } from 'react-icons/lib/md';
import { getLabelMonth } from '../../../reducers/session.reducers';
import { ScrollToHorizontal } from '../../../components/Scrollable';

const Date = ({ type, date, session }) => (
    <div>
        { type ? (
            <div className="month">
                <a className={(date == '01')? 'none' : 'left'} onClick={()=> ScrollToHorizontal('left', '100%')}><MdKeyboardArrowLeft /></a> 
                    {getLabelMonth(date)}
                <a className={(date == '12')? 'none' : 'right'} onClick={()=> ScrollToHorizontal('right', '100%')}><MdKeyboardArrowRight /></a>
            </div>
        ) : (
            <div className="day">
                <p>{session.currentDay}</p>
                { getLabelMonth(date) } {session.currentSession}
                <p className="location">
                    <MdLocationOn /><br />
                    Epinay-sur-seine, Ile-de-france
                </p>
            </div>
        )}
    </div>
        
);

const mapStateToProps = state =>({
    session: state.session
});

export default connect(mapStateToProps)(Date);