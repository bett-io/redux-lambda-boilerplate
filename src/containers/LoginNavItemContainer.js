import { connect } from 'react-redux';
import { login, logout } from '../actions';
import LoginNavItem from '../components/LoginNavItem';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLogin: () => {
      dispatch(login());
    },
    onClickLogout: () => {
      dispatch(logout());
    },
  };
};

const LoginNavItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginNavItem);

export default LoginNavItemContainer;
