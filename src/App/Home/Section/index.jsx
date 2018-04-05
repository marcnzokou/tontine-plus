import React from 'react';
import Date from './Date';
import Beneficiary from './Beneficiary';
import Notes from './Notes';
import Memberships from './Memberships';

import './scss/styles.scss';

const Section = ({ date, labelSession, members }) => (
  <div className="HomeSection">
        <Date type="header" date={date} />
        <div className="zone-section">
            <div className="dateTime">
                <Date type={null} date={date} />
            </div>
            <div className="beneficiary">
                <Beneficiary members={members} labelSession={labelSession}/>
            </div>
            <div className="note">
               <Notes />
            </div>
            <div className="memberShip">
                <Memberships date={date} labelSession={labelSession}/>
            </div>
        </div>
  </div>
);

export default Section;