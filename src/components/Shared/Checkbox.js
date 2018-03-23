/**
 * input
 */
import React from 'react';

const Checkbox = ({label, name, value, change}) => (
    <div className="checkbox">
        <input type="checkbox" name={name}
            value={value}
            onChange={change}/>
        <label>{label}</label>
    </div>
);

export default Checkbox;