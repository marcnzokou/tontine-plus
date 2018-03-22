import React from 'react';
import { MdSettings, MdDateRange } from 'react-icons/lib/md';

const SettingMember = ({ member }) => (
  <div className="setting-member">
      <div className="menu">
        <p>Paramètres</p>
        <ul>
            <li><a><MdSettings /> Géneral</a></li>
            <li><a><MdDateRange /> Calendrier</a></li>
        </ul>
      </div>
      <div className="corps">
          <p>{member.firstName} { member.lastName}</p>
      </div>
  </div>
);

export default SettingMember;