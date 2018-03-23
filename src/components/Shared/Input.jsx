/**
 * input
 */
import React from 'react';

const Input = ({label, placeHolder, name, state, change, span, required}) => (
    <div className={'formControl ' + span}>
        <label>{label} <span>{(required) ? '*' : ''}</span> : </label>
        <input className="form-control" value={state} type="text" name={name} placeholder={placeHolder} onChange={change}/>
    </div>
);

export default Input;