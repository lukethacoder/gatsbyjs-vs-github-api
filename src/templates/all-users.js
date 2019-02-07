import React from 'react';
import { Link } from 'gatsby';
import "../components/layout.css"

export default ({ pageContext: { allUsers } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>Choose a User!</h1>
    { console.log(';') }
    { console.log(allUsers) }
    <ul className="repo_grid" style={{ padding: 0 }}>
      {allUsers.map(item => (
        <li
          className="grid_item"
          key={item.user.id}
          style={{
            textAlign: 'center',
            listStyle: 'none',
            display: 'inline-block'
          }}
        >
          {console.log('user')}
          {console.log(item.user)}
          <Link
            to={`/user/${item.user.login}`}
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
            <div
              style={{
                color: 'rgb(255, 200, 127)'
              }}
            >
              {item.user.name}
            </div>
            <p style={{textDecoration: 'none', color: 'rgb(105, 105, 105)'}}>Followers: {item.user.followers}</p>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);