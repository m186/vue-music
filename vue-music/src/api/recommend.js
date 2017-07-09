/*
 * author: AceChen
 * 2017-7-9
 * readme: 获取推荐页数据
*/
import jsonp from 'common/js/jsonp'
import {commonParams, option} from './config'

export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })

    return jsonp(url, data, option)
}