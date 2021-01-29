import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from '../common/privateRoute';
import {HomePage, LoginPage, ProfilePage, ProjectsPage, SignupPage} from '../page';
import {NotFoundPage} from '../page/errors';
import OAuth2RedirectHandler from '../common/oAuth2RedirectHandler'

class Router extends Component {

    render() {
        const {authenticated, currentUser} = this.props;

        return (
            <Switch>
                {/* Public Routes */}
                <Route exact path="/" render={(props) => <HomePage authenticated={authenticated} {...props} />}/>
                <Route path="/login" render={(props) => <LoginPage authenticated={authenticated} {...props} />}/>
                <Route path="/signup" render={(props) => <SignupPage authenticated={authenticated} {...props} />}/>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>

                {/* Private Routes */}
                <PrivateRoute path="/profile" authenticated={authenticated} currentUser={currentUser}
                              component={ProfilePage}/>
                <PrivateRoute path="/projects" authenticated={authenticated} currentUser={currentUser}
                              component={ProjectsPage}/>

                <Route component={NotFoundPage}/>
            </Switch>
        )
    }
}

export default Router;