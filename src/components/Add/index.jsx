/**
 * Navbar Add component
 */
import React from 'react';
import AddMember from './Member';
import './styles.scss';

const Add = () => (
    <div className="add">
        <div className="title">Ajouter</div>
        <div className="menu">
            <a className="active">Membre</a>
            <a>Charte</a>
        </div>
        <AddMember />
    </div>
);

export default Add;