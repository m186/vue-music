// 修改状态
import * as types from './mutation-types'

const mutations = {
    // 歌手
    [types.SET_SINGER](state, singer) {
        state.singer = singer
    },
    // 是否播放
    [types.SET_PLAYING_STATE](state, flag) {
        state.playing = flag
    },
    // 是否全屏显示
    [types.SET_FULL_SCREEN](state, flag) {
        state.fullScreen = flag
    },
    // 播放列表
    [types.SET_PLAYLIST](state, list) {
        state.playList = list
    },
    // 排序播放列表
    [types.SET_SEQUENCE_LIST](state, list) {
        state.sequenceList = list
    },
    // 播放状态 
    [types.SET_PLAY_MODE](state, num) {
        state.mode = num
    },
    // 当前播放节点
    [types.SET_CURRENT_INDEX](state, num) {
        state.currentIndex = num
    }
}

export default mutations