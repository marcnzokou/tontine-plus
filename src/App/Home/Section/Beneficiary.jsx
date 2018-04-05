import React from 'react';
import BeneficiaryItem from '../../Members/BeneficiaryItem';

const Beneficiary = ({ members, labelSession }) => (
    <div>
        <div className="header-home-section">
            <span>Beneficiare</span>
        </div>
        <ul>
            {members.map((item, index)=> 
                <li key={index}> <BeneficiaryItem item={item} labelSession={labelSession} nb={members.length}/></li>
            )}
        </ul>
    </div>
);

export default Beneficiary;