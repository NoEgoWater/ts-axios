const toString = Object.prototype.toString

// export function isDate(val: any): boolean {
//     return toString.call(val) === '[object Date]'
// }
// export function isObject(val: any): boolean {
//     return val !== null && typeof val === 'object'
// }

// 如果在引入文件中使用val.toString()方法没有编译提示，我们可以使用类型保护的方式写
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
// export function isObject(val: any): val is Object{
//     return val !== null && typeof val === 'object'
// }

// 判断普通对象
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
