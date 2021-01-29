import React, {Component} from 'react';
import {Head, Header, Router} from './';
import LoadingIndicator from '../common/loadingIndicator';
import {getCurrentUser} from '../../api/UserApi';
import {ACCESS_TOKEN} from '../../constants';
import Alert from 'react-s-alert';
import './style.scss';
import AuthenticableUser from '../../containers/AuthContainer';
import {library} from '@fortawesome/fontawesome-svg-core';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';

// Load fontawesome libraries
library.add(far)
library.add(fas)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    loadCurrentlyLoggedInUser = () => {
        this.setState({
            loading: true
        });

        getCurrentUser()
            .then(response => {
                this.props.actions.setLoggedUser(response);

                this.setState({
                    loading: false
                });
            }).catch(error => {
            Alert.error(error);
            this.setState({
                loading: false
            });
        });
    }

    handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        this.props.actions.logoutUser();

        Alert.success("Vous avez été déconnecté avec succès!");
    }

    componentDidMount() {
        this.loadCurrentlyLoggedInUser();
    }

    render() {
        if (this.state.loading) {
            return <LoadingIndicator/>
        }

        const {currentUser, authenticated} = this.props;

        return (
            <div className="app">
                <Head/>
                <div className="app-top-box">
                    <Header authenticated={authenticated} currentUser={currentUser} onLogout={this.handleLogout}/>
                </div>
                <div className="app-body">
                    <Router authenticated={authenticated} currentUser={currentUser}/>
                </div>
                <Alert stack={{limit: 3}}
                       timeout={3000}
                       position='top-right' effect='slide' offset={65}/>
            </div>
        );
    }
}

export default AuthenticableUser(App);