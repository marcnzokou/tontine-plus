/**
 * input
 */
import React from 'react';

const Input = ({label, placeHolder, name, state, change}) => (
    <div className="formControl">
        <label>{label} : <span>*</span></label>
        <input className="form-control" value={state} type="text" name={name} placeholder={placeHolder} onChange={change}/>
    </div>
);

export default Input;