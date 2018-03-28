import React from 'react';
import Date from './Date';
import Beneficiary from './Beneficiary';
import Notes from './Notes';
import Memberships from './Memberships';

import './scss/styles.scss';

const Section = ({ date, content, members }) => (
  <div className="HomeSection">
        <Date type="header" date={date} content={content}/>
        <div className="zone-section">
            <div className="dateTime">
                <Date type={null} date={date} content={null}/>
            </div>
            <div className="beneficiary">
                <Beneficiary members={members}/>
            </div>
            <div className="note">
               <Notes />
            </div>
            <div className="memberShip">
                <Memberships />
            </div>
        </div>
  </div>
);

export default Section;