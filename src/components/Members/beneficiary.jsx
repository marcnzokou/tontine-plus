import React from 'react'; 
import { MdMood, MdClear, MdRemoveRedEye } from 'react-icons/lib/md';
import { NB_MONTH } from '../../services';

const BeneficiaryMember = ({item, nb}) => (
    <div className={'user-money '+'padding-'+nb}>
        <div className="btn-beneficiary">
            <a><MdRemoveRedEye /></a>
            <a><MdClear /></a>
        </div>
        <div className="user">
            <MdMood />
            <p className="name">{item.firstName} {item.lastName} </p>
            <p>Cotisation :<span> {item.settings.general.payment}€ </span> </p>
        </div>
        <div className="money">
            Montant attendu : <p>{item.settings.general.payment * NB_MONTH }<span>€</span></p> 
        </div>
    </div>
);

export default BeneficiaryMember;