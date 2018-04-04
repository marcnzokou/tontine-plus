import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../../components/Calendar';
import Section from './Section';

import { getMemberOfMonth } from '../../reducers/member.reducers';

import { MonthDatas } from '../../models/datas';
import { ScrollToNav } from '../../components/Scrollable';
import './scss/styles.scss';

const Home = props => {
    const { session, all } = props;
    return (
        <div className="container">
            <Calendar content={this}/>
            <div className="container-section">
                <div className="section-fixed content">
                    <div className="content-section">
                        <div style={ScrollToNav(session.selectedMonth)} id="scroll-session">
                            { MonthDatas.map((item, index) =>
                                (<Section 
                                    key={index}
                                    date={item.value}
                                    labelSession={session.labelSession}
                                    members={getMemberOfMonth(item, session.labelSession, all)}/>)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => ({
     all : state.members,
     session: state.session
});
export default connect(mapStateToProps)(Home);
