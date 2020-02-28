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
        // corejs: 3,
        regenerator: false,
        useESModules: true
      }
    ]
  ]
}
module.exports = config
