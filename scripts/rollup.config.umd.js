import base from './rollup.config.base.js'
import pkg from '../package.json'

const config = [
  Object.assign({}, base, {
    input: `./packages/index.js`,
    output: {
      file: pkg.main,
      format: 'umd',
      name: 'ZgTools', //包输出的全局变量名称
      globals: {
        '@babel/runtime/helpers/esm/classCallCheck': '_classCallCheck',
        '@babel/runtime/helpers/esm/createClass': '_createClass'
      }
    }
  })
]

export default config
