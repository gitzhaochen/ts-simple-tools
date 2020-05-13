import { FormatPermil } from '../../types/index'

import NP from 'number-precision'
NP.enableBoundaryChecking(false)
/**
 *
 * @param money 要格式化的金额 单位:分
 * @param division 除数 默认：100 （分=>元）
 * @returns 格式化后的金额 string
 */
const formatPermil: FormatPermil = function (money, division = 100) {
  if (typeof money === 'string') {
    money = parseFloat(money)
    if (isNaN(money)) {
      return '--'
    }
  }
  if (typeof money !== 'number') {
    return '--'
  }

  if (typeof money === 'number') {
    // money = parseFloat(money.toFixed(2))
    typeof division === 'number' && (money = NP.round(NP.divide(money, division), 2))
    const parts = money.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }
  return '--'
}
export default formatPermil
