/**
 * input
 */
import React from 'react';

const Select = ({label, name, datas, state, change}) => (
    <div className="formControl">
        <label>{label} : </label>
        <select className="form-control" value={state} name={name} onChange={change}>
            <option value="">Choisir...</option>
            {datas.map((item, index) =>
                (<option value={item.value} key={index}>
                    {item.label}
                </option>)
            )}
        </select>
    </div>
);

export default Select;