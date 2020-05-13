declare global {
  interface Screen {
    deviceXDPI: number
    logicalXDPI: number
  }
}
export interface InitOption {
  style?: object
  noTipBtnStyle?: object
  alwaysShow?: boolean
}
