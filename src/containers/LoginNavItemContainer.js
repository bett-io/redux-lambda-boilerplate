import { connect } from 'react-redux';
import { setAuthToken } from '../actions';
import LoginNavItem from '../components/LoginNavItem';

const mapStateToProps = (state) => {
  return {
    isLogin: !!state.authToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickLogin: () => {
      dispatch(setAuthToken('test'));
    },
    onClickLogout: () => {
      dispatch(setAuthToken(''));
    },
  };
};

const LoginNavItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginNavItem);

export default LoginNavItemContainer;
