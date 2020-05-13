import { InitOption } from './windowScaleTip'
export interface WindowScaleTip {
  render(): void
  init(options: InitOption): void
}
export interface FormatPermil {
  (money: string | number, division: number): string
}
