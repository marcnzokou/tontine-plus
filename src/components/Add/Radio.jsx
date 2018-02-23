/**
 * input
 */
import React from 'react';

const Radio = ({label, name, value, change}) => (
    <div className="radio">
        <input type="radio" name={name}
            value={value}
            onChange={change}/>
        <label>{label}</label>
    </div>
);

export default Radio;