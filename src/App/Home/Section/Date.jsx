import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLocationOn } from 'react-icons/lib/md';

const Date = ({ type, date }) => (
    <div>
        { type ? (
            <div className="month">
                <a className="left"><MdKeyboardArrowLeft /></a> 
                    {date}
                <a className="right"><MdKeyboardArrowRight /></a>
            </div>
        ) : (
            <div className="day">
                <p>6</p>
                {date}
                <p className="location">
                    <MdLocationOn /><br />
                    Epinay-sur-seine, Ile-de-france
                </p>
            </div>
        )}
    </div>
        
);

export default Date;