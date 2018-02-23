/**
 * Profile Component
 */
import React from 'react';
import { FaFrownO, FaAngleRight } from 'react-icons/lib/fa';
import './styles.scss';

const Profile = () => (
    <div className="profile">
        <div className="title">Moi</div>
        <div className="user">
            <p>
                <FaFrownO /><br/>
                Marc Nzokou <br/>
                <span>(Administrateur)</span>
            </p>
        </div>
        <div className="menu">
            <a>Gerer mes comptes <FaAngleRight /> </a>
        </div>
        <div className="menu">
            <a>Déconnexion <FaAngleRight /> </a>
        </div>
    </div>
);

export default Profile;
