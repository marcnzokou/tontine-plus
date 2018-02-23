/**
 * Add Member component
 */
import React from 'react';
import { connect } from 'react-redux';

import {  MdSend } from 'react-icons/lib/md';
import memberModel from '../../../models/member';
import { addToMember } from '../../../actions';
import Input from '../Input';
import Radio from '../Radio';

class AddMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = memberModel;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        // (target.type === 'radio' && target.checked) ? 
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.dispatch(addToMember(this.state));
        event.preventDefault();
    }

    render () {
        return (
            <div className="add-member">
                <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><Input 
                                label="Prénom"
                                placeHolder="Entrer un prénom"
                                name="firstName"
                                state={this.state.firstName}
                                change={this.handleChange}
                                />
                            </td>
                            <td><Input 
                                label="Nom"
                                placeHolder="Entrer un nom"
                                name="lastName"
                                state={this.state.lastName}
                                change={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2"><Input 
                                label="E-mail"
                                placeHolder="Entrer un email"
                                name="email"
                                state={this.state.email}
                                change={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="formControl text-right">
                                    <Radio 
                                        label="Masculin"
                                        name="sex"
                                        value="male"
                                        change={this.handleChange}
                                    />
                                    <Radio 
                                        label="Feminin"
                                        name="sex"
                                        value="female"
                                        change={this.handleChange}
                                    />
                                </div>
                            </td>
                            <td><Input 
                                label="Téléphone"
                                placeHolder="Entrer un téléphone"
                                name="phone"
                                state={this.state.phone}
                                change={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2"><Input 
                                label="Adresse"
                                placeHolder="Entrer un adresse"
                                name="address"
                                state={this.state.address}
                                change={this.handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <div className="formControl">
                                    <div className="required">
                                        <span>*</span> Champs obligatoires 
                                    </div>
                                    <div className="btn">
                                        <button type="submit" name="send"><MdSend /> Envoyer</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </form>
            </div>
        );
    }
};

export default connect()(AddMember);