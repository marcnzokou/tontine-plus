import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { MdSettings, MdDateRange } from 'react-icons/lib/md';
import { addSettingMember } from '../../../actions/member.actions';
import '../scss/styles.scss';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const submit = async (values, dispatch) => {
    await sleep(500);
    return dispatch(addSettingMember(values));
};

const SettingMember = (props) => {

    const { handleSubmit, pristine, submitting, datas } = props;
    const { member } = datas;

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
                    <p>
                        { (member) ? member.firstName : ''} { (member) ? member.lastName : ''}
                    </p>
                    <form onSubmit={handleSubmit(submit)}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="formControl">
                                        <label>Langue : </label>
                                        <Field name="language" component="select">
                                            <option />
                                            <option value="fr">Français</option>
                                            <option value="en">Anglais</option>
                                        </Field>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="formControl">
                                        <label>Frais d'inscription : </label>
                                        <Field
                                            name="admission"
                                            component="input"
                                            type="text"
                                            placeholder="Entrer un montant"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="formControl">
                                        <label>Combien souhaite cotiser ? / mois : </label>
                                        <Field
                                            name="payment"
                                            component="input"
                                            type="text"
                                            placeholder="Entrer un montant"
                                        />
                                    </td>
                                </tr>
                                <tr>

                                    <td className="formControl">
                                        <label>Quand souhaite béneficier ? : </label>
                                        <Field name="payMonth" component="select">
                                            <option />
                                            <option value="01">Janvier</option>
                                            <option value="02">Février</option>
                                        </Field>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="formControl checkbox">
                                    <br />
                                    <Field
                                        name="notificationByEmail"
                                        id="notificationByEmail"
                                        component="input"
                                        type="checkbox"
                                    />
                                     <label>Souhaitez-vous recevoir les notifications par email des actions faites par vous ou de l'adminstrateur ?</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="formControl checkbox">
                                        <Field
                                            name="notificationBySms"
                                            id="notificationBySms"
                                            component="input"
                                            type="checkbox"
                                        />
                                        <label>Souhaitez-vous recevoir les notifications par sms des actions faites par vous ou de l'adminstrateur ?</label>
                                    </td>
                                </tr>

                                <tr>
                                    <td className="btnForm text-right">
                                        <button type="submit" disabled={pristine || submitting}>Envoyer</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
    );
};

connect()(SettingMember);

export default reduxForm({
    form: 'settingForm'
})(SettingMember);
