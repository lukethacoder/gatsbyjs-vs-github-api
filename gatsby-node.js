const axios = require('axios');
const endpoint = 'https://api.github.com';
// const get = endpoint => axios.get(`https://api.github.com${endpoint}`);

const getUserData = names =>
  Promise.all(
    
    names.map(async name => {
      const { data: user } = await axios({
        method: 'get',
        url: `${endpoint}/users/${name}`
      });

      const { data: repos } = await axios({
        method: 'get',
        url: `${endpoint}/users/${name}/repos`
      });

      return { user, repos }
    })
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const allUsers = await getUserData(['lukethacoder', 'stolinski', 'wesbos', 'KyleAMathews', 'DevonCrawford']);

  // Create a page that lists all Pokémon.
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/all-users.js'),
    context: { allUsers }
  });

  // Create a page for each Pokémon.
  allUsers.forEach(item => {
    createPage({
      path: `/user/${item.user.login}`,
      component: require.resolve('./src/templates/user.js'),
      context: { item }
    });

    // Create a page for each ability of the current Pokémon.
    item.repos.forEach(repo => {
      createPage({
        path: `/user/${item.user.login}/repo/${repo.name}/`,
        component: require.resolve('./src/templates/repo.js'),
        context: { item, repo }
      });
    });
  });
};