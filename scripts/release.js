const release = require('release-easy')
release({
  semVerCallback: 'build',
  npmRegistry: 'https://registry.npmjs.org',
})
