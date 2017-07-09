/*
 * author: AceChen
 * 2017-7-8
 * readme: jsonp 的简单封装
*/
import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, _data) => {
            if (!err) {
                resolve(_data)
            } else {
                reject(err)
            }
        })
    })
}

function param(data) {
    let url = ''
    if (data) {
        for(let key in data) {
            let value = data[key] != undefined ? data[key] : ''
            url += `&${key}=${encodeURIComponent(value)}`
        }
    }
    return url ? url.substring(1) : ''
}