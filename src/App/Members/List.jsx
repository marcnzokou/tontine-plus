import React from 'react';
import ItemMember from './Item';

const ListMembers = props => {
    return (
        <div>
            <ul className="list">
                {props.members.map((member, index) =>
                    (<li key={index}>
                        <ItemMember item={member} appDOM={props.appDOM}/>
                    </li>)
                )}
            </ul>
        </div>
    );
};

export default ListMembers;