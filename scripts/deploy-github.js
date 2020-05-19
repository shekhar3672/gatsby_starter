const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/shekhar3672/gatsby_starter',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
