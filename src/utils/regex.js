export function isHour24 (str) { // 24小时制时间（HH:mm:ss）
  return /^((?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$)/.test(str)
}

export function isHour12 (str) { // 12小时制时间（hh:mm:ss）
  return /^(1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/.test(str)
}

export function isBase64 (str) { // base64格式
  // eslint-disable-next-line no-useless-escape
  return /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i.test(str)
}

export function isStandardCurrency (str) { // 数字/货币金额（支持负数、千分位分隔符）
  return /(^[-]?[1-9]\d{0,2}($|(,\d{3})*($|(\.\d{1,2}$))))|((^[0](\.\d{1,2})?)|(^[-][0]\.\d{1,2}))$/.test(str)
}

export function isBankCardNumber (str) { // 银行卡号（16或19位）
  return /^([1-9]{1})(\d{15}|\d{18})$/.test(str)
}

export function isChineseName (str) { // 中文姓名
  return /^([\u4e00-\u9fa5·]{2,10})$/.test(str)
}

export function isNewEnergyCar (str) { // 新能源车牌号
  return /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/.test(str)
}
