const config = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        corejs: false, //使用core-js
        regenerator: false,
        useESModules: true
      }
    ]
  ]
}
module.exports = config
