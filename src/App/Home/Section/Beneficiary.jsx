import React from 'react';
import BeneficiaryMember from '../../../components/Members/beneficiary';

const Beneficiary = ({ members }) => (
    <div>
        <div className="header-home-section">
            <span>Beneficiare</span>
        </div>
        <ul>
            {members.map((item, index)=> 
                <li key={index}> <BeneficiaryMember item={item} nb={members.length}/></li>
            )}
        </ul>
    </div>
);

export default Beneficiary;