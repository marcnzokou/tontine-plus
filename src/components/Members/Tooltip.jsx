import React from 'react';
import { MdEdit, MdDelete, MdRemoveRedEye, MdSettings } from 'react-icons/lib/md';

const MemberTooltip = () => (
    <div>
        <div className="tooltip">
            <a><MdRemoveRedEye /> Visaualiser</a>
            <a><MdEdit /> Editer</a>
            <a><MdDelete /> Supprimer</a>
            <a ><MdSettings /> Parametrer</a>
        </div>

    </div>
);

export default MemberTooltip;