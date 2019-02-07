import React from 'react';
import { Link } from 'gatsby';

function allRepos(allRepos, thisUser) {
  let renderRepos = allRepos.map(repo => (
    <li
      className="grid_item"
      key={repo.name}
      style={{
        padding: '0.5rem',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'stretch',
        textAlign: 'center',
        fontFamily: "'Lato', sans-serif"
      }}
    >
      <Link
        to={`./user/${thisUser.login}/repo/${repo.name}`}
        style={{
          border: '2px solid rgb(255, 200, 127)',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          height: '100%',
          textDecoration: 'none'
        }}
      >
        <div style={{color: 'rgb(255, 200, 127)'}}>
          {repo.name}
        </div>
        <p style={{color: 'rgb(105, 105, 105)', fontSize: '1rem', textDecoration: 'none'}}> {repo.description}</p>
      </Link>
    </li>
  ))

  return renderRepos;
}

export default ({ pageContext: { item } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    { console.log('item') }
    { console.log(item) }
    <Link to="/" style={{padding: '1rem 0'}}>Back to all Users<br/></Link>

    <h1>{item.user.name}</h1>
    <h2>Repos</h2>
    <ul className="repo_grid">
      {allRepos(item.repos, item.user)}
    </ul>
  </div>
);