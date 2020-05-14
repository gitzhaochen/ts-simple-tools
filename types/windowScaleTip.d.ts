declare global {
  interface Screen {
    deviceXDPI: number
    logicalXDPI: number
  }
}
interface AnyObject {
  [key: string]: any
}
export interface InitOption {
  /**提示样式 */
  style?: AnyObject
  /**按钮样式，默认文案：不再提示*/
  noTipBtnStyle?: AnyObject
  /**是否一直显示：默认false 点了关闭下次刷新不再提示，设置true 下次刷新还是会提示 */
  alwaysShow?: boolean
}
