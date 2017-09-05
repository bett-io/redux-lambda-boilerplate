import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Repo from './Repo';

const Repos = ({ history }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repos/${userName}/${repo}`;

    history.push(path);
  };

  return (
    <div>
      <h2>Repos</h2>

      <ul>
        <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
        <li><NavLink to="/repos/facebook/react">React</NavLink></li>

        <li>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="userName"/> / {' '}
            <input type="text" placeholder="repo"/>{' '}
            <button type="submit">Go</button>
          </form>
        </li>
      </ul>

      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </div>
  );
};

export default Repos;
