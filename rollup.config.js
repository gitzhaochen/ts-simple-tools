import path from 'path'
import pkg from './package.json'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

const extensions = ['.ts', '.js', 'json']

const isProduction = process.env.NODE_ENV === 'production'
export default {
  input: path.resolve(__dirname, `./packages/index.ts`),
  output: [
    {
      file: pkg.module,
      format: 'esm'
    },
    {
      file: pkg.main,
      format: 'umd',
      name: 'ZgTools',
      globals: {
        '@babel/runtime/helpers/classCallCheck': '_classCallCheck',
        '@babel/runtime/helpers/createClass': '_createClass',
        'number-precision': 'NP'
      }
    }
  ],
  plugins: [
    resolve({ extensions }), //帮助rollup查找npm包路径
    commonjs({ extensions, include: 'node_modules/**' }), //将cjs的npm包转成esm,在代码中可以用import引入
    typescript(),
    babel({ extensions, babelHelpers: 'runtime' }),
    isProduction && terser()
  ],
  external(id) {
    // 对babel-runtime corejs等进行external
    return /^@babel|core-js|number-precision/.test(id)
  }
}
