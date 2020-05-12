import { InitOption } from '../../types/index'
/**
 * 获取浏览器缩放的倍数
 */

function detectZoom(): number {
  let ratio = 0
  const screen = window.screen,
    ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth
  }
  if (ratio) {
    ratio = Math.round(ratio * 100)
  }
  return ratio
}

class WinScaleTip {
  private options = {
    alwaysShow: false, //是否一直展示
    style: {
      position: 'relative',
      lineHeight: 2,
      zIndex: 9999,
      textAlign: 'center',
      backgroundColor: '#f7f7cf',
      color: '#333333',
      fontSize: '12px'
    },
    noTipBtnStyle: { cursor: 'pointer', color: '#007acc' } //不在提示按钮
  }
  private type = detectZoom() > 100 ? '放大' : '缩放'

  render(): void {
    const { style = {}, noTipBtnStyle = {} } = this.options
    const elem = document.createElement('div'),
      noTipElem = document.createElement('span') //不再提示按钮
    elem.id = 'ZgWinScaleTip'
    Object.keys(style).forEach((key) => {
      elem.style[key] = style[key]
    })
    elem.innerHTML = `<span>您的浏览器处于${this.type}状态，会导致页面显示不正常，您可以键盘按“ctrl+数字0”组合键恢复初始状态。</span>`
    noTipElem.id = 'ZgWinScaleTip-nobtn'
    noTipElem.innerHTML = `不再提示`
    Object.keys(noTipBtnStyle).forEach((key) => {
      noTipElem.style[key] = noTipBtnStyle[key]
    })
    elem.appendChild(noTipElem)

    document.body.insertBefore(elem, document.body.firstChild)
    noTipElem.addEventListener('click', function () {
      window.localStorage.setItem('ZgWinScaleTip', 'hidden')
      if (elem.parentNode) elem.parentNode.removeChild(elem)
    })
  }
  init(options: InitOption): void {
    if (document.querySelector('#ZgWinScaleTip')) return
    const { style = {}, noTipBtnStyle = {}, alwaysShow = false } = options || {}
    Object.assign(this.options.style, style)
    Object.assign(this.options.noTipBtnStyle, noTipBtnStyle)
    this.options.alwaysShow = alwaysShow
    if (!alwaysShow && window.localStorage.getItem('ZgWinScaleTip') === 'hidden') return
    this.render()
  }
}

export default new WinScaleTip()
