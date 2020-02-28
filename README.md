## Intro

基于 rollup 打包 esm 格式，配合 sideEffects，利用 tree shaking 减少代码体积。

> 由于 `webpack` 打包组件库有以下缺点：

1. 不支持输出 esm 包（最大的缺点）,无法`tree shaking`
2. 代码冗余，webpack 内置的模块化代码、vue-loader 内置的 normalize 函数、重复引入的 babel helper
3. 按需加载需要`babel-plugin-import`插件才能实现，不够优雅

## Usage

1. esm：

```js
import { windowScaleTip } from '@zg/tools'
windowScaleTip.init()
```

2. umd:

```js
const ZgTools = require('@zg/tools')
ZgTools.windowScaleTip.init()
```

3. iife:

```js
let ZgTools = window['ZgTools']
ZgTools.windowScaleTip.init()
```

## Todo

1.  增加开发预览页面
2.  支持 vue 组件

## 开发与发布

1. npm run dev
2. npm run release