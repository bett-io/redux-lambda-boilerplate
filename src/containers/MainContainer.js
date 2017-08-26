import Main from '../components/Main';
import connectWithRouter from '../../modules/connectWithRouter';

const mapStateToProps = (state) => {
  return {
    sessionCounter: state.sessionCounter,
  };
};

const MainContainer = connectWithRouter(
  mapStateToProps,
  null
)(Main);

export default MainContainer;
