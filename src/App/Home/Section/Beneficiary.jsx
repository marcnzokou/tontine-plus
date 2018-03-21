import React from 'react'; 
import { MdMood, MdClear, MdRemoveRedEye } from 'react-icons/lib/md';

const Beneficiary = () => (
    <div>
        <div className="header-home-section">
            <span>Beneficiare</span>
        </div>
        <div className="user-money">
            <div className="btn-beneficiary">
                <a><MdRemoveRedEye /></a>
                <a><MdClear /></a>
            </div>
            <div className="user">
                <MdMood />
                <p className="name">Marc NZOKOU </p>
                <p>Cotisation :<span> 300€</span> </p>
            </div>
            <div className="money">
                Montant attendu : <p>1200<span>€</span></p> 
            </div>
        </div>
    </div>
);

export default Beneficiary;