declare global {
  interface Screen {
    deviceXDPI: number
    logicalXDPI: number
  }
}
interface InitOption {
  style?: object
  noTipBtnStyle?: object
  alwaysShow?: boolean
}
export { InitOption }
