import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { addMember } from '../../../actions/member.actions';
import '../scss/styles.scss';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const submit = async (values, dispatch) => {
    await sleep(200);
    dispatch(addMember(values));
    return dispatch(reset('memberForm'));
};

const AddMember = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
        <div className="add">
            <div className="title">Nouveau membre</div>
            <form onSubmit={handleSubmit(submit)}>
                <table>
                    <tbody>
                        <tr>
                            <td colSpan="2" className="formControl text-right radio">
                            <label>
                                <Field name="sex" component="input" type="radio" value="male" />
                                {' '} Homme &nbsp;&nbsp;
                            </label>
                            <label>
                                <Field name="sex" component="input" type="radio" value="female" />
                                {' '} Femme
                            </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="formControl">
                                <label>Prénom : </label>
                                <Field
                                    name="firstName"
                                    component="input"
                                    type="text"
                                    placeholder="Entrer un prénom"
                                />
                            </td>
                            <td className="formControl">
                                <label>Nom : </label>
                                <Field
                                    name="lastName"
                                    component="input"
                                    type="text"
                                    placeholder="Entrer un prénom"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className="formControl">
                                <label>Email : </label>
                                <Field
                                    name="email"
                                    component="input"
                                    type="text"
                                    placeholder="Entrer un email"
                                />
                            </td>
                            <td className="formControl">
                                <label>Téléphone : </label>
                                <Field
                                    name="phone"
                                    component="input"
                                    type="text"
                                    placeholder="Entrer un tel"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="formControl">
                                <label>Adresse : </label>
                                <Field
                                    name="address"
                                    component="input"
                                    type="text"
                                    placeholder="Entrer une adresse"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="btnForm text-right">
                                <button type="submit" disabled={pristine || submitting}>Envoyer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

connect()(AddMember);

export default reduxForm({
    form: 'memberForm'
})(AddMember);
