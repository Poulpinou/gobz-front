import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserActions from '../actions/AuthAction';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(UserActions, dispatch)
})

const mapStateToProps = (state) => ({
    currentUser: state.auth?.currentUser,
    authenticated: state.auth?.authenticated ?? false
})

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default AuthContainer;