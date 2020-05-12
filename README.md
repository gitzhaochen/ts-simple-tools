## Intro

基于 rollup 打包 esm 格式，配合 sideEffects，利用 tree shaking 减少代码体积。

> 由于 `webpack` 打包输出有以下缺点：

1. 不支持输出 esm 包,无法`tree shaking`
2. 代码冗余，webpack 内置的模块化代码、vue-loader 内置的 normalize 函数、重复引入的 babel helper

## Includes

1. [浏览器缩放自动提示，支持关闭](./packages/windowScaleTip/README.md)

## Usage

> 安装：npm i -S @zg/tools

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

## Features

1. 支持 Vue 组件
2. babel 7
3. packages 目录文件单独打包

## Todo

1.  增加开发预览页面

## Dev && Publish

1. npm run dev
2. npm run release

## Test

1. npm link 添加本地 npm 包，link 到全局
2. npm link @zg/tools 去项目目录通过包名来 link
3. npm unlink my-utils 去掉 link
