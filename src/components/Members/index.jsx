import React from 'react';
import MemberItem from './Item';

const Members = ({ membersList }) => (
    <div>
        <ul className="list">
            {membersList.map((member, index) => 
                (<li key={index}>
                    <MemberItem item={member} />
                </li>)
            )}
        </ul>
       
    </div>
);
export default Members;