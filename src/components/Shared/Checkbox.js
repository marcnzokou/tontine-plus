/**
 * input
 */
import React from 'react';

const Checkbox = ({label, name, id, value, state, change}) => (
    <div className="checkbox">
        <input type="checkbox" name={name}
            value={value}
            defaultChecked={state}
            id={id}
            onChange={change}/>
        <label for={id}>{label}</label>
    </div>
);

export default Checkbox;