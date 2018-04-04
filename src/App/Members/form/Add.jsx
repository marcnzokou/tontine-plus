import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change } from 'redux-form';
import { addMember, updateMember } from '../../../actions/member.actions';
import { getMemberSelected } from '../../../reducers/member.reducers';
import './scss/styles.scss';
import loader from '../../../assets/images/loader.svg';

class AddMember extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            member: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.selected) {
            this.setState({
                id: nextProps.selected.id,
                member: nextProps.selected.member
            }, ()=>{
                this.changeField(this.state);
            });
        }
    };

    changeField = (state) => {
        if(state.member.sex) this.props.dispatch(change('memberForm', 'sex', state.member.sex));
        if(state.member.firstName) this.props.dispatch(change('memberForm', 'firstName', state.member.firstName));
        if(state.member.lastName) this.props.dispatch(change('memberForm', 'lastName', state.member.lastName));
        if(state.member.email) this.props.dispatch(change('memberForm', 'email', state.member.email));
        if(state.member.phone) this.props.dispatch(change('memberForm', 'phone', state.member.phone));
        if(state.member.address) this.props.dispatch(change('memberForm', 'address', state.member.address));
    }
 
    submit = async (values, dispatch) => {
        dispatch(change('memberForm', 'submitting', false));
        dispatch(change('memberForm', 'pristine', false));
        await new Promise(resolve => setTimeout(resolve, 500));
        return dispatch(addMember(values));
    };

    update = async (values, dispatch) => {
        dispatch(change('memberForm', 'submitting', true));
        await new Promise(resolve => setTimeout(resolve, 500));
        return dispatch(updateMember(values));
    };

    render() {
        return (
            <div className="add">
                <div className="title">
                    {(this.state.id)
                        ? 'Modifier un membre'
                        : 'Nouveau membre'
                    }
                </div>
                <form onSubmit={
                    (this.state.id)
                        ? this.props.handleSubmit(this.update)
                        : this.props.handleSubmit(this.submit)
                    }>
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
        );
    } 
};

AddMember = reduxForm({
    form: 'memberForm'
})(AddMember);

const mapStateToProps = state => ({
    selected: getMemberSelected(state.members)
});

export default connect(mapStateToProps)(AddMember);
