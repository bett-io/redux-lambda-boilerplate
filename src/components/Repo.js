import React from 'react';

const Repo = ({ match }) => (
  <div>
    <h2>{match.params.repoName}</h2>
  </div>
);

export default Repo;
