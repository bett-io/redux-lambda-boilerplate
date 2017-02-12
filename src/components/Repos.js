import React from 'react'
import NavLink from './NavLink'

class Repos extends React.Component {
  render() {
    return (
      <div>
        <h2>Repos</h2>

        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

export default Repos;
