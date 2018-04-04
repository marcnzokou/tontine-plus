import React from 'react'; 
import { MdMood, MdClear, MdRemoveRedEye } from 'react-icons/lib/md';

const BeneficiaryMember = ({item, labelSession, nb}) => (
    <div className={'user-money '+'padding-'+nb}>
        <div className="btn-beneficiary">
            <a><MdRemoveRedEye /></a>
            <a><MdClear /></a>
        </div>
        <div className="user">
            <MdMood />
            <p className="name">{item.member.firstName} {item.member.lastName} </p>
            <p>Cotisation :<span> { item.settings[labelSession].payment }€ </span> </p>
        </div>
        <div className="money">
            Montant attendu : <p>{item.settings[labelSession].payment }<span>€</span></p> 
        </div>
    </div>
);

export default BeneficiaryMember;