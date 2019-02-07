import React from 'react';
import { Link } from 'gatsby';

// const getName = repo =>
//   repo.names.find(({ language }) => language.name === 'en').name;

export default ({ pageContext: { item, repo } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <Link to={`/user/${item.user.name}`}>Back to {item.user.name}</Link>
    { console.log(repo) }
    <h1>{repo.name}</h1>
    <h4>{repo.description}</h4>
    <ul className="repo_list">
      <li>
        <p>ID: <span>{repo.id}</span></p>
      </li>
      <li>
        <p>Size: <span>{repo.size / 1000}mb</span></p>
      </li>
      <li>
        <p>Open Issues: <span>{repo.open_issues}</span></p>
      </li>
      
    </ul>
  </div>
);