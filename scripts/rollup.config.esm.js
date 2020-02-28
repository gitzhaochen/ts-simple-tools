import base from './rollup.config.base.js'
import pkg from '../package.json'

const config = [
  Object.assign({}, base, {
    input: `./packages/index.js`,
    output: {
      file: pkg.module,
      format: 'esm'
    }
  })
]

export default config
