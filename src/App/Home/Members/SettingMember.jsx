import React from 'react';
import { MdSettings, MdDateRange, MdSend } from 'react-icons/lib/md';
import { LanguageDatas, MonthDatas } from '../../../models/datas';
import Input from '../../../components/Shared/Input';
import Select from '../../../components/Shared/Select';
import Checkbox from '../../../components/Shared/Checkbox';

class SettingMember extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.member;
        this.languageDatas = LanguageDatas;
        this.monthDatas = MonthDatas;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange() {
        // const target = event.target;
        // const value = target.value;
        // const name = target.name;
        // this.setState({
        //     [name]: value
        // });
    }

    handleSubmit() {
        // this.props.dispatch(addToMember(this.state));
        // event.preventDefault();
    }

    render() {
        return (
            <div className="setting-member">
                <div className="menu">
                    <p>Paramètres</p>
                    <ul>
                        <li><a className="active"><MdSettings /> Géneral</a></li>
                        <li><a><MdDateRange /> Calendrier</a></li>
                    </ul>
                </div>
                <div className="corps">
                    <p>{this.state.firstName} { this.state.lastName}</p>
                    <form onSubmit={this.handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <Select 
                                            label="Langue"
                                            name="language"
                                            datas={this.languageDatas}
                                            change={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <Input 
                                        label="frais d'inscription"
                                        placeHolder="Entrer les frais d'inscription"
                                        name="admission"
                                        state={this.state.settings.general.admission}
                                        change={this.handleChange}
                                        span = "euro"
                                        required = {true}
                                    />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <Input 
                                        label="Combien souhait-je cotiser ? / mois"
                                        placeHolder="Entrer votre cotisation"
                                        name="payment"
                                        state={this.state.settings.general.admission}
                                        change={this.handleChange}
                                        span = "euro"
                                        required = {true}
                                    />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Select 
                                            label="Quand souhait-je béneficier ?"
                                            name="payMonth"
                                            datas={this.monthDatas}
                                            change={this.handleChange}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <br />
                                        <div className="formControl">
                                            <Checkbox 
                                                label="Souhaitez-vous recevoir les notifications par email des actions faites par vous ou de l'adminstrateur ?"
                                                name="notificationByEmail"
                                                value={true}
                                                change={this.handleChange}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="formControl">
                                            <Checkbox 
                                                label="Souhaitez-vous recevoir les notifications par sms des actions faites par vous ou de l'adminstrateur ?"
                                                name="notificationBySms"
                                                value={true}
                                                change={this.handleChange}
                                            />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="text-right">
                                        <div className="formControl">
                                            <div className="required text-right">
                                                <span>*</span> Champs obligatoires 
                                            </div>
                                            <div className="btn-form">
                                                <button className="btnForm" type="submit" name="send"><MdSend /> Envoyer</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        );
    }
}


export default SettingMember;