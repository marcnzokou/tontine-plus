import React from 'react';
import { connect } from 'react-redux';
import Calendar from '../../components/Calendar';
import Section from './Section';

import { MonthDatas } from '../../models/datas';
import './scss/styles.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ref:'scrollSession'
        };
    }
    render() {
        return (
            <div className="container">
                <Calendar />
                <div className="container-section">
                    <div className="section-fixed content">
                        <div className="content-section">
                            <div id="scroll-session" ref={this.state.ref}>
                                { MonthDatas.map((item, index) =>
                                    (<Section key={index} date={item.value} content={this} members={[]}/>)
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { all : state.members };
};
export default connect(mapStateToProps)(Home);
