import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import MembershipsItem from '../../Members/MembershipsItem';

let datas = [];

const getNameOfMemberships = (members, datas) => {
    var tab = datas.map((item) => {
        var filter = members.filter((value) => value.id === item.id );
        return {
            id: item.id,
            ...filter[0]
        };

    });
    return tab;
};


const Memberships = props => {
    const { labelSession, date, memberships, members } = props;
    const month = 'M_'+date;
    if(!_.isEmpty(memberships) && 
        !_.isEmpty(memberships[labelSession]) &&
        !_.isEmpty(memberships[labelSession][month])
    ) {
        datas = getNameOfMemberships(members, memberships[labelSession][month]);
    }

    return (
        <div>
            <div className="header-home-section">
                <span>Cotisations</span>
            </div>
            <div className="content-memberships">
                <ul>
                    { datas.map((item, index) =>(
                        <li key={index}>
                            <MembershipsItem item={item} inc={index+1}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const mapStateToProps = state => ({
    memberships: state.memberships,
    members: state.members
});

export default connect(mapStateToProps)(Memberships);