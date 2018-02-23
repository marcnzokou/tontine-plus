/**
 * Home containers
 */
import React from 'react';
import './styles.scss';
import Header from './Header';
import Memberships from './Memberships';
import Notes from './Notes';

const Home = () => (
    <div className="layout-inner">
       <div className="home">
           <div className="calendar">
                <div className="content-left">
                    home
                </div>
           </div>
           <div className="memberships">
                <Memberships />
           </div>
        </div>
    </div>
);

export default Home;
