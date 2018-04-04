import React from 'react';
import { connect } from 'react-redux';
import { MdDateRange } from 'react-icons/lib/md';
import  GoTriangleLeft from 'react-icons/lib/go/triangle-left';
import { MonthDatas } from '../../models/datas';
import './scss/styles.scss';
import { ScrollToNav } from '../Scrollable';
import { selectMonth } from '../../actions/session.actions';


const Calendar = ({ content, session, dispatch }) => (
    <div className="calendar">
        <div className="section-fixed">
            <div className="tooltip-calendar">
                <div className="inline-block">
                    <MdDateRange />
                </div>
                <div className="inline-block month">
                    <GoTriangleLeft />
                    <ul>
                    {MonthDatas.map((item, index) =>(
                            <li key={index}>
                                <a className={
                                    (session.selectedMonth == item.value)
                                    ? 'active' : ''
                                }
                                onClick={()=> {
                                    dispatch(selectMonth(item.value));
                                    ScrollToNav(item.value, content);
                                }}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({
    session: state.session
});

export default connect(mapStateToProps)(Calendar);
