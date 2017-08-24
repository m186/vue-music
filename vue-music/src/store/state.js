import {playMode} from 'common/js/config'

// vueX 中的状态文件
const state = {
    singer: {}, // 歌手
    playing: false, // 是否播放
    fullScreen: false, // 是否全屏显示
    playList: [], // 播放列表
    sequenceList: [], // 排序播放列表
    mode: playMode.sequence, // 播放状态 
    currentIndex: -1 // 当前播放节点
}

export default state