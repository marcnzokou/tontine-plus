import React from 'react';
import Calendar from '../../components/Calendar';
import HomeSection from './Section';
import './scss/styles.scss';

const Home = () => (
  <div className="container">
      <Calendar />
      <div className="container-section">
          <div className="section-fixed content">
            <div className="content-section">
                <HomeSection date="Janvier 2018"/>
            </div>
          </div>
      </div>
  </div>
);

export default Home;
