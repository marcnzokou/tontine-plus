import React from 'react';
import Date from './Date';
import Beneficiary from './Beneficiary';
import Notes from './Notes';
import Memberships from './Memberships';

import './scss/styles.scss';

const HomeSection = ({ date }) => (
  <div className="HomeSection">
        <Date type="header" date={date} />
        <div className="zone-section">
            <div className="dateTime">
                <Date date={date} />
            </div>
            <div className="beneficiary">
                <Beneficiary />
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

export default HomeSection;