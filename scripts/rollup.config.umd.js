import base from './rollup.config.base.js'
import pkg from '../package.json'
import path from 'path'
path.join(process.cwd(), './packages/zgVueLib')
import { getDirsByPath } from './utils'
//所有packages下面的一级目录
const dirsPaths = getDirsByPath(path.join(process.cwd(), './packages'))

const allPaths = ['entry', ...dirsPaths]

const config = allPaths.map(dir => {
  return Object.assign({}, base, {
    input: dir === 'entry' ? `./packages/index.js` : `./packages/${dir}/index.js`,
    output: {
      file: dir === 'entry' ? pkg.main : `./dist/umd/${dir}/index.js`,
      format: 'umd',
      globals: {
        '@babel/runtime/helpers/esm/classCallCheck': '_classCallCheck',
        '@babel/runtime/helpers/esm/createClass': '_createClass'
      },
      name: dir === 'entry' ? 'ZgTools' : `ZgTools_${dir}`
    }
  })
})

export default config
