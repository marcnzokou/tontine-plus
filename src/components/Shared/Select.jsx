/**
 * input
 */
import React from 'react';

const Select = ({label, name, datas, change}) => (
    <div className="formControl">
        <label>{label} : </label>
        <select className="form-control" name={name} onChange={change}>
            {datas.map((item, index) => 
                (<option value={item.value} key={index}>
                    {item.label}
                </option>)
            )}
        </select>
    </div>
);

export default Select;