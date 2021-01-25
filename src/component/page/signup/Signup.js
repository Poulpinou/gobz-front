import React, { Component } from 'react';
import './Signup.scss';
import { Link, Redirect } from 'react-router-dom'
import { GOOGLE_AUTH_URL } from '../../../constant';
import { signup } from '../../../api/AuthApi';
import googleLogo from '../../../img/google-logo.png';
import Alert from 'react-s-alert';

class Signup extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Création du compte Gobz</h1>
                    <SocialSignup />
                    <div className="or-separator">
                        <span className="or-text">OU</span>
                    </div>
                    <SignupForm {...this.props} />
                    <span className="login-link">Vous avez déjà un compte? <Link to="/login">Connectez vous!</Link></span>
                </div>
            </div>
        );
    }
}


class SocialSignup extends Component {
    render() {
        return (
            <div className="social-signup">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Utiliser mon compte Google
                </a>
            </div>
        );
    }
}

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   

        const signUpRequest = Object.assign({}, this.state);

        signup(signUpRequest)
        .then(response => {
            Alert.success("Votre compte a bien été créé! Connectez vous pour continuer");
            this.props.history.push("/login");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Il y a eu un souci. Veuillez réessayer!');            
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="text" name="name" 
                        className="form-control" placeholder="Nom"
                        value={this.state.name} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="email" name="email" 
                        className="form-control" placeholder="Email"
                        value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" 
                        className="form-control" placeholder="Mot de passe"
                        value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary" >Créer mon compte</button>
                </div>
            </form>                    

        );
    }
}

export default Signup