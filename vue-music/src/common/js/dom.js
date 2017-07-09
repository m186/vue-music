/*
 * author: AceChen
 * 2017-7-9
 * readme: dom 操作函数之添加 className
*/
export function addClass(el, className) {
    if(hasClass(el, className)) {
        return false
    }
    console.log(el.className)
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}