import React from 'react';
import SkyLight from 'react-skylight';
import ItemMemberList from '../../components/ItemMember';
import SettingMember from './form/Setting';
import { getMemberSelected } from '../../reducers/member.reducers';

class ListMembers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ref: 'popupName'
        };
    }
    render() {
        return (
            <div>
                <ul className="list">
                    {this.props.all.map((member, index) => 
                        (<li key={index}>
                            <ItemMemberList item={member} refPopup={this}/>
                        </li>)
                    )}
                </ul>
                <SkyLight hideOnOverlayClicked ref={this.state.ref}>
                    <SettingMember datas={getMemberSelected(this.props.all)}/>
                </SkyLight>
            </div>
        );
    }
}

export default ListMembers;