import fs from 'fs'
import path from 'path'
const hasIndexJs = dir => {
  let dirs = []
  try {
    dirs = fs.readdirSync(dir)
  } catch (e) {
    dirs = null
  }
  return dirs && dirs.includes('index.js')
}

export const getDirsByPath = entryDir => {
  // 获取entryDir目录 下一级所有的文件和文件夹
  const items = fs.readdirSync(entryDir)
  // 过滤 只包含index.js的文件夹
  return items.filter(item => hasIndexJs(path.resolve(entryDir, item)))
}
