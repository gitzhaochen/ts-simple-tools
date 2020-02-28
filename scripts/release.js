const release = require('release-easy')
release({
  semVerCallback: 'build',
  npmRegistry: 'http://npm.zhaogangren.com',
})
