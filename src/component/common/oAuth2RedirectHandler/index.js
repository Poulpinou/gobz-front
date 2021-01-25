import React, { Component } from 'react';
import { ACCESS_TOKEN } from '../../../constant';
import { Redirect } from 'react-router-dom';
import AuthContainer from '../../../container/AuthContainer';
import { getCurrentUser } from '../../../api/UserApi';

class OAuth2RedirectHandler extends Component {
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        var results = regex.exec(this.props.location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    render() {        
        const token = this.getUrlParameter('token');
        const error = this.getUrlParameter('error');

        // TODO: rework this part
        if(token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            
            getCurrentUser()
                .then(response => {
                    this.props.actions.setLoggedUser(response);
                    return <Redirect to={{
                        pathname: "/profile",
                        state: { from: this.props.location }
                    }}/>; 
                }).catch(error => {
                    console.log(error);
                });
        }

        return <Redirect to={{
            pathname: "/login",
            state: { 
                from: this.props.location,
                error: error 
            }
        }}/>; 
    }
}

export default AuthContainer(OAuth2RedirectHandler);