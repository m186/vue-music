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

// 匹配 dom 节点
export function hasClass(el, className) {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

// 获取或设置 dom 节点的属性
export function getData(el, name, val) {
    const prefix = 'data-'
    name = `${prefix}${name}`
    if (val) {
        return el.setAttribute(name, val)
    } else {
        return el.getAttribute(name)
    }
}

// 浏览器检测
let elementStyle = document.createElement('div').style
let vendor = (() => {
    let transformName = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
    }

    for (let key in transformName) {
        if (elementStyle[transformName[key]] !== undefined) {
            return key
        }
    }

    return false
})()

export function prefixStyle(style) {
    if (vendor === false) return false
    if (vendor === 'transform') return style
    return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}