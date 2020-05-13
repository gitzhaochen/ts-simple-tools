import { InitOption } from './windowScaleTip'
export interface WindowScaleTip {
  init(options: InitOption): void
}
export interface FormatPermil {
  (money: string | number, division: number): string
}
export const WindowScaleTip: WindowScaleTip
export const FormatPermil: FormatPermil
