import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppHead from './AppHead';
import AppHeader from './AppHeader';
import Home from '../page/home/Home';
import Login from '../page/login/Login';
import Signup from '../page/signup/Signup';
import Profile from '../page/profile/Profile';
import ProjectsPage from '../page/projects/ProjectsPage';
import OAuth2RedirectHandler from '../common/OAuth2RedirectHandler';
import NotFound from '../page/error/notFound/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../../api/UserApi';
import { ACCESS_TOKEN } from '../../constant';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './style.scss';
import AuthenticableUser from '../../container/AuthenticableUser';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(far)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
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

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.props.actions.logoutUser();

    Alert.success("Vous avez été déconnecté avec succès!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    const {currentUser, authenticated} = this.props;

    return (
      <div className="app">
        <AppHead/>
        <div className="app-top-box">
          <AppHeader authenticated={authenticated} currentUser={currentUser} onLogout={this.handleLogout} />
        </div>
        <div className="app-body">
          <Switch>
            {/* Public Routes */}
            <Route exact path="/" component={Home}></Route>           
            <Route path="/login"
              render={(props) => <Login authenticated={authenticated} {...props} />}></Route>
            <Route path="/signup"
              render={(props) => <Signup authenticated={authenticated} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
            
            {/* Private Routes */}
            <PrivateRoute  path="/profile" authenticated={authenticated} currentUser={currentUser}
              component={Profile}>
            </PrivateRoute>

            <PrivateRoute path="/projects" authenticated={authenticated} currentUser={currentUser}>
              <ProjectsPage/>
            </PrivateRoute>

            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}

export default AuthenticableUser(App);
