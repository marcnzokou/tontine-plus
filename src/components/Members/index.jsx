import React from 'react';
import SkyLight from 'react-skylight';
import MemberItem from './Item';
import SettingMember from '../../App/Home/Members/form/Setting';


class Members extends React.Component {
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
                            <MemberItem item={member} refPopup={this}/>
                        </li>)
                    )}
                </ul>
                <SkyLight hideOnOverlayClicked ref={this.state.ref}>
                    <SettingMember/>
                </SkyLight>
            </div>
        );
    }
}

export default Members;