import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../action/AuthAction';

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