import { WindowScaleTip } from '../../types/index'
import { InitOption } from '../../types/windowScaleTip'
class WinScaleTip implements WindowScaleTip {
  private options: InitOption = {
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

  /** 浏览器缩放的倍数 */
  private ratio = 0
  private $el: HTMLDivElement | null = null
  private isInited = false
  /** 获取浏览器缩放的倍数 */
  private detectZoom(): void {
    let ratio = 0
    const screen = window.screen,
      ua = navigator.userAgent.toLowerCase()
    if (ua.indexOf('msie') !== -1) {
      if (screen.deviceXDPI && screen.logicalXDPI) {
        ratio = screen.deviceXDPI / screen.logicalXDPI
      }
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
      ratio = window.outerWidth / window.innerWidth
    }
    if (ratio) {
      ratio = Math.round(ratio * 100)
    }
    this.ratio = ratio
  }
  private remove(): void {
    if (!this.$el) return
    if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el)
    this.$el = null
  }
  /** 渲染提示dom */
  private render(): void {
    const { style = {}, noTipBtnStyle = {} } = this.options
    const elem = document.createElement('div'),
      noTipElem = document.createElement('span') //不再提示按钮
    elem.id = 'ZgWinScaleTip'
    Object.keys(style).forEach((key) => {
      elem.style[key] = style[key]
    })
    elem.innerHTML = `<span>您的浏览器处于缩放状态，会导致页面显示不正常，您可以键盘按“ctrl+数字0”组合键恢复初始状态。</span>`
    noTipElem.id = 'ZgWinScaleTip-nobtn'
    noTipElem.innerHTML = `不再提示`
    Object.keys(noTipBtnStyle).forEach((key) => {
      noTipElem.style[key] = noTipBtnStyle[key]
    })
    elem.appendChild(noTipElem)
    document.body.insertBefore(elem, document.body.firstChild)
    this.$el = elem
    //点击不再显示 删除dom 并且记录用户操作
    noTipElem.addEventListener('click', () => {
      window.localStorage.setItem('ZgWinScaleTip', 'hidden')
      this.remove()
    })
  }
  /**监听浏览器缩放 是否触发渲染 */
  private resizeHandler(): void {
    this.isInited = true
    window.addEventListener('resize', () => {
      this.init(this.options)
    })
  }
  /**填充初始化参数 */
  private mergeOptions(options?: InitOption): void {
    const { style = {}, noTipBtnStyle = {}, alwaysShow = false } = options || {}
    Object.assign(this.options.style, style)
    Object.assign(this.options.noTipBtnStyle, noTipBtnStyle)
    this.options.alwaysShow = alwaysShow
  }
  init(options?: InitOption): void {
    //初始化 注册事件 监听浏览器缩放
    !this.isInited && this.resizeHandler()
    this.detectZoom()
    //无缩放 或者 未检测到缩放情况 直接返回
    if (this.ratio === 0 || this.ratio === 100) {
      this.remove()
      return
    }
    this.mergeOptions(options)
    //未设置始终显示 且 已记录用户关闭操作 不渲染
    if (!this.options.alwaysShow && window.localStorage.getItem('ZgWinScaleTip') === 'hidden') return
    //dom已存在就不要再渲染了
    if (!this.$el) this.render()
  }
}

export default new WinScaleTip()
