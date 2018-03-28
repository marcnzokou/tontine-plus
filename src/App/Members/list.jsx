import React from 'react';
import SkyLight from 'react-skylight';
import ItemMemberList from '../../components/ItemMember';

const ListMembers = props => {
    console.log(props.members);
    return (
        <div>
            <ul className="list">
                {props.members.map((member, index) =>
                    (<li key={index}>
                        <ItemMemberList item={member} appDOM={props.appDOM}/>
                    </li>)
                )}
            </ul>
        </div>
    );
};

export default ListMembers;