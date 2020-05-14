## Intro

基建工具包，抽离一些通用处理函数等

> 基于 `rollup` 打包 `esm` 格式，配合 `sideEffects`，使用方可以借用`webpack`等工具 利用`tree shaking`特性，从而减少代码体积。

## Includes

1. windowScaleTip：[浏览器缩放自动提示，支持关闭](./packages/windowScaleTip/README.md)
2. formatPermil：[金额千分位格式化，支持分到元转化](./packages/formatPermil/README.md)

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

## Todo

1.  增加开发预览页面

## Dev && Publish

1. npm run dev
2. npm run release

## Test

1. npm link 添加本地 npm 包，link 到全局
2. npm link @zg/tools 去项目目录通过包名来 link
3. npm unlink @zg/tools 去掉 link
