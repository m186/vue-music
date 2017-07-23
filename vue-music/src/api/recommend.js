/*
 * author: AceChen
 * 2017-7-9
 * readme: 获取推荐页数据
*/
import jsonp from 'common/js/jsonp'
import {commonParams, option} from './config'
import axios from 'axios'

export function getRecommend() {
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

    const data = Object.assign({}, commonParams, {
        platform: 'h5',
        uin: 0,
        needNewCode: 1
    })

    return jsonp(url, data, option)
}

export function getDiscList() {
    const url = '/api/getDiscList'

    const data = Object.assign({}, commonParams, {
        platform: 'yqq',
        hostUin: 0,
        needNewCode: 0,
        sin: 0,
        ein: 29,
        sortId: 5,
        categoryId: 10000000,
        rnd: Math.random(),
        format: 'json'
    })

    return axios.get(url, {
        params: data
    })
    .then((res) => {
        return Promise.resolve(res.data)
    })
}