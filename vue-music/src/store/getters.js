// 相当于计算属性,用来计算状态的变更和数据映射

// 歌手
export const singer = state => state.singer
// 是否播放
export const playing = state => state.playing
// 是否全屏显示
export const fullScreen = state => state.fullScreen
// 播放列表
export const playList = state => state.playList
// 排序播放列表
export const sequenceList = state => state.sequenceList
// 播放状态 
export const mode = state => state.mode
// 当前播放节点
export const currentIndex = state => state.currentIndex
// 当前播放歌曲
export const currentSong = (state) => {
    return state.playList[state.currentIndex] || {}
}