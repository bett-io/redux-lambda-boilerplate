import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const connectWithRouter = (
  mapStateToProps,
  mapDispatchToProps
) => {
  const connectedComponent = connect(mapStateToProps, mapDispatchToProps);

  // https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
  return (component) => withRouter(connectedComponent(component));
};

export default connectWithRouter;
