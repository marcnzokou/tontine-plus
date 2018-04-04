import React from 'react';
import BeneficiaryMember from '../../Members/BeneficiaryMember';

const Beneficiary = ({ members, labelSession }) => (
    <div>
        <div className="header-home-section">
            <span>Beneficiare</span>
        </div>
        <ul>
            {members.map((item, index)=> 
                <li key={index}> <BeneficiaryMember item={item} labelSession={labelSession} nb={members.length}/></li>
            )}
        </ul>
    </div>
);

export default Beneficiary;