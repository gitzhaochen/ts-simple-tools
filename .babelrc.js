const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        modules: false
      }
    ],
    ['@babel/preset-typescript']
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        corejs: false,
        regenerator: false
      }
    ]
  ]
}
module.exports = config
