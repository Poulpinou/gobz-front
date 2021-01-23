import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../action/UserAction';

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(UserActions, dispatch)
})

const mapStateToProps = (state) => ({
        currentUser: state.currentUser?.currentUser,
        authenticated: state.currentUser?.authenticated ?? false
    })

const AuthenticableUser = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default AuthenticableUser;