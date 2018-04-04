import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change } from 'redux-form';
import { MdSettings, MdDateRange } from 'react-icons/lib/md';
import { addSettingMember } from '../../../actions/member.actions';
import { getMemberSelected } from '../../../reducers/member.reducers';
import './scss/styles.scss';
import loader from '../../../assets/images/loader.svg';


class SettingMember extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            member: { firstName: '', lastName: ''},
            settings: null
        };
    }

    componentWillReceiveProps(nextProps) {
       
        if(nextProps.selected){
            this.setState({
                ...this.state,
                member: { ...nextProps.selected.member }
            });

            if(nextProps.selected.settings){
                this.setState({
                    member: { ...nextProps.selected.member },
                    settings: {
                        [nextProps.labelSession]: (nextProps.selected.settings[nextProps.labelSession]) ? { ...nextProps.selected.settings[nextProps.labelSession] } : null
                    },
                }, ()=>{
                    this.changeField(this.state, nextProps.labelSession);
                });
            } 
        }
    };

    changeField = (state, session) => {
        if(state.settings[session]){
            if(state.settings[session].language) this.props.dispatch(change('settingForm', 'language', state.settings[session].language));
            if(state.settings[session].admission) this.props.dispatch(change('settingForm', 'admission', state.settings[session].admission));
            if(state.settings[session].payment) this.props.dispatch(change('settingForm', 'payment', state.settings[session].payment));
            if(state.settings[session].payMonth) this.props.dispatch(change('settingForm', 'payMonth', state.settings[session].payMonth));
            if(state.settings[session].notificationByEmail) this.props.dispatch(change('settingForm', 'notificationByEmail', state.settings[session].notificationByEmail));
            if(state.settings[session].notificationBySms) this.props.dispatch(change('settingForm', 'notificationBySms', state.settings[session].notificationBySms));
        }
    }
 
    submit = async (values, dispatch, props) => {
        dispatch(change('settingForm', 'submitting', true));
        await new Promise(resolve => setTimeout(resolve, 500));
        var session = props.labelSession;
        var settings = {
            [session]: values
        };
        return dispatch(addSettingMember(settings));
    };

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
                        <p>
                            {this.state.member.firstName} {this.state.member.lastName}
                        </p>
                        <form onSubmit={this.props.handleSubmit(this.submit)}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="formControl">
                                            <label>Langue : </label>
                                            <Field name="language" component="select">
                                                <option >Choisir....</option>
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
                                                <option >Choisir....</option>
                                                <option value="1">Janvier</option>
                                                <option value="2">Février</option>
                                                <option value="3">Mars</option>
                                                <option value="4">Avril</option>
                                                <option value="5">Mai</option>
                                                <option value="6">Juin</option>
                                                <option value="7">Juillet</option>
                                                <option value="8">Aout</option>
                                                <option value="9">Septembre</option>
                                                <option value="10">Octobre</option>
                                                <option value="11">Novembre</option>
                                                <option value="12">Decembre</option>
                                            </Field>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="formControl checkbox">
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
                                            <div className="loader">
                                                { (this.props.submitting)
                                                    ? (<img src={loader}/>)
                                                    : ('')
                                                }
                                            </div>
                                            <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                                                Envoyer
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
            </div>
        );
    };
};

SettingMember = reduxForm({
    form: 'settingForm'
})(SettingMember);

const mapStateToProps = state => ({
    selected: getMemberSelected(state.members),
    labelSession: state.session.labelSession
});

export default connect(mapStateToProps)(SettingMember);

 
