import React from 'react'
import NavLink from './NavLink'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>helloworld-lambda-web</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to="/hello">Hello</NavLink></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
}

export default App;
